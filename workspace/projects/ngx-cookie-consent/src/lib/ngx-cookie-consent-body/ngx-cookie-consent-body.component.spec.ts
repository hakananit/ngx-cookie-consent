import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxCookieConsentBodyComponent } from './ngx-cookie-consent-body.component';

describe('NgxCookieConsentBodyComponent', () => {
  let component: NgxCookieConsentBodyComponent;
  let fixture: ComponentFixture<NgxCookieConsentBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxCookieConsentBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxCookieConsentBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
