export type CookieConsentPosition = 'bottom' | 'top' | 'center';

export interface CookieConsentConfig {
    title?: string;
    isCloseable?: boolean;
    hasfocusTrap?: boolean;
    hasBackdrop?: boolean;
    position?: CookieConsentPosition;
}
