import { Directive } from '@angular/core';

@Directive({
  selector: '[ngxCookieConsentContent]',
  // tslint:disable-next-line: no-host-metadata-property
  host: {
    '[class.ngx-cookie-consent__content]' : 'true'
  }
})
export class CookieConsentContentDirective {}
