import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {DataViewModule, PickListModule, ScrollPanelModule, TableModule} from 'primeng';
import { EmailListComponent } from './email-list/email-list.component';
import { EmailCreateComponent } from './email-create/email-create.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    EmailListComponent,
    EmailCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataViewModule,
    TableModule,
    PickListModule,
    ScrollPanelModule,
    ReactiveFormsModule
  ],
  exports: [EmailListComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
