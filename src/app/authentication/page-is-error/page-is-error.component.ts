import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-is-error',
  templateUrl: './page-is-error.component.html',
  styleUrls: ['./page-is-error.component.css']
})
export class PageIsErrorComponent implements OnInit {
  public openingbalance = 0;
  public invoices = 0;
  public collection = 0;
  public discount = 0;
  public endingbalance = 0;
  public mobile = false;

  constructor() { }

openOpeningBlanceTable(){
  if (this.openingbalance == 0){
    this.openingbalance = 1
  }else{
    this.openingbalance =0;
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
		  if (this.collection == 0){
    this.collection = 1
  }else{
    this.collection =0;
  }
}


openDiscount(){
		  if (this.discount == 0){
    this.discount = 1
  }else{
    this.discount =0;
  }

}

openEndingBalance(){
			  if (this.endingbalance == 0){
    this.endingbalance = 1
  }else{
    this.endingbalance =0;
  }
}
  ngOnInit() {
  }

}
