import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';

//services
import { BackendService, EventStreamService, CacheService, SeoService, ExportService, NotifyService, UploadService } from './shared';

//components
import { AppComponent } from './app.component';

//shared components
import {
  CountryPipe, UuidPipe, RangePipe, CapabilitiesDisplayPipe,
  SortPipe, PaginationComponent, ConfirmationComponent, LoaderComponent, FilterAccountPipe,
  ArrayNumberPipe, TruncatePipe, SplitPipe, ForFilterPipe, SubStringPipe, DateFormatterPipe
} from './shared';


import { editorComponents } from './editor/editor.routing';
import { appRouting, appComponents } from './app.routing';
import { ImporterMaterialModule } from './material-components';

export const sharedComponents: any[] = [
  CountryPipe,
  UuidPipe,
  RangePipe,
  CapabilitiesDisplayPipe,
  SortPipe,
  PaginationComponent,
  ConfirmationComponent,
  LoaderComponent,
  FilterAccountPipe,
  ArrayNumberPipe,
  TruncatePipe,
  SplitPipe,
  ForFilterPipe,
  SubStringPipe,
  DateFormatterPipe
];

export const sharedServices: any[] = [
  BackendService,
  CacheService,
  SeoService,
  ExportService,
  EventStreamService,
  NotifyService,
  UploadService
];

@NgModule({
  providers: [
    CookieService,
    sharedServices
  ],
  declarations: [
    AppComponent,
    appComponents,
    editorComponents,
    sharedComponents
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ImporterMaterialModule,
    appRouting,
    DragDropModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
