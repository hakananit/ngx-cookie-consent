import { Directive } from '@angular/core';

@Directive({
  selector: '[ngxCookieConsentAction]',
  host: {
    '[class.ngx-cookie-consent__action]': 'true'
  }
})
export class CookieConsentActionDirective {}
