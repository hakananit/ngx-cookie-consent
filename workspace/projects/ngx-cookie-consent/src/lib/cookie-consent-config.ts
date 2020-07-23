export type CookieConsentPosition = 'bottom' | 'top';

export interface CookieConfig {
    cookieName?: string;
    expireTime?: number;
    domain?: string;
    secure?: boolean;
    samesite?: boolean;
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
