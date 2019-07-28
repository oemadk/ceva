(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-authentication-authentication-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/authentication/authentication/authentication.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/authentication/authentication/authentication.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/authentication/page-forbiddon-error/page-forbiddon-error.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/authentication/page-forbiddon-error/page-forbiddon-error.component.html ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div style=\"text-align: center;\">\n\t<img style=\"margin:0px auto; text-align: center;\" src=\"assets/images/success.png\">\n\n</div>\n\n<h1 style=\"margin:0px auto; text-align: center;\">Successfull</h1>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/authentication/page-forgot-password/page-forgot-password.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/authentication/page-forgot-password/page-forgot-password.component.html ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\n\t<div class=\"vertical-align-wrap\">\n\t\t<div class=\"vertical-align-middle auth-main\">\n\t\t\t<div class=\"auth-box\">\n\t\t\t\t<div class=\"top\">\n\t\t\t\t\t<img src=\"assets/images/logo-white.svg\" alt=\"Lucid\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"card\">\n\t\t\t\t\t<div class=\"header\">\n\t\t\t\t\t\t<p class=\"lead\">Recover my password</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"body\">\n\t\t\t\t\t\t<p>Please enter your email address below to receive instructions for resetting password.</p>\n\t\t\t\t\t\t<form class=\"form-auth-small\" #lockForm=\"ngForm\" (ngSubmit)=\"onSubmit()\">\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<input type=\"password\" class=\"form-control\" id=\"signup-password\" placeholder=\"Password\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-primary btn-lg btn-block\">RESET PASSWORD</button>\n\t\t\t\t\t\t\t<div class=\"bottom\">\n\t\t\t\t\t\t\t\t<span class=\"helper-text\">Know your password? <a [routerLink]=\"['/authentication/page-login']\">Login</a></span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</form>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/authentication/page-is-error/page-is-error.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/authentication/page-is-error/page-is-error.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\" *ngIf=\"allData\">\n\t\t<form [formGroup] = \"contactForm\">\n\n  <div class=\"logo\" style=\"text-align: center; padding: 10px;\"><img style=\"width: 5em;\" src=\"assets/images/logo.png\" alt=\"cc-logo\" border=\"0\">\n  </div>\n\n  <br>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t<table class=\"table table-hover\">\n\t\t\t\t\t\t\t<thead class=\"thead-dark\">\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<th colspan=\"1\" style=\"text-align: center;\">ID</th>\n\t\t\t\t\t\t\t\t\t\t<th colspan=\"1\" style=\"text-align: center;\">Document Type</th>\n\t\t\t\t\t\t\t\t\t\t<th colspan=\"2\" style=\"text-align: center;\">Total</th>\n\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t<tr (click)=\"openOpeningBlanceTable()\">\n\n\t\t\t\t\t\t\t\t\t<td colspan=\"1\">#1</td>\n\t\t\t\t\t\t\t\t\t<td colspan=\"1\"><span style=\"background-color: #ffc000\" class=\"dot\"></span> Opening Balance</td>\n\n\t\t\t\t\t\t\t\t\t<td colspan=\"1\">{{allData.openingbalance['0']['opening_balance_amount']}}LE</td>\n\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t<div style=\"    display: contents;\" *ngIf=\"openingbalances\">\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t<th>Document Number</th>\n\n\t\t\t\t\t\t\t\t\t<td>{{allData.openingbalance['0']['id']}}</td>\n</tr>\n\n\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t<th> Date</th>\n\n\t\t\t\t\t\t\t\t\t<td>{{allData.openingbalance['0']['opening_balance_date']}}</td>\n</tr>\n\n\n\n<!--\n\t\t\t\t\t\t\t\t\t<th>Amount</th>\n\t\t\t\t\t\t\t\t\t<th>Price</th>\n\t\t\t\t\t\t\t\t\t<th >Total</th>\n\t\t\t\t\t\t\t\t\t<th>Remarks</th>\n-->\n\n\n\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t<th>Amount</th>\n\n\t\t\t\t\t\t\t\t\t<td></td>\n</tr>\n\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t<th>Price</th>\n\n\t\t\t\t\t\t\t\t\t<td></td>\n</tr>\n\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t<th>Total</th>\n\n\t\t\t\t\t\t\t\t\t<td>{{allData.openingbalance['0']['opening_balance_amount']}}LE</td>\n</tr>\n\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t<th>Remarks</th>\n\n\t\t\t\t\t\t\t\t\t<td></td>\n</tr>\n<tr>\n\t<td></td>\n\t\t<input type=\"hidden\" formControlName=\"opening_id\" [ngModel]=\"allData.openingbalance['0']['id']\">\n\n\t\t\t\t<textarea formControlName=\"opening_comment\" rows=\"2\" cols=\"28\"></textarea>\n</tr>\n\n\n\n\t\t\t\t\t\t\t\t</div>\n\n\n\n\n\n\n<!--Invoices-->\n<span style=\"    display: contents;\" *ngFor=\"let invoice of allData['invoice']\">\n\t\t\t\t\t\t\t\t<tr  (click)=\"openInvoices()\">\n\n\n\t\t\t\t\t<td  colspan=\"1\">#2</td>\n\t\t\t\t\t\t\t\t\t<td colspan=\"1\"><span style=\"background-color: #8eb4e3\" class=\"dot\"></span> Invoices</td>\n\n\t\t\t\t\t\t\t\t\t<td colspan=\"1\">{{invoice.invoice_amount}}LE</td>\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t<span style=\"    display: contents;\" *ngIf=\"invoices\">\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t<th>Document Number</th>\n\n\t\t\t\t\t\t\t\t\t<td>#{{invoice.invoice_id}}</td>\n</tr>\n\n\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t<th> Date</th>\n\n\t\t\t\t\t\t\t\t\t<td>{{invoice.invoice_date}}</td>\n</tr>\n\n\n\n<!--\n\t\t\t\t\t\t\t\t\t<th>Amount</th>\n\t\t\t\t\t\t\t\t\t<th>Price</th>\n\t\t\t\t\t\t\t\t\t<th >Total</th>\n\t\t\t\t\t\t\t\t\t<th>Remarks</th>\n-->\n\n\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t<th>Amount</th>\n\n\t\t\t\t\t\t\t\t\t<td>{{invoice.amount}}</td>\n</tr>\n\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t<th>Price</th>\n\n\t\t\t\t\t\t\t\t\t<td>{{invoice.unit_price}}</td>\n</tr>\n\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t<th>Total</th>\n\n\t\t\t\t\t\t\t\t\t<td>{{invoice.invoice_amount}}LE</td>\n</tr>\n\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t<th>Remarks</th>\n\n\t\t\t\t\t\t\t\t\t<td></td>\n</tr>\n<tr>\n\t<td></td>\n\n\t\t<input type=\"hidden\" formControlName=\"invoice_id\" [ngModel]=\"invoice.id\">\n\n\t\t\t\t<textarea formControlName=\"invoice_comment\" rows=\"2\" cols=\"28\"></textarea>\n</tr>\n\n\n\n\t\t\t\t\t\t\t\t</span>\n</span>\n\n<!--invoices-->\n\n\n\n<!--collection-->\n<span style=\"    display: contents;\" *ngFor=\"let collection of allData['collection']\">\n\n\t\t\t\t\t\t\t\t<tr (click)=\"openCollection()\">\n\n<td  colspan=\"1\">#3</td>\n\t\t\t\t\t\t\t\t\t<td colspan=\"1\"><span style=\"background-color: #ffff00\" class=\"dot\"></span> Collection</td>\n\n\t\t\t\t\t\t\t\t\t<td colspan=\"1\">{{collection.amount_collected}}LE</td>\n\n\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t<span style=\"    display: contents;\"  *ngIf=\"collections\">\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t<th>Document Number</th>\n\n\t\t\t\t\t\t\t\t\t<td>#{{collection.deposit_statement}}</td>\n</tr>\n\n\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t<th> Date</th>\n\n\t\t\t\t\t\t\t\t\t<td>{{collection.collection_date}}</td>\n</tr>\n\n\n\n<!--\n\t\t\t\t\t\t\t\t\t<th>Amount</th>\n\t\t\t\t\t\t\t\t\t<th>Price</th>\n\t\t\t\t\t\t\t\t\t<th >Total</th>\n\t\t\t\t\t\t\t\t\t<th>Remarks</th>\n-->\n\n\n\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t<th>Amount</th>\n\n\t\t\t\t\t\t\t\t\t<td>{{collection.amount_collected}}</td>\n</tr>\n\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t<th>Price</th>\n\n\t\t\t\t\t\t\t\t\t<td></td>\n</tr>\n\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t<th>Total</th>\n\n\t\t\t\t\t\t\t\t\t<td>{{collection.amount_collected}}LE</td>\n</tr>\n\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t<th>Remarks</th>\n\n\t\t\t\t\t\t\t\t\t<td></td>\n</tr>\n<tr>\n\t<td></td>\n\n\t\t\t<input type=\"hidden\" formControlName=\"collection_id\" [ngModel]=\"collection.id\">\n\n\t\t\t\t<textarea formControlName=\"collection_comment\" rows=\"2\" cols=\"28\"></textarea>\n</tr>\n\n\n\n\t\t\t\t\t\t\t\t</span>\n</span>\n<!--collection-->\n\n\n\n\n<!--Discount-->\n<span style=\"    display: contents;\" *ngFor=\"let discount of allData['discount']\">\n\n\t\t\t\t\t\t\t\t<tr (click)=\"openDiscount()\">\n\n<td  colspan=\"1\">#4</td>\n\t\t\t\t\t\t\t\t\t<td colspan=\"1\"><span style=\"background-color: #d99694\" class=\"dot\"></span> Discounts</td>\n\n\t\t\t\t\t\t\t\t\t<td colspan=\"1\">-{{discount.discount_amount}}LE</td>\n\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t<span style=\"    display: contents;\" *ngIf=\"discounts\">\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t<th>Document Number</th>\n\n\t\t\t\t\t\t\t\t\t<td>#{{discount.id}}</td>\n</tr>\n\n\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t<th> Date</th>\n\n\t\t\t\t\t\t\t\t\t<td>{{discount.discount_date}}</td>\n</tr>\n\n\n\n<!--\n\t\t\t\t\t\t\t\t\t<th>Amount</th>\n\t\t\t\t\t\t\t\t\t<th>Price</th>\n\t\t\t\t\t\t\t\t\t<th >Total</th>\n\t\t\t\t\t\t\t\t\t<th>Remarks</th>\n-->\n\n\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t<th>Amount</th>\n\n\t\t\t\t\t\t\t\t\t<td></td>\n</tr>\n\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t<th>Price</th>\n\n\t\t\t\t\t\t\t\t\t<td></td>\n</tr>\n\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t<th>Total</th>\n\n\t\t\t\t\t\t\t\t\t<td>{{discount.discount_amount}}LE</td>\n</tr>\n\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t<th>Remarks</th>\n\n\t\t\t\t\t\t\t\t\t<td></td>\n</tr>\n<tr>\n\t<td></td>\n\t\t\n\t\t\t<td colspan=\"2\">\n\t\t<input type=\"hidden\" formControlName=\"discount_id\" [ngModel]=\"discount.id\">\n\n\t\t\t\t<textarea formControlName=\"discount_comment\" rows=\"2\" cols=\"28\"></textarea>\n\n\n\n\t\t\t</td>\n\n</tr>\n\n\n\n\t\t\t\t\t\t\t\t</span>\n</span>\n<!--Discount-->\n\n\n\n\n\n\n\n<!--ENding Balance-->\n<span style=\"    display: contents;\" *ngFor=\"let endingbalance of allData['endingbalance']\">\n\n\t\t\t\t\t\t\t\t<tr (click)=\"openEndingBalance()\">\n\n\t\t\t\t\t\t\t\t\t\n\n<td  colspan=\"1\">#5</td>\n\t\t\t\t\t\t\t\t\t<td colspan=\"1\"><span style=\"background-color: #c4bd97\" class=\"dot\"></span> Ending Balance</td>\n\n\t\t\t\t\t\t\t\t\t<td colspan=\"1\">{{endingbalance.ending_balance}}LE</td>\n\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t<span style=\"    display: contents;\" *ngIf=\"endingbalances\">\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t<th>Document Number</th>\n\n\t\t\t\t\t\t\t\t\t<td>#{{endingbalance.id}}</td>\n</tr>\n\n\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t<th> Date</th>\n\n\t\t\t\t\t\t\t\t\t<td>{{endingbalance.ending_balance_date}}</td>\n</tr>\n\n\n\n<!--\n\t\t\t\t\t\t\t\t\t<th>Amount</th>\n\t\t\t\t\t\t\t\t\t<th>Price</th>\n\t\t\t\t\t\t\t\t\t<th >Total</th>\n\t\t\t\t\t\t\t\t\t<th>Remarks</th>\n-->\n\n\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t<th>Amount</th>\n\n\t\t\t\t\t\t\t\t\t<td></td>\n</tr>\n\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t<th>Price</th>\n\n\t\t\t\t\t\t\t\t\t<td></td>\n</tr>\n\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t<th>Total</th>\n\n\t\t\t\t\t\t\t\t\t<td>{{endingbalance.ending_balance}}LE</td>\n</tr>\n\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t<th>Remarks</th>\n\n\t\t\t\t\t\t\t\t\t<td></td>\n</tr>\n<tr>\n\n\n\n\t<td></td>\n\t\t\t\t<input type=\"hidden\" formControlName=\"endingbalance_id\" [ngModel]=\"endingbalance.id\">\n\n\t<td colspan=\"2\"><textarea formControlName=\"endingbalance_comment\" rows=\"2\" cols=\"28\"></textarea></td>\n</tr>\n\n\n\n\t\t\t\t\t\t\t\t</span>\n</span>\n\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t</table>\n  \t\t</form>\n\n</div>\n\n\n<div>\n\t<div class=\"container\">\n\t\t\t\t<form [formGroup] = \"contactForm2\">\n\t\t\t\t<input type=\"hidden\" formControlName=\"customer_statement_id\" [ngModel]=\"allData.customerstatement['0'].id\">\n\n\t\t<h2  style=\"    padding: 12px;\n    font-size: 1em; background-color: #343a40; color: white;\n\">Select the reasons for disagreeing:</h2>\n\n<div>\n\n<div  style=\"font-size: 1em;     padding-left: 39px;\" >\n\t<label style=\"display: inline-block;\"><input (change)=\"yourfunc($event)\"  type=\"checkbox\"><span>Difference in Payment</span></label>\n \t<div *ngIf=\"r1\">\n \t<textarea formControlName=\"difference_in_payment_comment\" rows=\"2\" cols=\"36\"></textarea>\n \t</div>\n\n</div>\n\n</div>\n\n<div>\n<div style=\" font-size: 1em;     padding-left: 39px;\" >\n\t<label style=\"display: inline-block;\"><input  (change)=\"yourfunc2($event)\" type=\"checkbox\"><span>Difference in Amount</span></label>\n \t<div *ngIf=\"r2\">\n \t<textarea formControlName=\"difference_in_amount_comment\" rows=\"2\" cols=\"36\"></textarea>\n \t</div>\n\n</div>\n\n</div>\n\n<div>\n<div style=\" font-size: 1em;     padding-left: 39px;\" >\n\t<label style=\"display: inline-block;\"><input (change)=\"yourfunc3($event)\" type=\"checkbox\"><span>Payment not documented</span></label>\n \t<div *ngIf=\"r3\">\n \t<textarea formControlName=\"payment_not_documented_comment\" rows=\"2\" cols=\"36\"></textarea>\n \t</div>\n\n</div>\n\n</div>\n\n<div>\n<div style=\" font-size: 1em;     padding-left: 39px;\" >\n\t<label style=\"display: inline-block;\"><input (change)=\"yourfunc4($event)\" type=\"checkbox\"><span>Invoice not documented</span></label>\n \t<div *ngIf=\"r4\">\n \t<textarea formControlName=\"invoice_not_documented_comment\" rows=\"2\" cols=\"36\"></textarea>\n \t</div>\n\n</div>\n\n</div>\n\n<div>\n<div style=\" font-size: 1em;    padding-left: 39px;\"  >\n\t<label style=\"display: inline-block;\"><input (change)=\"yourfunc5($event)\" type=\"checkbox\"><span>Other</span></label>\n \t<div *ngIf=\"r5\">\n \t<textarea formControlName=\"other_comment\" rows=\"2\" cols=\"36\"></textarea>\n \t</div>\n\n</div>\n\n</div>\n\n\t</form>\t\t\t\t\t\t\t\n</div>\n\t</div>\n\t\n\n\n\n\n\n\n  <div class=\"button-wrap\">\n\n  <button (click)=\"comments()\" class=\"explore\">\n    Submit\n  </button>  \n  </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/authentication/page-lockscreen/page-lockscreen.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/authentication/page-lockscreen/page-lockscreen.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 style=\"margin:0px auto; text-align: center;\">Thank you</h1>\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/authentication/page-login/page-login.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/authentication/page-login/page-login.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\n\t<div class=\"vertical-align-wrap\">\n\t\t<div class=\"vertical-align-middle auth-main\">\n\t\t\t<div class=\"auth-box\">\n\t\t\t\t<div class=\"top\">\n\t\t\t\t\t<img src=\"assets/images/logo.png\" alt=\"Lucid\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"card\">\n\t\t\t\t\t<div class=\"header\">\n\t\t\t\t\t\t<p class=\"lead\">Login to your account</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"body\">\n\t\t\t\t\t\t<form class=\"form-auth-small\" #loginForm=\"ngForm\" (ngSubmit)=\"onSubmit()\">\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<label for=\"signin-email\" class=\"control-label sr-only\">Email</label>\n\t\t\t\t\t\t\t\t<input type=\"email\" class=\"form-control\" id=\"signin-email\" value=\"user@domain.com\" placeholder=\"Email\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<label for=\"signin-password\" class=\"control-label sr-only\">Password</label>\n\t\t\t\t\t\t\t\t<input type=\"password\" class=\"form-control\" id=\"signin-password\" value=\"thisisthepassword\" placeholder=\"Password\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"form-group clearfix\">\n\t\t\t\t\t\t\t\t<label class=\"fancy-checkbox element-left\">\n\t\t\t\t\t\t\t\t\t<input type=\"checkbox\">\n\t\t\t\t\t\t\t\t\t<span>Remember me</span>\n\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-primary btn-lg btn-block\">LOGIN</button>\n\t\t\t\t\t\t\t<div class=\"bottom\">\n\t\t\t\t\t\t\t\t<span class=\"helper-text m-b-10\"><i class=\"fa fa-lock\"></i>&nbsp;<a [routerLink]=\"['/authentication/page-forgot-password']\">Forgot\n\t\t\t\t\t\t\t\t\t\tpassword?</a></span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</form>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/authentication/page-not-found/page-not-found.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/authentication/page-not-found/page-not-found.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"logo\"><img style=\"width: 5em;\" src=\"assets/images/logo.png\" alt=\"cc-logo\" border=\"0\">\n    <div class=\"c-name\">\n      Ceva\n    </div>\n  </div>\n  <div class=\"illustration\">\n    <div class=\"hgroup\">\n    <span class=\"name\">Hello, {{allData['openingbalance']['0']['customer_name']}}</span>\n    <h1>Ceva Confirmation System</h1>\n    </div>\n<!--     <a href=\"https://ibb.co/kSxWRDz\"><img src=\"https://i.ibb.co/mcGMLyd/undraw-super-thank-you-obwk.png\" alt=\"undraw-super-thank-you-obwk\" border=\"0\"></a> -->\n  </div>\n<!--   <span class=\"separator\"></span> -->\n  <div class=\"hgroup\">\n    <p>Please revise your company's Balance at Ceva's at {{allData['duebalance']['0']['due_date']}}\n      Which is 12,000 LE\n  </p>\n\n        <form>\n  <input  (change)=\"yourfunc1($event)\" type=\"radio\" id=\"fruit1\" name=\"fruit\" value=\"Apple\">\n  <label  style=\"display: inline-block;\" for=\"fruit1\">Agree</label>\n\n    <input (change)=\"yourfunc2($event)\" type=\"radio\" id=\"fruit2\" name=\"fruit\" value=\"no\">\n  <label   style=\"display: inline-block;\" for=\"fruit2\">Disagree</label>\n</form>\n      <span class=\"raised\">Your Balance </span>\n      <input type=\"text\" name=\"\">\n    <p>PLease note that the overdue that needs to be paid immediatley is  {{allData['duebalance']['0']['overdue_balance']}} EGP </p>\n    \n    <p>and the due balance this month is {{allData['duebalance']['0']['due_balance']}} EGP <br>\n    </p>\n    \n  </div>\n  <div class=\"button-wrap\">\n  <button *ngIf=\"r1 == 0\" (click)=\"submit()\" class=\"explore\">\n    Submit\n  </button>  \n\n\n    <button *ngIf=\"r1 == 1\" (click)=\"submit2()\" class=\"explore\">\n    Submit\n  </button>  \n  </div>\n\n</div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/authentication/page-register/page-register.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/authentication/page-register/page-register.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\n\t<div class=\"vertical-align-wrap\">\n\t\t<div class=\"vertical-align-middle auth-main\">\n\t\t\t<div class=\"auth-box\">\n\t\t\t\t<div class=\"top\">\n\t\t\t\t\t<img src=\"assets/images/logo-white.svg\" alt=\"Lucid\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"card\">\n\t\t\t\t\t<div class=\"header\">\n\t\t\t\t\t\t<p class=\"lead\">Create an account</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"body\">\n\t\t\t\t\t\t<form class=\"form-auth-small\" #registrationForm=\"ngForm\" (ngSubmit)=\"onSubmit()\">\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<label for=\"signup-email\" class=\"control-label sr-only\">Email</label>\n\t\t\t\t\t\t\t\t<input type=\"email\" class=\"form-control\" id=\"signup-email\" placeholder=\"Your email\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<label for=\"signup-password\" class=\"control-label sr-only\">Password</label>\n\t\t\t\t\t\t\t\t<input type=\"password\" class=\"form-control\" id=\"signup-password\" placeholder=\"Password\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-primary btn-lg btn-block\">REGISTER</button>\n\t\t\t\t\t\t\t<div class=\"bottom\">\n\t\t\t\t\t\t\t\t<span class=\"helper-text\">Already have an account? <a [routerLink]=\"['/authentication/page-login']\">Login</a></span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</form>\n\t\t\t\t\t\t<div class=\"separator-linethrough\"><span>OR</span></div>\n\t\t\t\t\t\t<button class=\"btn btn-signin-social\"><i class=\"fa fa-facebook-official facebook-color\"></i> Sign in with\n\t\t\t\t\t\t\tFacebook</button>\n\t\t\t\t\t\t<button class=\"btn btn-signin-social\"><i class=\"fa fa-twitter twitter-color\"></i> Sign in with Twitter</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/authentication/page-try-later/page-try-later.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/authentication/page-try-later/page-try-later.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<img style=\"margin:0 auto;\" src=\"assets/images/success.png\">"

/***/ }),

/***/ "./src/app/authentication/authentication.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/authentication/authentication.module.ts ***!
  \*********************************************************/
/*! exports provided: AuthenticationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationModule", function() { return AuthenticationModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _page_login_page_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page-login/page-login.component */ "./src/app/authentication/page-login/page-login.component.ts");
/* harmony import */ var _authentication_authentication_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./authentication/authentication.component */ "./src/app/authentication/authentication/authentication.component.ts");
/* harmony import */ var _authentication_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./authentication.routing */ "./src/app/authentication/authentication.routing.ts");
/* harmony import */ var _page_register_page_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./page-register/page-register.component */ "./src/app/authentication/page-register/page-register.component.ts");
/* harmony import */ var _page_lockscreen_page_lockscreen_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./page-lockscreen/page-lockscreen.component */ "./src/app/authentication/page-lockscreen/page-lockscreen.component.ts");
/* harmony import */ var _page_forgot_password_page_forgot_password_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./page-forgot-password/page-forgot-password.component */ "./src/app/authentication/page-forgot-password/page-forgot-password.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/authentication/page-not-found/page-not-found.component.ts");
/* harmony import */ var _page_forbiddon_error_page_forbiddon_error_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./page-forbiddon-error/page-forbiddon-error.component */ "./src/app/authentication/page-forbiddon-error/page-forbiddon-error.component.ts");
/* harmony import */ var _page_is_error_page_is_error_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./page-is-error/page-is-error.component */ "./src/app/authentication/page-is-error/page-is-error.component.ts");
/* harmony import */ var _page_try_later_page_try_later_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./page-try-later/page-try-later.component */ "./src/app/authentication/page-try-later/page-try-later.component.ts");
/* harmony import */ var _pages_pages_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../pages/pages.module */ "./src/app/pages/pages.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
















var AuthenticationModule = /** @class */ (function () {
    function AuthenticationModule() {
    }
    AuthenticationModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_page_login_page_login_component__WEBPACK_IMPORTED_MODULE_3__["PageLoginComponent"], _authentication_authentication_component__WEBPACK_IMPORTED_MODULE_4__["AuthenticationComponent"], _page_register_page_register_component__WEBPACK_IMPORTED_MODULE_6__["PageRegisterComponent"], _page_lockscreen_page_lockscreen_component__WEBPACK_IMPORTED_MODULE_7__["PageLockscreenComponent"], _page_forgot_password_page_forgot_password_component__WEBPACK_IMPORTED_MODULE_8__["PageForgotPasswordComponent"], _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_9__["PageNotFoundComponent"], _page_forbiddon_error_page_forbiddon_error_component__WEBPACK_IMPORTED_MODULE_10__["PageForbiddonErrorComponent"], _page_is_error_page_is_error_component__WEBPACK_IMPORTED_MODULE_11__["PageIsErrorComponent"], _page_try_later_page_try_later_component__WEBPACK_IMPORTED_MODULE_12__["PageTryLaterComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _authentication_routing__WEBPACK_IMPORTED_MODULE_5__["routing"],
                _pages_pages_module__WEBPACK_IMPORTED_MODULE_13__["PagesModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ReactiveFormsModule"],
            ]
        })
    ], AuthenticationModule);
    return AuthenticationModule;
}());



/***/ }),

/***/ "./src/app/authentication/authentication.routing.ts":
/*!**********************************************************!*\
  !*** ./src/app/authentication/authentication.routing.ts ***!
  \**********************************************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _authentication_authentication_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authentication/authentication.component */ "./src/app/authentication/authentication/authentication.component.ts");
/* harmony import */ var _page_login_page_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page-login/page-login.component */ "./src/app/authentication/page-login/page-login.component.ts");
/* harmony import */ var _page_register_page_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page-register/page-register.component */ "./src/app/authentication/page-register/page-register.component.ts");
/* harmony import */ var _page_lockscreen_page_lockscreen_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./page-lockscreen/page-lockscreen.component */ "./src/app/authentication/page-lockscreen/page-lockscreen.component.ts");
/* harmony import */ var _page_forgot_password_page_forgot_password_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page-forgot-password/page-forgot-password.component */ "./src/app/authentication/page-forgot-password/page-forgot-password.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/authentication/page-not-found/page-not-found.component.ts");
/* harmony import */ var _page_forbiddon_error_page_forbiddon_error_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./page-forbiddon-error/page-forbiddon-error.component */ "./src/app/authentication/page-forbiddon-error/page-forbiddon-error.component.ts");
/* harmony import */ var _page_is_error_page_is_error_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./page-is-error/page-is-error.component */ "./src/app/authentication/page-is-error/page-is-error.component.ts");
/* harmony import */ var _page_try_later_page_try_later_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./page-try-later/page-try-later.component */ "./src/app/authentication/page-try-later/page-try-later.component.ts");
/* harmony import */ var _pages_page_maintanance_page_maintanance_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../pages/page-maintanance/page-maintanance.component */ "./src/app/pages/page-maintanance/page-maintanance.component.ts");











var routes = [
    {
        path: '',
        component: _authentication_authentication_component__WEBPACK_IMPORTED_MODULE_1__["AuthenticationComponent"],
        children: [
            { path: '', redirectTo: 'page-login', pathMatch: 'full' },
            { path: 'page-login', component: _page_login_page_login_component__WEBPACK_IMPORTED_MODULE_2__["PageLoginComponent"], data: { title: 'Login :: Lucid Angular' } },
            { path: 'page-register', component: _page_register_page_register_component__WEBPACK_IMPORTED_MODULE_3__["PageRegisterComponent"], data: { title: 'Register :: Lucid Angular' } },
            { path: 'page-lockscreen', component: _page_lockscreen_page_lockscreen_component__WEBPACK_IMPORTED_MODULE_4__["PageLockscreenComponent"], data: { title: 'Lock Screen :: Lucid Angular' } },
            { path: 'page-forgot-password', component: _page_forgot_password_page_forgot_password_component__WEBPACK_IMPORTED_MODULE_5__["PageForgotPasswordComponent"], data: { title: 'Forgot Password :: Lucid Angular' } },
            { path: 'user/:id1/month/:id2', component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_6__["PageNotFoundComponent"], data: { title: 'Page-404 :: Lucid Angular' } },
            { path: 'success', component: _page_forbiddon_error_page_forbiddon_error_component__WEBPACK_IMPORTED_MODULE_7__["PageForbiddonErrorComponent"], data: { title: 'Page-403 :: Lucid Angular' } },
            { path: 'user/:id1/month/:id2/disagree', component: _page_is_error_page_is_error_component__WEBPACK_IMPORTED_MODULE_8__["PageIsErrorComponent"], data: { title: 'Page-500 :: Lucid Angular' } },
            { path: 'page-503', component: _page_try_later_page_try_later_component__WEBPACK_IMPORTED_MODULE_9__["PageTryLaterComponent"], data: { title: 'Page-503 :: Lucid Angular' } },
            { path: 'page-maintanance', component: _pages_page_maintanance_page_maintanance_component__WEBPACK_IMPORTED_MODULE_10__["PageMaintananceComponent"], data: { title: 'maintanance :: Lucid Angular' } },
        ]
    }
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ }),

/***/ "./src/app/authentication/authentication/authentication.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/authentication/authentication/authentication.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpY2F0aW9uL2F1dGhlbnRpY2F0aW9uL2F1dGhlbnRpY2F0aW9uLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/authentication/authentication/authentication.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/authentication/authentication/authentication.component.ts ***!
  \***************************************************************************/
/*! exports provided: AuthenticationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationComponent", function() { return AuthenticationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/add/operator/filter */ "./node_modules/rxjs-compat/_esm5/add/operator/filter.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_mergeMap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/add/operator/mergeMap */ "./node_modules/rxjs-compat/_esm5/add/operator/mergeMap.js");









var AuthenticationComponent = /** @class */ (function () {
    function AuthenticationComponent(router, activatedRoute, titleService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.titleService = titleService;
        this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
    }
    AuthenticationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events
            .filter(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]; })
            .map(function () { return _this.activatedRoute; })
            .map(function (route) {
            while (route.firstChild)
                route = route.firstChild;
            return route;
        })
            .filter(function (route) { return route.outlet === 'primary'; })
            .mergeMap(function (route) { return route.data; })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.ngUnsubscribe))
            .subscribe(function (event) { return _this.titleService.setTitle(event['title']); });
    };
    AuthenticationComponent.prototype.ngOnDestroy = function () {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    };
    AuthenticationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-authentication',
            template: __webpack_require__(/*! raw-loader!./authentication.component.html */ "./node_modules/raw-loader/index.js!./src/app/authentication/authentication/authentication.component.html"),
            styles: [__webpack_require__(/*! ./authentication.component.css */ "./src/app/authentication/authentication/authentication.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"]])
    ], AuthenticationComponent);
    return AuthenticationComponent;
}());



/***/ }),

/***/ "./src/app/authentication/page-forbiddon-error/page-forbiddon-error.component.css":
/*!****************************************************************************************!*\
  !*** ./src/app/authentication/page-forbiddon-error/page-forbiddon-error.component.css ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpY2F0aW9uL3BhZ2UtZm9yYmlkZG9uLWVycm9yL3BhZ2UtZm9yYmlkZG9uLWVycm9yLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/authentication/page-forbiddon-error/page-forbiddon-error.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/authentication/page-forbiddon-error/page-forbiddon-error.component.ts ***!
  \***************************************************************************************/
/*! exports provided: PageForbiddonErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageForbiddonErrorComponent", function() { return PageForbiddonErrorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PageForbiddonErrorComponent = /** @class */ (function () {
    function PageForbiddonErrorComponent() {
    }
    PageForbiddonErrorComponent.prototype.ngOnInit = function () {
    };
    PageForbiddonErrorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-forbiddon-error',
            template: __webpack_require__(/*! raw-loader!./page-forbiddon-error.component.html */ "./node_modules/raw-loader/index.js!./src/app/authentication/page-forbiddon-error/page-forbiddon-error.component.html"),
            styles: [__webpack_require__(/*! ./page-forbiddon-error.component.css */ "./src/app/authentication/page-forbiddon-error/page-forbiddon-error.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PageForbiddonErrorComponent);
    return PageForbiddonErrorComponent;
}());



/***/ }),

/***/ "./src/app/authentication/page-forgot-password/page-forgot-password.component.css":
/*!****************************************************************************************!*\
  !*** ./src/app/authentication/page-forgot-password/page-forgot-password.component.css ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpY2F0aW9uL3BhZ2UtZm9yZ290LXBhc3N3b3JkL3BhZ2UtZm9yZ290LXBhc3N3b3JkLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/authentication/page-forgot-password/page-forgot-password.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/authentication/page-forgot-password/page-forgot-password.component.ts ***!
  \***************************************************************************************/
/*! exports provided: PageForgotPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageForgotPasswordComponent", function() { return PageForgotPasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var PageForgotPasswordComponent = /** @class */ (function () {
    function PageForgotPasswordComponent(router) {
        this.router = router;
    }
    PageForgotPasswordComponent.prototype.ngOnInit = function () {
    };
    PageForgotPasswordComponent.prototype.onSubmit = function () {
        this.router.navigate(['/authentication/page-login']);
    };
    PageForgotPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-forgot-password',
            template: __webpack_require__(/*! raw-loader!./page-forgot-password.component.html */ "./node_modules/raw-loader/index.js!./src/app/authentication/page-forgot-password/page-forgot-password.component.html"),
            styles: [__webpack_require__(/*! ./page-forgot-password.component.css */ "./src/app/authentication/page-forgot-password/page-forgot-password.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], PageForgotPasswordComponent);
    return PageForgotPasswordComponent;
}());



/***/ }),

/***/ "./src/app/authentication/page-is-error/page-is-error.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/authentication/page-is-error/page-is-error.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dot {\n  height: 25px;\n  width: 25px;\n  background-color: red;\n  border-radius: 50%;\n  display: inline-block;\n  }\n.button-wrap {\n  text-align: center;\n  padding: 2rem;\n}\nbutton.explore {\n  padding: 15px 25px;\n  font: inherit;\n  background: linear-gradient(to right, #0267C1, #0280EF);\n  border-radius: 50px;\n  border: 0;\n  color: #fff;\n  margin: auto;\n  display: inline-block;\n  transition: all .2s ease-in-out;\n  cursor: pointer;\n  box-shadow: 0 5px 10px rgba(0, 0, 0, .1);\n}\nbutton.explore:hover {\n  -webkit-transform: translateY(-5px);\n          transform: translateY(-5px);\n    box-shadow: 0 15px 10px -7px rgba(0, 0, 0, .1);\n}\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aGVudGljYXRpb24vcGFnZS1pcy1lcnJvci9wYWdlLWlzLWVycm9yLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCO0FBQ0Y7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtBQUNmO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHVEQUF1RDtFQUN2RCxtQkFBbUI7RUFDbkIsU0FBUztFQUNULFdBQVc7RUFDWCxZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLCtCQUErQjtFQUMvQixlQUFlO0VBQ2Ysd0NBQXdDO0FBQzFDO0FBRUE7RUFDRSxtQ0FBMkI7VUFBM0IsMkJBQTJCO0lBQ3pCLDhDQUE4QztBQUNsRCIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpY2F0aW9uL3BhZ2UtaXMtZXJyb3IvcGFnZS1pcy1lcnJvci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRvdCB7XG4gIGhlaWdodDogMjVweDtcbiAgd2lkdGg6IDI1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIH1cbi5idXR0b24td3JhcCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMnJlbTtcbn1cblxuYnV0dG9uLmV4cGxvcmUge1xuICBwYWRkaW5nOiAxNXB4IDI1cHg7XG4gIGZvbnQ6IGluaGVyaXQ7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzAyNjdDMSwgIzAyODBFRik7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGJvcmRlcjogMDtcbiAgY29sb3I6ICNmZmY7XG4gIG1hcmdpbjogYXV0bztcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2UtaW4tb3V0O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJveC1zaGFkb3c6IDAgNXB4IDEwcHggcmdiYSgwLCAwLCAwLCAuMSk7XG59XG5cbmJ1dHRvbi5leHBsb3JlOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpO1xuICAgIGJveC1zaGFkb3c6IDAgMTVweCAxMHB4IC03cHggcmdiYSgwLCAwLCAwLCAuMSk7XG59XG5cblxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/authentication/page-is-error/page-is-error.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/authentication/page-is-error/page-is-error.component.ts ***!
  \*************************************************************************/
/*! exports provided: PageIsErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageIsErrorComponent", function() { return PageIsErrorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_upload_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/upload.service */ "./src/app/services/upload.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var PageIsErrorComponent = /** @class */ (function () {
    function PageIsErrorComponent(formGroup, router, uploadService, activatedRoute) {
        this.formGroup = formGroup;
        this.router = router;
        this.uploadService = uploadService;
        this.activatedRoute = activatedRoute;
        this.openingbalances = 0;
        this.invoices = 0;
        this.collections = 0;
        this.discounts = 0;
        this.endingbalances = 0;
        this.mobile = false;
        this.r1 = 0;
        this.r2 = 0;
        this.r3 = 0;
        this.r4 = 0;
        this.r5 = 0;
    }
    PageIsErrorComponent.prototype.openOpeningBlanceTable = function () {
        if (this.openingbalances == 0) {
            this.openingbalances = 1;
        }
        else {
            this.openingbalances = 0;
        }
    };
    PageIsErrorComponent.prototype.openInvoices = function () {
        if (this.invoices == 0) {
            this.invoices = 1;
        }
        else {
            this.invoices = 0;
        }
    };
    PageIsErrorComponent.prototype.openCollection = function () {
        if (this.collections == 0) {
            this.collections = 1;
        }
        else {
            this.collections = 0;
        }
    };
    PageIsErrorComponent.prototype.openDiscount = function () {
        if (this.discounts == 0) {
            this.discounts = 1;
        }
        else {
            this.discounts = 0;
        }
    };
    PageIsErrorComponent.prototype.openEndingBalance = function () {
        if (this.endingbalances == 0) {
            this.endingbalances = 1;
        }
        else {
            this.endingbalances = 0;
        }
    };
    PageIsErrorComponent.prototype.yourfunc = function (value) {
        if (this.r1 == 1) {
            this.r1 = 0;
        }
        else {
            this.r1 = 1;
        }
        console.log(this.r1);
    };
    PageIsErrorComponent.prototype.yourfunc2 = function (value) {
        if (this.r2 == 1) {
            this.r2 = 0;
        }
        else {
            this.r2 = 1;
        }
        console.log(this.r1);
    };
    PageIsErrorComponent.prototype.yourfunc3 = function (value) {
        if (this.r3 == 1) {
            this.r3 = 0;
        }
        else {
            this.r3 = 1;
        }
        console.log(this.r3);
    };
    PageIsErrorComponent.prototype.yourfunc4 = function (value) {
        if (this.r4 == 1) {
            this.r4 = 0;
        }
        else {
            this.r4 = 1;
        }
        console.log(this.r4);
    };
    PageIsErrorComponent.prototype.yourfunc5 = function (value) {
        if (this.r5 == 1) {
            this.r5 = 0;
        }
        else {
            this.r5 = 1;
        }
        console.log(this.r5);
    };
    PageIsErrorComponent.prototype.ngOnInit = function () {
        var _this = this;
        var customer_id = +this.activatedRoute.snapshot.params['id1'];
        var month = +this.activatedRoute.snapshot.params['id2'];
        this.uploadService.customerStatement(customer_id, month).subscribe(function (res) {
            console.log(res);
            _this.allData = res;
            _this.invoicedata = res['invoice'];
            console.log(_this.invoicedata);
            console.log(_this.invoicedata['0'].invoice_amount);
        });
        this.contactForm = this.formGroup.group({
            discount_comment: ['', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required] }],
            discount_id: ['', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required] }],
            endingbalance_comment: ['', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required] }],
            endingbalance_id: ['', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required] }],
            invoice_comment: ['', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required] }],
            invoice_id: ['', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required] }],
            opening_comment: ['', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required] }],
            opening_id: ['', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required] }],
            collection_comment: ['', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required] }],
            collection_id: ['', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required] }],
        });
        this.contactForm2 = this.formGroup.group({
            customer_statement_id: ['', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required] }],
            difference_in_payment_comment: ['', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required] }],
            difference_in_amount_comment: ['', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required] }],
            payment_not_documented_comment: ['', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required] }],
            invoice_not_documented_comment: ['', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required] }],
            other_comment: ['', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required] }],
        });
    };
    PageIsErrorComponent.prototype.comments = function () {
        var _this = this;
        this.uploadService.addComments(this.contactForm.value).subscribe(function (res) {
            console.log(res);
            console.log(_this.i);
        });
        this.uploadService.addComments2(this.contactForm2.value).subscribe(function (res) {
            console.log(res);
            console.log(_this.i);
        });
        this.router.navigate(['/authentication/success']);
    };
    PageIsErrorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-is-error',
            template: __webpack_require__(/*! raw-loader!./page-is-error.component.html */ "./node_modules/raw-loader/index.js!./src/app/authentication/page-is-error/page-is-error.component.html"),
            styles: [__webpack_require__(/*! ./page-is-error.component.css */ "./src/app/authentication/page-is-error/page-is-error.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_upload_service__WEBPACK_IMPORTED_MODULE_3__["UploadService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], PageIsErrorComponent);
    return PageIsErrorComponent;
}());



/***/ }),

/***/ "./src/app/authentication/page-lockscreen/page-lockscreen.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/authentication/page-lockscreen/page-lockscreen.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpY2F0aW9uL3BhZ2UtbG9ja3NjcmVlbi9wYWdlLWxvY2tzY3JlZW4uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/authentication/page-lockscreen/page-lockscreen.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/authentication/page-lockscreen/page-lockscreen.component.ts ***!
  \*****************************************************************************/
/*! exports provided: PageLockscreenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageLockscreenComponent", function() { return PageLockscreenComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var PageLockscreenComponent = /** @class */ (function () {
    function PageLockscreenComponent(router) {
        this.router = router;
    }
    PageLockscreenComponent.prototype.ngOnInit = function () {
    };
    PageLockscreenComponent.prototype.onSubmit = function () {
        this.router.navigate(['/admin/dashboard/index']);
    };
    PageLockscreenComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-lockscreen',
            template: __webpack_require__(/*! raw-loader!./page-lockscreen.component.html */ "./node_modules/raw-loader/index.js!./src/app/authentication/page-lockscreen/page-lockscreen.component.html"),
            styles: [__webpack_require__(/*! ./page-lockscreen.component.css */ "./src/app/authentication/page-lockscreen/page-lockscreen.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], PageLockscreenComponent);
    return PageLockscreenComponent;
}());



/***/ }),

/***/ "./src/app/authentication/page-login/page-login.component.css":
/*!********************************************************************!*\
  !*** ./src/app/authentication/page-login/page-login.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpY2F0aW9uL3BhZ2UtbG9naW4vcGFnZS1sb2dpbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/authentication/page-login/page-login.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/authentication/page-login/page-login.component.ts ***!
  \*******************************************************************/
/*! exports provided: PageLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageLoginComponent", function() { return PageLoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var PageLoginComponent = /** @class */ (function () {
    function PageLoginComponent(router) {
        this.router = router;
    }
    PageLoginComponent.prototype.ngOnInit = function () {
    };
    PageLoginComponent.prototype.onSubmit = function () {
        this.router.navigate(['/admin/dashboard/index']);
    };
    PageLoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-login',
            template: __webpack_require__(/*! raw-loader!./page-login.component.html */ "./node_modules/raw-loader/index.js!./src/app/authentication/page-login/page-login.component.html"),
            styles: [__webpack_require__(/*! ./page-login.component.css */ "./src/app/authentication/page-login/page-login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], PageLoginComponent);
    return PageLoginComponent;
}());



/***/ }),

/***/ "./src/app/authentication/page-not-found/page-not-found.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/authentication/page-not-found/page-not-found.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  @import url('https://fonts.googleapis.com/css?family=Poppins');\n\n* {\n  margin: 0;\n  padding: 0;\n  font-family: Poppins, 'Segoe UI', 'Arial', 'san serif';\n}\n\nimg {\n  display: inline-block;\n}\n\n.container {\n  margin: 20px auto;\n  border-radius: 4px;\n  border: 1px solid rgba(0, 0, 0, .1);\n  min-height: 100px;\n  position: relative;\n  &::before {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 3px;\n    background: linear-gradient(to right, #0267C1, #D65108);\n  }\n}\n\n.logo {\n  display: flex;\n  margin: 30px auto 0;\n  align-items: center;\n  justify-content: center;\n  a {\n    display: block;\n    width: 30px;\n    height: 30px;\n  }\n  img {\n    width: 40px;\n  }\n  .c-name {\n    display: inline-block;\n    font-weight: 600;\n  }\n}\n\n.thumbs {\n  width: 100px;\n  margin: auto;\n  height: 136px;\n  img {\n    width: 100%;\n  }\n}\n\n.illustration {\n  width: 100%;\n  text-align: center;\n  box-shadow: 0 10px 20px -5px rgba(0, 0, 0, .05);\n  border-radius: 0 0 50% 50% / 1%;\n  text-align: center;\n}\n\n.illustration img {\n  width: 70%;\n  margin: 50px auto;\n}\n\n.separator {\n  display: block;\n  height: 3px;\n  width: 70%;\n  margin: 10px auto;\n  background-color: rgba(0, 0, 0, .05);\n  border-radius: 10px;\n  position: relative;\n  overflow: hidden;\n  &::before, &::after {\n    content: '';\n    position: absolute;\n    left: 0;\n    top: 0;\n    height: 100%;\n    width: 33%;\n    border-radius: inherit;\n    opacity: .05;\n  }\n  &::before {\n    left: 0;\n    background: #EFA00B;\n  }\n  &::after {\n    left: initial;\n    right: 0;\n    background: #D65108;\n  }\n}\n\n.hgroup {\n  text-align: center;\n  padding: 50px 30px 30px;\n}\n\n.name {\n  display: block;\n  color: #0267C1;\n  font-weight: 600;\n  font-size: 1.1rem;\n}\n\n.hgroup h1 {\n  font-size: 20px;\n  font-weight: 600;\n  color: #333;\n}\n\n.hgroup h2 {\n  font-size: 19px;\n}\n\n.hgroup p {\n  font-size: 15px;\n  color: slategrey;\n  margin-top: 15px;\n  text-align: justify;\n  line-height: 25px;\n}\n\n.items {\n  padding: 30px;\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n}\n\n.item {\n  margin-bottom: 10px;\n  text-align: center;\n  width: 100%;\n  margin: 0 auto 50px;\n}\n\n.item .icon {\n    margin-bottom: 10px;\n}\n\n.item .icon img {\n  width: 60px;\n}\n\n.item .title {\n  margin-bottom: 5px;\n  font-size: 16px;\n  font-weight: 600;\n}\n\n.item .subtitle {\n  font-size: 13px;\n  color: slategrey;\n  padding: 1rem;\n}\n\n.button-wrap {\n  text-align: center;\n  padding: 2rem;\n}\n\nbutton.explore {\n  padding: 15px 25px;\n  font: inherit;\n  background: linear-gradient(to right, #0267C1, #0280EF);\n  border-radius: 50px;\n  border: 0;\n  color: #fff;\n  margin: auto;\n  display: inline-block;\n  transition: all .2s ease-in-out;\n  cursor: pointer;\n  box-shadow: 0 5px 10px rgba(0, 0, 0, .1);\n}\n\nbutton.explore:hover {\n  -webkit-transform: translateY(-5px);\n          transform: translateY(-5px);\n    box-shadow: 0 15px 10px -7px rgba(0, 0, 0, .1);\n}\n\nfooter {\n  font-size: 12px;\n  color: slategrey;\n  text-align: center;\n  padding: 30px;\n}\n\n.rad {\n  margin: 0!important;\n  text-align: center!important;\n  font-size: 18px!important;\n}\n\n.raised {\n  font-size: 16px;\n  color: #777;\n  display: block;\n  color: steelblue;\n}\n\ninput[type=checkbox] + label {\n  display: block;\n  margin: 0.2em;\n  cursor: pointer;\n  padding: 0.2em;\n}\n\ninput[type=checkbox] {\n  display: none;\n}\n\ninput[type=checkbox] + label:before {\n  content: \"\\2714\";\n  border: 0.1em solid #000;\n  border-radius: 0.2em;\n  display: inline-block;\n  width: 1em;\n  height: 1em;\n  padding-left: 0.2em;\n  padding-bottom: 0.3em;\n  margin-right: 0.2em;\n  vertical-align: bottom;\n  color: transparent;\n  transition: .2s;\n}\n\ninput[type=checkbox] + label:active:before {\n  -webkit-transform: scale(0);\n          transform: scale(0);\n}\n\ninput[type=checkbox]:checked + label:before {\n  background-color: MediumSeaGreen;\n  border-color: MediumSeaGreen;\n  color: #fff;\n}\n\ninput[type=checkbox]:disabled + label:before {\n  -webkit-transform: scale(1);\n          transform: scale(1);\n  border-color: #aaa;\n}\n\ninput[type=checkbox]:checked:disabled + label:before {\n  -webkit-transform: scale(1);\n          transform: scale(1);\n  background-color: #bfb;\n  border-color: #bfb;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aGVudGljYXRpb24vcGFnZS1ub3QtZm91bmQvcGFnZS1ub3QtZm91bmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0VBQ0UsOERBQThEOztBQUVoRTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0RBQXNEO0FBQ3hEOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixtQ0FBbUM7RUFDbkMsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQjtJQUNFLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCxXQUFXO0lBQ1gsV0FBVztJQUNYLHVEQUF1RDtFQUN6RDtBQUNGOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCO0lBQ0UsY0FBYztJQUNkLFdBQVc7SUFDWCxZQUFZO0VBQ2Q7RUFDQTtJQUNFLFdBQVc7RUFDYjtFQUNBO0lBQ0UscUJBQXFCO0lBQ3JCLGdCQUFnQjtFQUNsQjtBQUNGOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixhQUFhO0VBQ2I7SUFDRSxXQUFXO0VBQ2I7QUFDRjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsK0NBQStDO0VBQy9DLCtCQUErQjtFQUMvQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsY0FBYztFQUNkLFdBQVc7RUFDWCxVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLG9DQUFvQztFQUNwQyxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQjtJQUNFLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsT0FBTztJQUNQLE1BQU07SUFDTixZQUFZO0lBQ1osVUFBVTtJQUNWLHNCQUFzQjtJQUN0QixZQUFZO0VBQ2Q7RUFDQTtJQUNFLE9BQU87SUFDUCxtQkFBbUI7RUFDckI7RUFDQTtJQUNFLGFBQWE7SUFDYixRQUFRO0lBQ1IsbUJBQW1CO0VBQ3JCO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixhQUFhO0VBQ2IscUNBQXFDO0FBQ3ZDOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsbUJBQW1CO0FBQ3JCOztBQUdBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHVEQUF1RDtFQUN2RCxtQkFBbUI7RUFDbkIsU0FBUztFQUNULFdBQVc7RUFDWCxZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLCtCQUErQjtFQUMvQixlQUFlO0VBQ2Ysd0NBQXdDO0FBQzFDOztBQUVBO0VBQ0UsbUNBQTJCO1VBQTNCLDJCQUEyQjtJQUN6Qiw4Q0FBOEM7QUFDbEQ7O0FBR0E7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsNEJBQTRCO0VBQzVCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxhQUFhO0VBQ2IsZUFBZTtFQUNmLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsd0JBQXdCO0VBQ3hCLG9CQUFvQjtFQUNwQixxQkFBcUI7RUFDckIsVUFBVTtFQUNWLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSwyQkFBbUI7VUFBbkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0NBQWdDO0VBQ2hDLDRCQUE0QjtFQUM1QixXQUFXO0FBQ2I7O0FBRUE7RUFDRSwyQkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLDJCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpY2F0aW9uL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Qb3BwaW5zJyk7XG5cbioge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zLCAnU2Vnb2UgVUknLCAnQXJpYWwnLCAnc2FuIHNlcmlmJztcbn1cblxuaW1nIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLmNvbnRhaW5lciB7XG4gIG1hcmdpbjogMjBweCBhdXRvO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgLjEpO1xuICBtaW4taGVpZ2h0OiAxMDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAmOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDNweDtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMwMjY3QzEsICNENjUxMDgpO1xuICB9XG59XG5cbi5sb2dvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luOiAzMHB4IGF1dG8gMDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGEge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgfVxuICBpbWcge1xuICAgIHdpZHRoOiA0MHB4O1xuICB9XG4gIC5jLW5hbWUge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBmb250LXdlaWdodDogNjAwO1xuICB9XG59XG5cbi50aHVtYnMge1xuICB3aWR0aDogMTAwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgaGVpZ2h0OiAxMzZweDtcbiAgaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuXG4uaWxsdXN0cmF0aW9uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm94LXNoYWRvdzogMCAxMHB4IDIwcHggLTVweCByZ2JhKDAsIDAsIDAsIC4wNSk7XG4gIGJvcmRlci1yYWRpdXM6IDAgMCA1MCUgNTAlIC8gMSU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmlsbHVzdHJhdGlvbiBpbWcge1xuICB3aWR0aDogNzAlO1xuICBtYXJnaW46IDUwcHggYXV0bztcbn1cblxuLnNlcGFyYXRvciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDNweDtcbiAgd2lkdGg6IDcwJTtcbiAgbWFyZ2luOiAxMHB4IGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjA1KTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICAmOjpiZWZvcmUsICY6OmFmdGVyIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbiAgICB0b3A6IDA7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAzMyU7XG4gICAgYm9yZGVyLXJhZGl1czogaW5oZXJpdDtcbiAgICBvcGFjaXR5OiAuMDU7XG4gIH1cbiAgJjo6YmVmb3JlIHtcbiAgICBsZWZ0OiAwO1xuICAgIGJhY2tncm91bmQ6ICNFRkEwMEI7XG4gIH1cbiAgJjo6YWZ0ZXIge1xuICAgIGxlZnQ6IGluaXRpYWw7XG4gICAgcmlnaHQ6IDA7XG4gICAgYmFja2dyb3VuZDogI0Q2NTEwODtcbiAgfVxufVxuXG4uaGdyb3VwIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiA1MHB4IDMwcHggMzBweDtcbn1cblxuLm5hbWUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgY29sb3I6ICMwMjY3QzE7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xufVxuXG4uaGdyb3VwIGgxIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzMzMztcbn1cblxuLmhncm91cCBoMiB7XG4gIGZvbnQtc2l6ZTogMTlweDtcbn1cblxuLmhncm91cCBwIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBjb2xvcjogc2xhdGVncmV5O1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICBsaW5lLWhlaWdodDogMjVweDtcbn1cblxuLml0ZW1zIHtcbiAgcGFkZGluZzogMzBweDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcbn1cblxuLml0ZW0ge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDAgYXV0byA1MHB4O1xufVxuXG5cbi5pdGVtIC5pY29uIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uaXRlbSAuaWNvbiBpbWcge1xuICB3aWR0aDogNjBweDtcbn1cblxuLml0ZW0gLnRpdGxlIHtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5pdGVtIC5zdWJ0aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY29sb3I6IHNsYXRlZ3JleTtcbiAgcGFkZGluZzogMXJlbTtcbn1cblxuLmJ1dHRvbi13cmFwIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAycmVtO1xufVxuXG5idXR0b24uZXhwbG9yZSB7XG4gIHBhZGRpbmc6IDE1cHggMjVweDtcbiAgZm9udDogaW5oZXJpdDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMDI2N0MxLCAjMDI4MEVGKTtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgYm9yZGVyOiAwO1xuICBjb2xvcjogI2ZmZjtcbiAgbWFyZ2luOiBhdXRvO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1pbi1vdXQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm94LXNoYWRvdzogMCA1cHggMTBweCByZ2JhKDAsIDAsIDAsIC4xKTtcbn1cblxuYnV0dG9uLmV4cGxvcmU6aG92ZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCk7XG4gICAgYm94LXNoYWRvdzogMCAxNXB4IDEwcHggLTdweCByZ2JhKDAsIDAsIDAsIC4xKTtcbn1cblxuXG5mb290ZXIge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiBzbGF0ZWdyZXk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMzBweDtcbn1cblxuLnJhZCB7XG4gIG1hcmdpbjogMCFpbXBvcnRhbnQ7XG4gIHRleHQtYWxpZ246IGNlbnRlciFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMThweCFpbXBvcnRhbnQ7XG59XG5cbi5yYWlzZWQge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjNzc3O1xuICBkaXNwbGF5OiBibG9jaztcbiAgY29sb3I6IHN0ZWVsYmx1ZTtcbn1cblxuaW5wdXRbdHlwZT1jaGVja2JveF0gKyBsYWJlbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDAuMmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBhZGRpbmc6IDAuMmVtO1xufVxuXG5pbnB1dFt0eXBlPWNoZWNrYm94XSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbmlucHV0W3R5cGU9Y2hlY2tib3hdICsgbGFiZWw6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXDI3MTRcIjtcbiAgYm9yZGVyOiAwLjFlbSBzb2xpZCAjMDAwO1xuICBib3JkZXItcmFkaXVzOiAwLjJlbTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMWVtO1xuICBoZWlnaHQ6IDFlbTtcbiAgcGFkZGluZy1sZWZ0OiAwLjJlbTtcbiAgcGFkZGluZy1ib3R0b206IDAuM2VtO1xuICBtYXJnaW4tcmlnaHQ6IDAuMmVtO1xuICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xuICBjb2xvcjogdHJhbnNwYXJlbnQ7XG4gIHRyYW5zaXRpb246IC4ycztcbn1cblxuaW5wdXRbdHlwZT1jaGVja2JveF0gKyBsYWJlbDphY3RpdmU6YmVmb3JlIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbn1cblxuaW5wdXRbdHlwZT1jaGVja2JveF06Y2hlY2tlZCArIGxhYmVsOmJlZm9yZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IE1lZGl1bVNlYUdyZWVuO1xuICBib3JkZXItY29sb3I6IE1lZGl1bVNlYUdyZWVuO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuaW5wdXRbdHlwZT1jaGVja2JveF06ZGlzYWJsZWQgKyBsYWJlbDpiZWZvcmUge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICBib3JkZXItY29sb3I6ICNhYWE7XG59XG5cbmlucHV0W3R5cGU9Y2hlY2tib3hdOmNoZWNrZWQ6ZGlzYWJsZWQgKyBsYWJlbDpiZWZvcmUge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmZiO1xuICBib3JkZXItY29sb3I6ICNiZmI7XG59Il19 */"

/***/ }),

/***/ "./src/app/authentication/page-not-found/page-not-found.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/authentication/page-not-found/page-not-found.component.ts ***!
  \***************************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_sidebar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/sidebar.service */ "./src/app/services/sidebar.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var ngx_gallery__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-gallery */ "./node_modules/ngx-gallery/bundles/ngx-gallery.umd.js");
/* harmony import */ var ngx_gallery__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(ngx_gallery__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _services_upload_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/upload.service */ "./src/app/services/upload.service.ts");











var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent(router, uploadService, sidebarService, cdr, activatedRoute, tabConfig) {
        var _this = this;
        this.router = router;
        this.uploadService = uploadService;
        this.sidebarService = sidebarService;
        this.cdr = cdr;
        this.activatedRoute = activatedRoute;
        this.tabConfig = tabConfig;
        this.visitorsOptions = {};
        this.visitsOptions = {};
        this.r1 = 1;
        this.r2 = 0;
        this.sidebarVisible = true;
        this._albums = new Array();
        this._albumsTab1 = new Array();
        this._albumsTab2 = new Array();
        this._albumsTab3 = new Array();
        this._albumsTab4 = new Array();
        this.fragment = "all";
        this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.activatedRoute.fragment.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.ngUnsubscribe)).subscribe(function (fragment) {
            if (fragment) {
                _this.fragment = fragment;
            }
        });
        this.galleryOptions = [
            {
                width: '100%',
                height: '500px',
                thumbnailsColumns: 4,
                imageAnimation: ngx_gallery__WEBPACK_IMPORTED_MODULE_8__["NgxGalleryAnimation"].Slide
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
        for (var i = 1; i <= 15; i++) {
            var src = 'assets/images/image-gallery/' + i + '.jpg';
            var thumb = 'assets/images/image-gallery/' + i + '.jpg';
            var album = {
                small: thumb,
                medium: thumb,
                big: src
            };
            this._albums.push(album);
        }
        for (var i = 1; i <= 4; i++) {
            var src = 'assets/images/image-gallery/' + i + '.jpg';
            var thumb = 'assets/images/image-gallery/' + i + '.jpg';
            var album = {
                small: thumb,
                medium: thumb,
                big: src
            };
            this._albumsTab1.push(album);
        }
        for (var i = 5; i <= 7; i++) {
            var src = 'assets/images/image-gallery/' + i + '.jpg';
            var thumb = 'assets/images/image-gallery/' + i + '.jpg';
            var album = {
                small: thumb,
                medium: thumb,
                big: src
            };
            this._albumsTab2.push(album);
        }
        for (var i = 8; i <= 12; i++) {
            var src = 'assets/images/image-gallery/' + i + '.jpg';
            var thumb = 'assets/images/image-gallery/' + i + '.jpg';
            var album = {
                small: thumb,
                medium: thumb,
                big: src
            };
            this._albumsTab3.push(album);
        }
        for (var i = 13; i <= 15; i++) {
            var src = 'assets/images/image-gallery/' + i + '.jpg';
            var thumb = 'assets/images/image-gallery/' + i + '.jpg';
            var album = {
                small: thumb,
                medium: thumb,
                big: src
            };
            this._albumsTab4.push(album);
        }
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
        var _this = this;
        var customer_id = +this.activatedRoute.snapshot.params['id1'];
        var month = +this.activatedRoute.snapshot.params['id2'];
        this.uploadService.customerStatement(customer_id, month).subscribe(function (res) {
            console.log(res);
            _this.allData = res;
        });
        // console.log(id)	
    };
    PageNotFoundComponent.prototype.submit = function () {
        var customer_id = +this.activatedRoute.snapshot.params['id1'];
        var month = +this.activatedRoute.snapshot.params['id2'];
        this.router.navigate(['/authentication/user/' + customer_id + '/month/' + month + '/disagree']);
    };
    PageNotFoundComponent.prototype.ngOnDestroy = function () {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    };
    PageNotFoundComponent.prototype.toggleFullWidth = function () {
        this.sidebarService.toggle();
        this.sidebarVisible = this.sidebarService.getStatus();
        this.cdr.detectChanges();
    };
    PageNotFoundComponent.prototype.yourfunc1 = function (value) {
        this.r1 = 1;
        console.log(this.r1);
    };
    PageNotFoundComponent.prototype.yourfunc2 = function (value) {
        this.r1 = 0;
        console.log(this.r1);
    };
    PageNotFoundComponent.prototype.submit2 = function () {
        this.router.navigate(['/authentication/success']);
    };
    PageNotFoundComponent.prototype.loadLineChartOptions = function (data, color) {
        var chartOption;
        var xAxisData = new Array();
        data.forEach(function (element) {
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
    };
    PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! raw-loader!./page-not-found.component.html */ "./node_modules/raw-loader/index.js!./src/app/authentication/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/authentication/page-not-found/page-not-found.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_upload_service__WEBPACK_IMPORTED_MODULE_9__["UploadService"], _services_sidebar_service__WEBPACK_IMPORTED_MODULE_2__["SidebarService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbTabsetConfig"]])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/authentication/page-register/page-register.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/authentication/page-register/page-register.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpY2F0aW9uL3BhZ2UtcmVnaXN0ZXIvcGFnZS1yZWdpc3Rlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/authentication/page-register/page-register.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/authentication/page-register/page-register.component.ts ***!
  \*************************************************************************/
/*! exports provided: PageRegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageRegisterComponent", function() { return PageRegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var PageRegisterComponent = /** @class */ (function () {
    function PageRegisterComponent(router) {
        this.router = router;
    }
    PageRegisterComponent.prototype.ngOnInit = function () {
    };
    PageRegisterComponent.prototype.onSubmit = function () {
        this.router.navigate(['/authentication/page-login']);
    };
    PageRegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-register',
            template: __webpack_require__(/*! raw-loader!./page-register.component.html */ "./node_modules/raw-loader/index.js!./src/app/authentication/page-register/page-register.component.html"),
            styles: [__webpack_require__(/*! ./page-register.component.css */ "./src/app/authentication/page-register/page-register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], PageRegisterComponent);
    return PageRegisterComponent;
}());



/***/ }),

/***/ "./src/app/authentication/page-try-later/page-try-later.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/authentication/page-try-later/page-try-later.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpY2F0aW9uL3BhZ2UtdHJ5LWxhdGVyL3BhZ2UtdHJ5LWxhdGVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/authentication/page-try-later/page-try-later.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/authentication/page-try-later/page-try-later.component.ts ***!
  \***************************************************************************/
/*! exports provided: PageTryLaterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageTryLaterComponent", function() { return PageTryLaterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PageTryLaterComponent = /** @class */ (function () {
    function PageTryLaterComponent() {
    }
    PageTryLaterComponent.prototype.ngOnInit = function () {
    };
    PageTryLaterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-try-later',
            template: __webpack_require__(/*! raw-loader!./page-try-later.component.html */ "./node_modules/raw-loader/index.js!./src/app/authentication/page-try-later/page-try-later.component.html"),
            styles: [__webpack_require__(/*! ./page-try-later.component.css */ "./src/app/authentication/page-try-later/page-try-later.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PageTryLaterComponent);
    return PageTryLaterComponent;
}());



/***/ })

}]);
//# sourceMappingURL=app-authentication-authentication-module.js.map