import { CookieConsentBodyDirective } from './cookie-consent-body.directive';
import { TestBed } from '@angular/core/testing';
import { NgxCookieConsentModule } from './cookie-consent.module';
import { Component } from '@angular/core';

describe('CookieConsentBodyDirective', () => {
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
    const directive = new CookieConsentBodyDirective();
    expect(directive).toBeTruthy();
  });
  it('should append "ngx-cookie-consent__body" class in the host element', () => {
    const fixture = TestBed.createComponent(SimpleTestComponent);
    fixture.detectChanges();
    const divElement = fixture.nativeElement.getElementsByTagName('div') as HTMLDivElement;
    expect(divElement[0].classList).toContain('ngx-cookie-consent__body');
  });
});
@Component({
  template: '<div ngxCookieConsentBody></div>'
})
class SimpleTestComponent { }
