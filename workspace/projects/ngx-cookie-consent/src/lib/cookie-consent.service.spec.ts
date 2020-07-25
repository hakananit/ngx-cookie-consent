import { TestBed, inject, fakeAsync, flush, tick } from '@angular/core/testing';

import { CookieConsentService } from './cookie-consent.service';
import { OverlayModule, OverlayContainer } from '@angular/cdk/overlay';
import { CookieConsentConfig } from './cookie-consent-config';
import { NgxCookieConsentModule } from './cookie-consent.module';
import { Component, ComponentRef, ChangeDetectorRef } from '@angular/core';
import { PortalModule } from '@angular/cdk/portal';

class ConsentConfig implements CookieConsentConfig {
  title = '';
  isCloseable = false;
  hasBackdrop = false;
  // position?: CookieConsentPosition;
  hasfocusTrap = false;
  disappearOnPageScroll = false;
  // cookieConfig?: CookieConfig[];
}

describe('CookieConsentService', () => {
  let service: CookieConsentService;
  let overlayContainer: OverlayContainer;
  let overlayContainerElement: HTMLElement;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfigurableCookieConsent],
      imports: [OverlayModule, NgxCookieConsentModule, PortalModule]
    });
    TestBed.compileComponents();
    service = TestBed.inject(CookieConsentService);
  });

  beforeEach(inject([OverlayContainer], (oc: OverlayContainer) => {
    overlayContainer = oc;
    overlayContainerElement = oc.getContainerElement();
  })
  );

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should create an overlay without any config', () => {
    service.show(ConfigurableCookieConsent);
    expect(overlayContainerElement.getElementsByTagName('ngx-cookie-consent').length).toBe(1);
  });
  it('should prevent multiple overlay containers', () => {
    service.show(ConfigurableCookieConsent);
    service.show(ConfigurableCookieConsent);
    expect(overlayContainerElement.getElementsByTagName('ngx-cookie-consent').length).toBe(1);
  });
  it('should be hidden with a service call', () => {
    const ref = service.show(ConfigurableCookieConsent);
    spyOn(ref, 'hide').and.callThrough();
    const emit = spyOn(ref.statusChanged, 'emit').and.callThrough();
    expect(overlayContainerElement.getElementsByTagName('ngx-cookie-consent').length).toBe(1);
    ref.hide();
    expect(ref.hide).toHaveBeenCalledTimes(1);
    expect(emit).toHaveBeenCalledTimes(1);
    expect(overlayContainerElement.querySelector('ngx-cookie-consent')).toBeNull();
  });
  it('should add backdrop', () => {
  });
  it('should set cookies given configuration', () => { });
});

@Component({
  template: '<div ngxCookieConsentContent></div>'
})
// tslint:disable-next-line:component-class-suffix
class ConfigurableCookieConsent { }
