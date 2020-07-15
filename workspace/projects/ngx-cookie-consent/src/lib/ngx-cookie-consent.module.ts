import { NgModule } from '@angular/core';
import { NgxCookieConsentComponent } from './ngx-cookie-consent.component';
import { NgxCookieConsentBodyComponent } from './ngx-cookie-consent-body/ngx-cookie-consent-body.component';
import { NgxCookieConsentActionsComponent } from './ngx-cookie-consent-actions/ngx-cookie-consent-actions.component';
import { NgxCookieConsentOptionsComponent } from './ngx-cookie-consent-options/ngx-cookie-consent-options.component';



@NgModule({
  declarations: [NgxCookieConsentComponent, NgxCookieConsentBodyComponent, NgxCookieConsentActionsComponent, NgxCookieConsentOptionsComponent],
  imports: [
  ],
  exports: [NgxCookieConsentComponent]
})
export class NgxCookieConsentModule { }
