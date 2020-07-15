import { NgModule } from '@angular/core';
import { NgxCookieConsentComponent } from './ngx-cookie-consent.component';
import { CookieConsentBodyDirective } from './cookie-consent-body.directive';
import { CookieConsentActionDirective } from './cookie-consent-action.directive';
import { CookieConsentFooterDirective } from './cookie-consent-footer.directive';
import { CookieConsentOptionsDirective } from './cookie-consent-options.directive';

@NgModule({
  declarations: [
    NgxCookieConsentComponent,
    CookieConsentBodyDirective,
    CookieConsentActionDirective,
    CookieConsentFooterDirective,
    CookieConsentOptionsDirective,
  ],
  imports: [],
  exports: [
    NgxCookieConsentComponent,
    CookieConsentBodyDirective,
    CookieConsentActionDirective,
    CookieConsentFooterDirective,
    CookieConsentOptionsDirective,
  ],
})
export class NgxCookieConsentModule {}
