import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { EChartOption } from 'echarts';
import { SidebarService } from '../../services/sidebar.service';
import { FormBuilder, FormGroup } from  '@angular/forms';
import { UploadService } from  '../../services/upload.service';
@Component({
	selector: 'app-page-blank',
	templateUrl: './page-blank.component.html',
	styleUrls: ['./page-blank.component.css']
})
export class PageBlankComponent implements OnInit {


	public openingBalance = 1;
	public invoices = 0;
	public discount = 0;
	public collections = 0;
	public endingBalance = 0;
	public visitorsOptions: EChartOption = {};
	public visitsOptions: EChartOption = {};
	public sidebarVisible: boolean = true;

  form: FormGroup;
  error: string;
  userId: number = 1;
  uploadResponse = { status: '', message: '', filePath: '' };

	constructor(private sidebarService: SidebarService, private cdr: ChangeDetectorRef, private formBuilder: FormBuilder, private uploadService: UploadService) {
		this.visitorsOptions = this.loadLineChartOptions([3, 5, 1, 6, 5, 4, 8, 3], "#49c5b6");
		this.visitsOptions = this.loadLineChartOptions([4, 6, 3, 2, 5, 6, 5, 4], "#f4516c");
	}



	ngOnInit() {

    this.form = this.formBuilder.group({
      avatar: ['']
    });
	}

	  onFileChange(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.form.get('avatar').setValue(file);
    }
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('file', this.form.get('avatar').value);

    this.uploadService.upload(formData).subscribe(
      (res) => this.uploadResponse = res,
      (err) => this.error = err
    );
  }

	public openingBalanceFunction(){
	 this.openingBalance = 1;
	 this.invoices = 0;
	 this.discount = 0;
	 this.collections = 0;
	 this.endingBalance = 0;
	}

	public invoiceFunction(){
	 this.openingBalance = 0;
	 this.invoices = 1;
	 this.discount = 0;
	 this.collections = 0;
	 this.endingBalance = 0;
	}


	public discountFunction(){
	 this.openingBalance = 0;
	 this.invoices = 0;
	 this.discount = 1;
	 this.collections = 0;
	 this.endingBalance = 0;
	}


	public collectionFunction(){
	 this.openingBalance = 0;
	 this.invoices = 0;
	 this.discount = 0;
	 this.collections = 1;
	 this.endingBalance = 0;
	}


	public endingBalanceFunction(){
	 this.openingBalance = 0;
	 this.invoices = 0;
	 this.discount = 0;
	 this.collections = 0;
	 this.endingBalance = 1;
	}

	toggleFullWidth() {
		this.sidebarService.toggle();
		this.sidebarVisible = this.sidebarService.getStatus();
		this.cdr.detectChanges();
	}

	loadLineChartOptions(data, color) {
		let chartOption: EChartOption;
		let xAxisData: Array<any> = new Array<any>();

		data.forEach(element => {
			xAxisData.push("");
		});

		return chartOption = {
			xAxis: {
				type: 'category',
				show: false,
				data: xAxisData,
				boundaryGap: false,
			},
			yAxis: {
				type: 'value',
				show: false
			},
			tooltip: {
				trigger: 'axis',
				formatter: function (params, ticket, callback) {
					return '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:' + color + ';"></span>' + params[0].value;
				}
			},
			grid: {
				left: '0%',
				right: '0%',
				bottom: '0%',
				top: '0%',
				containLabel: false
			},
			series: [{
				data: data,
				type: 'line',
				showSymbol: false,
				symbolSize: 1,
				lineStyle: {
					color: color,
					width: 1
				}
			}]
		};
	}

}
