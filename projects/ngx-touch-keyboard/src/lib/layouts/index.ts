import { KeyboardLayout, KeyboardDisplay } from './layouts.type';

import { layout as enGB_Layout, display as enGB_Display } from './i18n/en-GB';
import { layout as enUS_Layout, display as enUS_Display } from './i18n/en-US';

const layouts = {
  'en-GB': enGB_Layout,
  'en-US': enUS_Layout,
};

const displays = {
  'en-GB': enGB_Display,
  'en-US': enUS_Display,
};

const defaultLocale = 'en-US';
const locale = ['en-GB', 'en-US'] as const;
type supportLocale = typeof locale[number];

function isOfSupportLocale(userInput: string): userInput is supportLocale {
  return (locale as readonly string[]).includes(userInput);
}

export const getLayout = (locale: string): KeyboardLayout => {
  if (isOfSupportLocale(locale)) {
    return layouts[locale];
  } else {
    return layouts[defaultLocale];
  }
};

export const getDisplay = (locale: string): KeyboardDisplay => {
  if (isOfSupportLocale(locale)) {
    return displays[locale];
  } else {
    return displays[defaultLocale];
  }
};
