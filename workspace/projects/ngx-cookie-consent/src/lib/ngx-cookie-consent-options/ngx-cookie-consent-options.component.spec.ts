import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxCookieConsentOptionsComponent } from './ngx-cookie-consent-options.component';

describe('NgxCookieConsentOptionsComponent', () => {
  let component: NgxCookieConsentOptionsComponent;
  let fixture: ComponentFixture<NgxCookieConsentOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxCookieConsentOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxCookieConsentOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
