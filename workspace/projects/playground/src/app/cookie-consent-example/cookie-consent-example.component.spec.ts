import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CookieConsentExampleComponent } from './cookie-consent-example.component';

describe('CookieConsentExampleComponent', () => {
  let component: CookieConsentExampleComponent;
  let fixture: ComponentFixture<CookieConsentExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CookieConsentExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CookieConsentExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
