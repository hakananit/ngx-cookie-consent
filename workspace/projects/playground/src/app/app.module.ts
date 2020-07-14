import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgxCookieConsentModule } from 'ngx-cookie-consent';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxCookieConsentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
