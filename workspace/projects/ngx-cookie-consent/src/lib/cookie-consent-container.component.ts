import { Component, ChangeDetectionStrategy, ViewChild, ComponentRef, Input, ChangeDetectorRef, Output, EventEmitter, OnDestroy } from '@angular/core';
import { CdkPortalOutlet, ComponentPortal } from '@angular/cdk/portal';
import { CookieConsentConfig, CookieConfig } from './cookie-consent-config';
import { CookieTypeService } from './cookie-type.service';

@Component({
  selector: 'ngx-cookie-consent',
  templateUrl: './cookie-consent-container.html',
  styleUrls: ['./cookie-consent-container.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CookieConsentContainerComponent implements OnDestroy {

  private _config: CookieConsentConfig;
  @Input()
  set config(value: CookieConsentConfig) {
    this._config = value;
    this._cdr.markForCheck();
  }
  get config(): CookieConsentConfig {
    return this._config;
  }

  @Output() statusChanged = new EventEmitter();

  @ViewChild(CdkPortalOutlet, { static: true })
  // tslint:disable-next-line: variable-name
  private _portalOutlet: CdkPortalOutlet;

  // tslint:disable-next-line: variable-name
  constructor(private _cdr: ChangeDetectorRef, private _cookieTypeService: CookieTypeService) { }

  ngOnDestroy(): void {
    this._portalOutlet = null;
  }

  attachComponentPortal(comportal: ComponentPortal<any>): ComponentRef<any> {
    return this._portalOutlet.attachComponentPortal(comportal);
  }

  hide(): void {
    if (this._portalOutlet) {
      this._portalOutlet.detach();
      this._cdr.markForCheck();
      this.statusChanged.emit();
    }
  }

  _setCookie(value: CookieConfig[]): void {
    let str = '';
    document.cookie = '';
    for (const cookie of value) {
      str += this._cookieTypeService.getType(cookie.type, cookie.value, cookie.name);
    }
    document.cookie = str;
  }
}
