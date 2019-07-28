import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { EChartOption } from 'echarts';
import { SidebarService } from '../../services/sidebar.service';

import {Router, ActivatedRoute} from '@angular/router';
import { FormBuilder, FormGroup } from  '@angular/forms';
import { UploadService } from  '../../services/upload.service';
@Component({
	selector: 'app-page-faqq',
	templateUrl: './page-faqq.component.html',
	styleUrls: ['./page-faqq.component.css']
})
export class PageFaqqComponent implements OnInit {
	public allData;
	public visitorsOptions: EChartOption = {};
	public visitsOptions: EChartOption = {};
	public sidebarVisible: boolean = true;
	public collepse: string = "collapseOne";
	public openIt = 0;
	myCheckbox;

	constructor(private route: ActivatedRoute
,private uploadService: UploadService,private sidebarService: SidebarService, private cdr: ChangeDetectorRef) {
		this.visitorsOptions = this.loadLineChartOptions([3, 5, 1, 6, 5, 4, 8, 3], "#49c5b6");
		this.visitsOptions = this.loadLineChartOptions([4, 6, 3, 2, 5, 6, 5, 4], "#f4516c");
	}

	ngOnInit() {
		  let customer_id = +this.route.snapshot.params['id1'];
		  let month = +this.route.snapshot.params['id2'];

  this.uploadService.customerStatement(customer_id, month).subscribe(
         (res)=>{
             console.log(res)
             this.allData = res;
    }  );
	// console.log(id)	
	}

	toggleFullWidth() {
		this.sidebarService.toggle();
		this.sidebarVisible = this.sidebarService.getStatus();
		this.cdr.detectChanges();
	}

	toggleCollepseGeneral(collepse: string) {
		if (this.collepse != collepse){
			this.collepse = collepse;
		} else {
			this.collepse = "";
		}
		
	}

	yourfunc(value){
		if(this.openIt == 1){
		this.openIt = 0;

	}else{
		this.openIt = 1;
		
	}
		console.log(this.openIt)
	}

	sendsms(){
			let customer_id = +this.route.snapshot.params['id1'];
		  let month = +this.route.snapshot.params['id2'];
		  let number = '01111204333'
	 this.uploadService.sendsms(number,customer_id,month).subscribe(
         (res)=>{
             console.log(res)
             // this.allData = res;
    }  );
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
