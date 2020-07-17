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
export class CookieConsentContainerComponent implements OnDestroy{

  private _config;
  @Input()
  set config(value: CookieConsentConfig) {
    this._config = value;
  }
  get config() {
    return this._config;
  }

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

  @Output() statusChanged = new EventEmitter();

  @ViewChild(CdkPortalOutlet, { static: true })
  // tslint:disable-next-line: variable-name
  private _portalOutlet: CdkPortalOutlet;

  // tslint:disable-next-line: variable-name
  constructor(_cdr: ChangeDetectorRef) { }

  ngOnDestroy(): void {
    this._portalOutlet = null;
  }

  attachComponentPortal(comportal: ComponentPortal<any>): ComponentRef<any> {
    return this._portalOutlet.attachComponentPortal(comportal);
  }

  closeConsent() {
    this._portalOutlet.detach();
    this.statusChanged.emit();
  }

}
