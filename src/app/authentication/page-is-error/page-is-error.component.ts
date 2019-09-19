import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import { UploadService } from  '../../services/upload.service';
import { FormControl, FormGroup, FormBuilder,FormArray, Validators } from '@angular/forms';
 import { ResponsiveModule } from 'ngx-responsive'

@Component({
  selector: 'app-page-is-error',
  templateUrl: './page-is-error.component.html',
  styleUrls: ['./page-is-error.component.css']
})
export class PageIsErrorComponent implements OnInit {
     contactForm  : FormGroup;
     contactForm2  : FormGroup;

  public openingbalances = 0;
  public invoices = 0;
  public collections = 0;
  public discounts = 0;
  public allData: any[]
  public endingbalances = 0;
  public mobile = false;
  public i;
  public invoicedata;
  public collectiondata;
  public discountdata;
  public endingbalancedata;

  public r1 = 0;
  public r2 = 0;
  public r3 = 0;
  public r4 = 0;
  public r5 = 0;
  constructor(private formGroup : FormBuilder,private router: Router,private uploadService: UploadService,private activatedRoute: ActivatedRoute) { }

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


  yourfunc(value){
    if(this.r1 == 1){
    this.r1 = 0;

  }else{
    this.r1 = 1;
    
  }
    console.log(this.r1)
  }



  yourfunc2(value){
    if(this.r2 == 1){
    this.r2 = 0;

  }else{
    this.r2 = 1;
    
  }
    console.log(this.r1)
  }

  yourfunc3(value){
    if(this.r3 == 1){
    this.r3 = 0;

  }else{
    this.r3 = 1;
    
  }
    console.log(this.r3)
  }

  yourfunc4(value){
    if(this.r4 == 1){
    this.r4 = 0;

  }else{
    this.r4 = 1;
    
  }
    console.log(this.r4)
  }

  yourfunc5(value){
    if(this.r5 == 1){
    this.r5 = 0;

  }else{
    this.r5 = 1;
    
  }
    console.log(this.r5)
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
  

     
      this.contactForm = this.formGroup.group({
         discount_comment : ['', { validators: [Validators.required] }],
         discount_id : ['', { validators: [Validators.required] }],
         amount_user_wantsTo_pay_discounts:['', { validators: [Validators.required] }],

              endingbalance_comment : ['', { validators: [Validators.required] }],
         endingbalance_id : ['', { validators: [Validators.required] }], 
         //endingbalance
           amount_user_wantsTo_pay : ['', { validators: [Validators.required] }], 


         invoice_comment : ['', { validators: [Validators.required] }],
         invoice_id : ['', { validators: [Validators.required] }],
         user_pays_invoices : ['', { validators: [Validators.required] }],

          opening_comment : ['', { validators: [Validators.required] }],
         opening_id : ['', { validators: [Validators.required] }],
         amount_user_wantsTo_pay_opening : ['', { validators: [Validators.required] }],


          collection_comment : ['', { validators: [Validators.required] }],
          collection_id : ['', { validators: [Validators.required] }],
          amount_user_wantsTo_pay_collections : ['', { validators: [Validators.required] }],

      })

            this.contactForm2 = this.formGroup.group({
         customer_statement_id : ['', { validators: [Validators.required] }],
         difference_in_payment_comment : ['', { validators: [Validators.required] }],
              difference_in_amount_comment : ['', { validators: [Validators.required] }],
         payment_not_documented_comment : ['', { validators: [Validators.required] }], 
         invoice_not_documented_comment : ['', { validators: [Validators.required] }], 
         other_comment : ['', { validators: [Validators.required] }],
       

      })

}

comments(){
   this.uploadService.addComments(this.contactForm.value).subscribe((res)=>{
console.log(res)
console.log(this.i)
})

      this.uploadService.addComments2(this.contactForm2.value).subscribe((res)=>{
console.log(res)
console.log(this.i)
})

              this.router.navigate(['/authentication/success']);

}



}