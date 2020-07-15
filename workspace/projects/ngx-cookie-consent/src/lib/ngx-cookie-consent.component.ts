import { Component, OnInit, ChangeDetectionStrategy, Input, EventEmitter, Output } from '@angular/core';
import { coerceBooleanProperty } from '@angular/cdk/coercion';

@Component({
  selector: 'ngx-cookie-consent',
  template: `
    <ng-content></ng-content>
`,
  styleUrls: ['./ngx-cookie-consent.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgxCookieConsentComponent implements OnInit {

  // tslint:disable-next-line: variable-name
  private _closeable: boolean;
  @Input()
  set closeable(value: boolean) {
    this._closeable = coerceBooleanProperty(value);
  }
  get closeable(): boolean {
    return this._closeable;
  }

  @Output() closedEvent = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

}
