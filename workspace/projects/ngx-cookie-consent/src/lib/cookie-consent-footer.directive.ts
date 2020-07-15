import { Directive } from '@angular/core';

@Directive({
  selector: '[ngxCookieConsentFooter]',
  // tslint:disable-next-line:no-host-metadata-property
  host: {
    '[class.ngx-cookie-consent__footer]': 'true'
  }
})
export class CookieConsentFooterDirective { }
