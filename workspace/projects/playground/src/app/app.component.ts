import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = "Cookie consent";

  cookieConsetClosed($event): void {
    console.log('cookieConsetClosed');
  }
}
