import { Component, AfterViewInit } from '@angular/core';
import { CookieConsentService } from 'ngx-cookie-consent';
import { CookieConsentExampleComponent } from './cookie-consent-example/cookie-consent-example.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  private _cookieContentRef;

  constructor(private _ccs: CookieConsentService) { }

  ngAfterViewInit() {
    this._cookieContentRef = this._ccs.show(CookieConsentExampleComponent);
  }
}
