import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { RichTextEditorAllModule } from '@syncfusion/ej2-angular-richtexteditor';
import { FullCalendarModule } from 'ng-fullcalendar';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { NgxGalleryModule } from 'ngx-gallery';
import { UploadService } from './services/upload.service'

import * as $ from 'jquery';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ResponsiveModule } from 'ngx-responsive'

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        routing,
        NgbModule,
        BrowserAnimationsModule,
        ToastrModule.forRoot(),
        RichTextEditorAllModule,
        FullCalendarModule,    Ng2SmartTableModule,

        NgMultiSelectDropDownModule.forRoot(),
        LeafletModule.forRoot(),
        NgxGalleryModule,
            ReactiveFormsModule,
    FormsModule,
          ResponsiveModule.forRoot()

    ],
    providers: [
    UploadService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
