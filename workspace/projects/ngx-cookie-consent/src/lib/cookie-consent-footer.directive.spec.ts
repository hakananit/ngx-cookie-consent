import { CookieConsentFooterDirective } from './cookie-consent-footer.directive';
import { TestBed } from '@angular/core/testing';
import { NgxCookieConsentModule } from './cookie-consent.module';
import { Component } from '@angular/core';

describe('CookieConsentFooterDirective', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        SimpleTestComponent
      ],
      imports: [
        NgxCookieConsentModule
      ]
    });
  });
  it('should create an instance', () => {
    const directive = new CookieConsentFooterDirective();
    expect(directive).toBeTruthy();
  });
  it('should append "ngx-cookie-consent__footer" class in the host element', () => {
    const fixture = TestBed.createComponent(SimpleTestComponent);
    fixture.detectChanges();
    const divElement = fixture.nativeElement.getElementsByTagName('div') as HTMLDivElement;
    expect(divElement[0].classList).toContain('ngx-cookie-consent__footer');
  });
});
@Component({
  template: '<div ngxCookieConsentFooter></div>'
})
class SimpleTestComponent { }
