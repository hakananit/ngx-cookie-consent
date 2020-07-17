import { Component } from '@angular/core';
import { CookieConsentService } from 'ngx-cookie-consent';
import { CookieConsentExampleComponent } from './cookie-consent-example/cookie-consent-example.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  private _cookieContentRef;

  constructor(private _ccs: CookieConsentService) { }

  showConsent() {
    this._cookieContentRef = this._ccs.show(CookieConsentExampleComponent,
      {
        title: 'hello',
        isCloseable: true,
        hasBackdrop: false,
        position: 'top'
      });
  }

  hideConsent() {
    this._ccs.hide();
  }
}
