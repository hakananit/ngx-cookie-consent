import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-cookie-consent',
  template: `
    <ng-content><ng-content>
  `,
  styles: [
  ]
})
export class NgxCookieConsentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
