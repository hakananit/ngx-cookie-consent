import { Directive } from '@angular/core';

@Directive({
  selector: '[ngxCookieConsentOptions]',
  // tslint:disable-next-line:no-host-metadata-property
  host: {
    '[class.ngx-cookie-consent__options]': 'true'
  }
})
export class CookieConsentOptionsDirective { }
