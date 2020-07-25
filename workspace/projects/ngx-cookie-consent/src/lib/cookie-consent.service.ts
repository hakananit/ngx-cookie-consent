import { Injectable, ComponentRef } from '@angular/core';
import { Overlay, OverlayConfig, PositionStrategy } from '@angular/cdk/overlay';
import { CookieConsentContainerComponent } from './cookie-consent-container.component';
import { ComponentPortal, ComponentType } from '@angular/cdk/portal';
import { CookieConsentConfig } from './cookie-consent-config';

@Injectable({
  providedIn: 'root'
})
export class CookieConsentService {

  // tslint:disable-next-line: variable-name
  private _overlayRef;

  // tslint:disable-next-line: variable-name
  constructor(private _overlay: Overlay) { }

  private _createOverlay(config: CookieConsentConfig) {
    let position: PositionStrategy;
    if (config?.position) {
      position = config.position === 'bottom' ? this._overlay.position().global().bottom() : this._overlay.position().global().top();
    }
    const overlayConfig: OverlayConfig = {
      disposeOnNavigation: false,
      positionStrategy: position || this._overlay.position().global().bottom(),
      hasBackdrop: config?.hasBackdrop
    };
    return this._overlay.create(overlayConfig);
  }

  private _setCookieConfig(ref: any, config: CookieConsentConfig) {
    ref.instance.config = config;
  }

  show(component: ComponentType<any>, config?: CookieConsentConfig) {
    if (this._overlayRef) {
      return;
    }
    this._overlayRef = this._createOverlay(config);
    const portal = new ComponentPortal(CookieConsentContainerComponent);
    const ref: ComponentRef<CookieConsentContainerComponent> = this._overlayRef.attach(portal);
    if (config) {
      this._setCookieConfig(ref, config);
    }
    ref.instance.statusChanged.subscribe(() => {
      this._hide();
      ref.instance.statusChanged.unsubscribe();
    });
    ref.instance.attachComponentPortal(new ComponentPortal(component));
    return ref.instance;
  }

  _hide(): void {
    if (this._overlayRef) {
      this._overlayRef.detach();
      this._overlayRef = null;
    }
  }
}
