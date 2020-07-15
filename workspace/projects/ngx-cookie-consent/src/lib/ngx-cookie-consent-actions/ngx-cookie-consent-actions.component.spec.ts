import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxCookieConsentActionsComponent } from './ngx-cookie-consent-actions.component';

describe('NgxCookieConsentActionsComponent', () => {
  let component: NgxCookieConsentActionsComponent;
  let fixture: ComponentFixture<NgxCookieConsentActionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxCookieConsentActionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxCookieConsentActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
