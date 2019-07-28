


import { Component, ChangeDetectorRef, OnDestroy,OnInit } from '@angular/core';
import { EChartOption } from 'echarts';
import { SidebarService } from '../../services/sidebar.service';
import { ActivatedRoute } from '@angular/router';
import { NgbTabsetConfig } from '@ng-bootstrap/ng-bootstrap';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import 'hammerjs';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';
import {Router} from '@angular/router';
import { FormBuilder, FormGroup } from  '@angular/forms';
import { UploadService } from  '../../services/upload.service';
@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {

	public visitorsOptions: EChartOption = {};
	public visitsOptions: EChartOption = {};
	public r1 =1;
	public r2 = 0;
    public sidebarVisible: boolean = true;
    public allData;
    public galleryOptions: NgxGalleryOptions[];
    private _albums: Array<NgxGalleryImage> = new Array<NgxGalleryImage>();
    private _albumsTab1: Array<NgxGalleryImage> = new Array<NgxGalleryImage>();
    private _albumsTab2: Array<NgxGalleryImage> = new Array<NgxGalleryImage>();
    private _albumsTab3: Array<NgxGalleryImage> = new Array<NgxGalleryImage>();
    private _albumsTab4: Array<NgxGalleryImage> = new Array<NgxGalleryImage>();
    public fragment: string = "all";
    private ngUnsubscribe = new Subject();

	constructor(private router: Router,private uploadService: UploadService,private sidebarService: SidebarService, private cdr: ChangeDetectorRef, private activatedRoute: ActivatedRoute,private tabConfig: NgbTabsetConfig) {
        this.activatedRoute.fragment.pipe(takeUntil(this.ngUnsubscribe)).subscribe((fragment: string) => {
			if (fragment) {
				this.fragment = fragment;
			}
        });
        
        this.galleryOptions = [
            {
                width: '100%',
                height: '500px',
                thumbnailsColumns: 4,
                imageAnimation: NgxGalleryAnimation.Slide
            },
            // max-width 800
            {
                breakpoint: 800,
                width: '100%',
                height: '600px',
                imagePercent: 80,
                thumbnailsPercent: 20,
                thumbnailsMargin: 20,
                thumbnailMargin: 20
            },
            // max-width 400
            {
                breakpoint: 400,
                preview: false
            }
        ];
        
		this.tabConfig.type = 'pills';

		this.visitorsOptions = this.loadLineChartOptions([3, 5, 1, 6, 5, 4, 8, 3], "#49c5b6");
		this.visitsOptions = this.loadLineChartOptions([4, 6, 3, 2, 5, 6, 5, 4], "#f4516c");

		for (let i = 1; i <= 15; i++) {
			const src = 'assets/images/image-gallery/' + i + '.jpg';
			const thumb = 'assets/images/image-gallery/' + i + '.jpg';
            const album: NgxGalleryImage = {
                small: thumb,
                medium: thumb,
                big: src
			};
			this._albums.push(album);
		}
		for (let i = 1; i <= 4; i++) {
			const src = 'assets/images/image-gallery/' + i + '.jpg';
			const thumb = 'assets/images/image-gallery/' + i + '.jpg';
            const album: NgxGalleryImage = {
                small: thumb,
                medium: thumb,
                big: src
            };
			this._albumsTab1.push(album);
		}
		for (let i = 5; i <= 7; i++) {
			const src = 'assets/images/image-gallery/' + i + '.jpg';
			const thumb = 'assets/images/image-gallery/' + i + '.jpg';
            const album: NgxGalleryImage = {
                small: thumb,
                medium: thumb,
                big: src
            };
			this._albumsTab2.push(album);
		}
		for (let i = 8; i <= 12; i++) {
			const src = 'assets/images/image-gallery/' + i + '.jpg';
			const thumb = 'assets/images/image-gallery/' + i + '.jpg';
            const album: NgxGalleryImage = {
                small: thumb,
                medium: thumb,
                big: src
            };
			this._albumsTab3.push(album);
		}
		for (let i = 13; i <= 15; i++) {
			const src = 'assets/images/image-gallery/' + i + '.jpg';
			const thumb = 'assets/images/image-gallery/' + i + '.jpg';
            const album: NgxGalleryImage = {
                small: thumb,
                medium: thumb,
                big: src
            };
			this._albumsTab4.push(album);
		}

    }
    
	ngOnInit() {
		  let customer_id = +this.activatedRoute.snapshot.params['id1'];
		  let month = +this.activatedRoute.snapshot.params['id2'];

  this.uploadService.customerStatement(customer_id, month).subscribe(
         (res)=>{
             console.log(res)
             this.allData = res;
    }  );
	// console.log(id)	
	}



	submit(){
				  let customer_id = +this.activatedRoute.snapshot.params['id1'];
		  let month = +this.activatedRoute.snapshot.params['id2'];

		  this.router.navigate(['/authentication/user/'+ customer_id + '/month/' + month+ '/disagree']);

	}

    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }

	toggleFullWidth() {
		this.sidebarService.toggle();
		this.sidebarVisible = this.sidebarService.getStatus();
		this.cdr.detectChanges();
	}



  yourfunc1(value){
 this.r1 = 1;
 console.log(this.r1)
  }




  yourfunc2(value){
 this.r1 = 0;
 console.log(this.r1)
 
  }

submit2(){
			  this.router.navigate(['/authentication/success']);
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
