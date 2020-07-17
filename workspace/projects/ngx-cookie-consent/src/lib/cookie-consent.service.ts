import { Injectable, ComponentRef } from '@angular/core';
import { Overlay, GlobalPositionStrategy } from '@angular/cdk/overlay';
import { CookieConsentContainerComponent } from './cookie-consent-container.component';
import { ComponentPortal, ComponentType } from '@angular/cdk/portal';

@Injectable({
  providedIn: 'root'
})
export class CookieConsentService {

  // tslint:disable-next-line: variable-name
  private _overlayRef;

  // tslint:disable-next-line: variable-name
  constructor(private _overlay: Overlay) { }

  show(component: ComponentType<any>): ComponentRef<any> {
     this._overlayRef = this._overlay.create({
       disposeOnNavigation: false,
       positionStrategy: new GlobalPositionStrategy(),
       hasBackdrop: true
    });
     const portal = new ComponentPortal(CookieConsentContainerComponent);
     const ref = this._overlayRef.attach(portal);
     return ref.instance.attachComponentPortal(new ComponentPortal(component));
  }

  hide(): void {
    this._overlayRef.detach();
  }
}
