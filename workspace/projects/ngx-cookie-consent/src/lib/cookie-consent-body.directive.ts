import { Directive } from '@angular/core';

@Directive({
  selector: '[ngxCookieConsentBody]',
  // tslint:disable-next-line:no-host-metadata-property
  host: {
    '[class.ngx-cookie-consent__body]': 'true'
  }
})
export class CookieConsentBodyDirective {}
