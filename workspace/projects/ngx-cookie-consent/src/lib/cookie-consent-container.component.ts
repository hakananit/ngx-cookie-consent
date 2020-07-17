import { Component, ChangeDetectionStrategy, ViewChild, ComponentRef } from '@angular/core';
import { CdkPortalOutlet, ComponentPortal } from '@angular/cdk/portal';

@Component({
  selector: 'ngx-cookie-consent',
  templateUrl: './cookie-consent-container.html',
  styleUrls: ['./cookie-consent-container.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CookieConsentContainerComponent {

  @ViewChild(CdkPortalOutlet, { static: true })
  // tslint:disable-next-line: variable-name
  private _portalOutlet: CdkPortalOutlet;

  // tslint:disable-next-line: variable-name
  constructor() { }

  attachComponentPortal(comportal: ComponentPortal<any>): ComponentRef<any> {
    return this._portalOutlet.attachComponentPortal(comportal);
  }

}
