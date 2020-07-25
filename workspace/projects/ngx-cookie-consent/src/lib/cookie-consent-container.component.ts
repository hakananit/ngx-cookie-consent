import { Component, ChangeDetectionStrategy, ViewChild, ComponentRef, Input, ChangeDetectorRef, Output, EventEmitter, OnDestroy } from '@angular/core';
import { CdkPortalOutlet, ComponentPortal } from '@angular/cdk/portal';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { CookieConsentConfig } from './cookie-consent-config';

@Component({
  selector: 'ngx-cookie-consent',
  templateUrl: './cookie-consent-container.html',
  styleUrls: ['./cookie-consent-container.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CookieConsentContainerComponent implements OnDestroy {

  private _config;
  @Input()
  set config(value: CookieConsentConfig) {
    this._config = value;
    this._cdr.markForCheck();
  }
  get config() {
    return this._config;
  }

  @Output() statusChanged = new EventEmitter();

  @ViewChild(CdkPortalOutlet, { static: true })
  // tslint:disable-next-line: variable-name
  private _portalOutlet: CdkPortalOutlet;

  // tslint:disable-next-line: variable-name
  constructor(private _cdr: ChangeDetectorRef) { }

  ngOnDestroy(): void {
    this._portalOutlet = null;
  }

  attachComponentPortal(comportal: ComponentPortal<any>): ComponentRef<any> {
    return this._portalOutlet.attachComponentPortal(comportal);
  }
  
  hide() {
    if (this._portalOutlet) {
      this._portalOutlet.detach();
      this._cdr.markForCheck();
      this.statusChanged.emit();
    }
  }
}
