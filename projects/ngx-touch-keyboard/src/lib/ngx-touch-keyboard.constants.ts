import { InjectionToken } from '@angular/core';
import { Locale } from './Locale/type';
import { enUS } from './Locale/index';

/** Injection token that can be used to specify the locale data for the keyboard. */
export const NGX_TOUCH_KEYBOARD_LOCALE = new InjectionToken<Locale>('NGX_TOUCH_KEYBOARD_LOCALE', {
  providedIn: 'root',
  factory: NGX_TOUCH_KEYBOARD_LOCALE_FACTORY,
});

/** @docs-private */
export function NGX_TOUCH_KEYBOARD_LOCALE_FACTORY(): Locale {
  return enUS;
}
