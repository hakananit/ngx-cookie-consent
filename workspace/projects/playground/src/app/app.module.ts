import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgxCookieConsentModule } from 'ngx-cookie-consent';
import { CookieConsentExampleComponent } from './cookie-consent-example/cookie-consent-example.component';
@NgModule({
  declarations: [
    AppComponent,
    CookieConsentExampleComponent
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
