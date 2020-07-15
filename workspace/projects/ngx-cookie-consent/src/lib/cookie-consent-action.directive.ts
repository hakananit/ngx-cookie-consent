import { Directive } from '@angular/core';

@Directive({
  selector: '[ngxCookieConsentAction]',
  // tslint:disable-next-line: no-host-metadata-property
  host: {
    '[class.ngx-cookie-consent__action]': 'true'
  },
})
export class CookieConsentActionDirective { }
