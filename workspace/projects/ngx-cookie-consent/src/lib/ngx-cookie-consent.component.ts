import { Component, OnInit, ChangeDetectionStrategy, Input, EventEmitter, Output, ChangeDetectorRef } from '@angular/core';
import { coerceBooleanProperty } from '@angular/cdk/coercion';

@Component({
  selector: 'ngx-cookie-consent',
  templateUrl: './ngx-cookie-consent.html',
  styleUrls: ['./ngx-cookie-consent.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgxCookieConsentComponent implements OnInit {

  private _title: string;
  @Input()
  set title(value: string) {
    if (value !== this._title) {
      this._title = value;
      this._cdr.markForCheck();
    }
  }
  get title(): string {
    return this._title;
  }

  private _closeable: boolean;
  @Input()
  set closeable(value: boolean) {
    this._closeable = coerceBooleanProperty(value);
  }
  get closeable(): boolean {
    return this._closeable;
  }

  @Output() closedEvent = new EventEmitter<void>();

  constructor(private _cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

}
