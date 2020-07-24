import { CookieConsentActionDirective } from './cookie-consent-action.directive';
import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { NgxCookieConsentModule } from './cookie-consent.module';

describe('CookieConsentActionDirective', () => {
  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [
        SimpleContentActionTest
      ],
      imports: [
        NgxCookieConsentModule
      ]
    });
  });

  it('should create an instance', () => {
    const directive = new CookieConsentActionDirective();
    expect(directive).toBeTruthy();
  });

  it('should add "nx-cookie-consent__action" class to the host element', () => {
    const fixture = TestBed.createComponent(SimpleContentActionTest);
    fixture.detectChanges();
    const divElement = fixture.nativeElement.getElementsByTagName('div') as HTMLDivElement;
    expect(divElement[0].classList).toContain('ngx-cookie-consent__action');
  });
});

@Component({
  template: '<div ngxCookieConsentAction></div>'
})
// tslint:disable-next-line: component-class-suffix
class SimpleContentActionTest { }
