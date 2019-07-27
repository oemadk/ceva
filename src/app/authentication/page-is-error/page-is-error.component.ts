import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import { FormBuilder, FormGroup } from  '@angular/forms';
import { UploadService } from  '../../services/upload.service';
@Component({
  selector: 'app-page-is-error',
  templateUrl: './page-is-error.component.html',
  styleUrls: ['./page-is-error.component.css']
})
export class PageIsErrorComponent implements OnInit {
  public openingbalances = 0;
  public invoices = 0;
  public collections = 0;
  public discounts = 0;
  public allData: any[]
  public endingbalances = 0;
  public mobile = false;

  public invoicedata;
  public collectiondata;
  public discountdata;
  public endingbalancedata;


  constructor(private router: Router,private uploadService: UploadService,private activatedRoute: ActivatedRoute) { }

openOpeningBlanceTable(){
  if (this.openingbalances == 0){
    this.openingbalances = 1
  }else{
    this.openingbalances =0;
  }
}


openInvoices(){
	  if (this.invoices == 0){
    this.invoices = 1
  }else{
    this.invoices =0;
  }
}


openCollection(){
		  if (this.collections == 0){
    this.collections = 1
  }else{
    this.collections =0;
  }
}


openDiscount(){
		  if (this.discounts == 0){
    this.discounts = 1
  }else{
    this.discounts =0;
  }

}

openEndingBalance(){
			  if (this.endingbalances == 0){
    this.endingbalances = 1
  }else{
    this.endingbalances =0;
  }
}
  ngOnInit() {
          let customer_id = +this.activatedRoute.snapshot.params['id1'];
      let month = +this.activatedRoute.snapshot.params['id2'];

  this.uploadService.customerStatement(customer_id, month).subscribe(
         (res)=>{
             console.log(res)
             this.allData = res;
             this.invoicedata = res['invoice']
             console.log(this.invoicedata);
             console.log(this.invoicedata['0'].invoice_amount)
    }  );
  }

}
