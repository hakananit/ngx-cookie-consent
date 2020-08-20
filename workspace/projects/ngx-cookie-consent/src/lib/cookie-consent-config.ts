export type CookieConsentPosition = 'bottom' | 'top';

type sameSite = 'lax' | 'strict';

export type Cookies = 'max-date' | 'name' | 'domain' | 'secure' | 'same-site';

export interface CookieConfig {
    name: string;
    type: Cookies;
    value: string;
    maxDate?: number;
    expires?: string;
    domain?: string;
    secure?: boolean;
    samesite?: sameSite;
}

export interface CookieConsentConfig {
    title?: string;
    isCloseable?: boolean;
    hasBackdrop?: boolean;
    position?: CookieConsentPosition;
    hasfocusTrap?: boolean;
    disappearOnPageScroll?: boolean;
    cookieConfig?: CookieConfig[];
}
