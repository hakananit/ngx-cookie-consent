import { Component, ChangeDetectionStrategy, ViewChild, ComponentRef, Input, ChangeDetectorRef } from '@angular/core';
import { CdkPortalOutlet, ComponentPortal } from '@angular/cdk/portal';
import { coerceBooleanProperty } from '@angular/cdk/coercion';

@Component({
  selector: 'ngx-cookie-consent',
  templateUrl: './cookie-consent-container.html',
  styleUrls: ['./cookie-consent-container.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CookieConsentContainerComponent {

  private _title: string;
  @Input()
  set title(value: string) {
    if (this._title !== value) {
      this._title = value;
    }
  }
  get title() {
    return this._title;
  }

  private _closeable: boolean;
  @Input()
  set closeable(value) {
    this._closeable = coerceBooleanProperty(value);
  }
  get closeable() {
    return this._closeable;
  }

  @ViewChild(CdkPortalOutlet, { static: true })
  // tslint:disable-next-line: variable-name
  private _portalOutlet: CdkPortalOutlet;

  // tslint:disable-next-line: variable-name
  constructor(_cdr: ChangeDetectorRef) { }

  attachComponentPortal(comportal: ComponentPortal<any>): ComponentRef<any> {
    return this._portalOutlet.attachComponentPortal(comportal);
  }

}
