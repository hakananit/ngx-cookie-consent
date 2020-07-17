import { Injectable, ComponentRef } from '@angular/core';
import { Overlay, GlobalPositionStrategy } from '@angular/cdk/overlay';
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

  show(component: ComponentType<any>, config?: CookieConsentConfig): ComponentRef<any> {
    this._overlayRef = this._overlay.create({
      disposeOnNavigation: false,
      positionStrategy: this._overlay.position().global().bottom(),
      hasBackdrop: true
    });
    const portal = new ComponentPortal(CookieConsentContainerComponent);
    const ref = this._overlayRef.attach(portal);
    ref.instance.title = config?.title;
    ref.instance.closeable = config?.closeable;

    return ref.instance.attachComponentPortal(new ComponentPortal(component));
  }

  hide(): void {
    this._overlayRef.detach();
  }
}
