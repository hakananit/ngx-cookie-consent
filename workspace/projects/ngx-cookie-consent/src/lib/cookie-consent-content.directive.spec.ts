import { CookieConsentContentDirective } from './cookie-consent-content.directive';
import { TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { NgxCookieConsentModule } from './cookie-consent.module';

describe('CookieConsentContentDirective', () => {
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
    const directive = new CookieConsentContentDirective();
    expect(directive).toBeTruthy();
  });
  it('should append "ngx-cookie-consent__content" class in the host element', () => {
    const fixture = TestBed.createComponent(SimpleTestComponent);
    fixture.detectChanges();
    const divElement = fixture.nativeElement.getElementsByTagName('div') as HTMLDivElement;
    expect(divElement[0].classList).toContain('ngx-cookie-consent__content');
  });
});
@Component({
  template: '<div ngxCookieConsentContent></div>'
})
class SimpleTestComponent { }
