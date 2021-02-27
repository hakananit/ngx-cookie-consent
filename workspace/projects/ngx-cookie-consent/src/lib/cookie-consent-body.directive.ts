import { Directive } from '@angular/core';

@Directive({
  selector: '[ngxCookieConsentBody]',
  // tslint:disable-next-line:no-host-metadata-property
  host: {
    '[class.ngx-cookie-consent__body]': 'true',
    '[class.subpixel-antialiased]': 'true'
  }
})
export class CookieConsentBodyDirective {}
