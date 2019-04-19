import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgQrScannerModule } from 'angular2-qrscanner';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgQrScannerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
