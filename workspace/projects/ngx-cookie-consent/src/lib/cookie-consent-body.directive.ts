import { Directive } from '@angular/core';

@Directive({
  selector: '[ngxCookieConsentBody]',
  host: {
    '[class.ngx-cookie-consent__body]': 'true'
  }
})
export class CookieConsentBodyDirective {
  constructor() {
    console.log("asd");
  }
}
