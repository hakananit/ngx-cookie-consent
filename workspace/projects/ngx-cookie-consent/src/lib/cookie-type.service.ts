import { Injectable } from '@angular/core';
import { Cookies } from './cookie-consent-config';


@Injectable({
  providedIn: 'root'
})
export class CookieTypeService {

  getType(cookieType: Cookies, value: any, key?: string): string {
    let formattedValue = '';
    switch (cookieType) {
      case 'name': formattedValue = `${key}=${value},`;
                   break;
      default: formattedValue = `${cookieType}=${value},`;
               break;
    }
    return formattedValue;
  }

}
