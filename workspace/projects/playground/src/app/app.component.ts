import { Component } from '@angular/core';
import { CookieConsentService, CookieConfig } from 'ngx-cookie-consent';
import { CookieConsentExampleComponent } from './cookie-consent-example/cookie-consent-example.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  private _cookieContentRef;

  constructor(private _ccs: CookieConsentService) { }

  config: CookieConfig[] = [
    {
      // test=value;max-date=3600;expires=Fri, 31 Dec 9999 23:59:59 GMT;domain=example.com;secure=true;same-site=lax
      name: 'test',
      value: 'value',
      maxDate: 3600,
      expires: 'Fri, 31 Dec 9999 23:59:59 GMT',
      domain: 'example.com',
      secure: true,
      samesite: 'strict',
      type: 'name'
    }
  ];

  showConsent(): void {
    this._cookieContentRef = this._ccs.show(CookieConsentExampleComponent,
      {
        title: 'hello',
        isCloseable: true,
        hasBackdrop: true,
        position: 'top',
        cookieConfig: this.config
      });
  }

  hideConsent(): void {
    if (this._cookieContentRef) {
      this._cookieContentRef.hide();
    }
  }

}
