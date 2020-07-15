import { Directive } from '@angular/core';

@Directive({
  selector: '[ngxCookieConsentFooter]',
  host: {
    '[class.ngx-cookie-consent__footer]': 'true'
  }
})
export class CookieConsentFooterDirective { }
