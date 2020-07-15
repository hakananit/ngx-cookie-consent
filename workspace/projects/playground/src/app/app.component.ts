import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = "Your cookie consent title here";

  cookieConsetClosed($event): void {
    console.log('cookieConsetClosed');
  }
}
