import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableNormalComponent } from './table-normal/table-normal.component';
import { RouterModule } from '@angular/router';
import { NgxEchartsModule } from 'ngx-echarts';

import { Ng2SmartTableModule } from 'ng2-smart-table';

@NgModule({
	declarations: [TableNormalComponent],
	imports: [
		CommonModule,
		RouterModule,
		Ng2SmartTableModule,
		NgxEchartsModule
	]
})
export class TablesModule { }
