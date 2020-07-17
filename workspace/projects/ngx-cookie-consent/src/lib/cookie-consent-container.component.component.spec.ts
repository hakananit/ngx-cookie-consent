import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CookieConsentContainerComponent } from './cookie-consent-container.component';

describe('CookieConsentContainerComponent', () => {
  let component: CookieConsentContainerComponent;
  let fixture: ComponentFixture<CookieConsentContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CookieConsentContainerComponent ]
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
});
