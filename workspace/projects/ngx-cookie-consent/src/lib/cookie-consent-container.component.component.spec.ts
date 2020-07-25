import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { CookieConsentContainerComponent } from './cookie-consent-container.component';
import { CookieConsentConfig } from './cookie-consent-config';

class ConsentConfig implements CookieConsentConfig {
  title = '';
  isCloseable = false;
  hasBackdrop = false;
  // position?: CookieConsentPosition;
  hasfocusTrap = false;
  disappearOnPageScroll = false;
  // cookieConfig?: CookieConfig[];
}


describe('CookieConsentContainerComponent', () => {
  let component: CookieConsentContainerComponent;
  let fixture: ComponentFixture<CookieConsentContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CookieConsentContainerComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CookieConsentContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should prevent unnecessary detach portal', () => {
    spyOn(component.statusChanged, 'emit').and.callThrough();
    component.hide();
    fixture.detectChanges();
    expect(component.statusChanged.emit).not.toHaveBeenCalled();
  });

  describe('configuration', () => {
    it('should add closeable button', () => {
      const config = new ConsentConfig();
      config.isCloseable = true;
      fixture.componentInstance.config = config;
      fixture.detectChanges();
      expect(fixture.nativeElement.querySelector('button')).toBeTruthy();
    });

    it('should add title', () => {
      const config = new ConsentConfig();
      config.title = 'test';
      fixture.componentInstance.config = config;
      fixture.detectChanges();
      expect(fixture.nativeElement.getElementsByClassName('ngx-cookie-consent__title')).toBeTruthy();
      expect((fixture.nativeElement.getElementsByClassName('ngx-cookie-consent__title')[0] as HTMLSpanElement).textContent).toBe('test');
    });

    it('should close the consent with the close button', fakeAsync(() => {
      const config = new ConsentConfig();
      config.isCloseable = true;
      fixture.componentInstance.config = config;
      fixture.detectChanges();
      const closeButton = fixture.nativeElement.getElementsByTagName('button');
      expect(closeButton.length).toBe(1);
      spyOn(fixture.componentInstance, 'hide').and.callThrough();
      (closeButton[0] as HTMLButtonElement).click();
      tick();
      expect(fixture.componentInstance.hide).toHaveBeenCalledTimes(1);
    }));

  });
});
