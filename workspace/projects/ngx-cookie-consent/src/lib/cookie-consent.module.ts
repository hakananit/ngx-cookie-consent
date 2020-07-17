import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CookieConsentContainerComponent } from './cookie-consent-container.component';
import { CookieConsentBodyDirective } from './cookie-consent-body.directive';
import { CookieConsentActionDirective } from './cookie-consent-action.directive';
import { CookieConsentFooterDirective } from './cookie-consent-footer.directive';
import { CookieConsentOptionsDirective } from './cookie-consent-options.directive';
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';

@NgModule({
  declarations: [
    CookieConsentContainerComponent,
    CookieConsentBodyDirective,
    CookieConsentActionDirective,
    CookieConsentFooterDirective,
    CookieConsentOptionsDirective],
  imports: [CommonModule, OverlayModule, PortalModule],
  exports: [
    PortalModule,
    OverlayModule,
    CookieConsentContainerComponent,
    CookieConsentBodyDirective,
    CookieConsentActionDirective,
    CookieConsentFooterDirective,
    CookieConsentOptionsDirective],
})
export class NgxCookieConsentModule { }
