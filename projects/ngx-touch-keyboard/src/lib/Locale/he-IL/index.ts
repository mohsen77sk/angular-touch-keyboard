import { Layout, Display, Locale } from '../type';
import { fnDisplay } from '../constants';

const layouts: Layout = {
  text_alphabetic: [
    ['ק', 'ר', 'א', 'ט', 'ו', 'ן', 'ם', 'פ'],
    ['ש', 'ד', 'ג', 'כ', 'ע', 'י', 'ח', 'ל', 'ך', 'ף'],
    ['ז', 'ס', 'ב', 'ה', 'נ', 'מ', 'צ', 'ת', 'ץ', '{backspace}'],
    ['{numeric}', '{space}', '{done}'],
  ],
  text_numeric: [
    ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
    ['-', '/', ':', ';', '(', ')', '₪', '@', '"', "'"],
    ['{symbolic}', '.', ',', '?', '!', '{backspace}'],
    ['{alphabetic}', '{space}', '{done}'],
  ],
  text_symbolic: [
    ['[', ']', '{', '}', '#', '%', '^', '*', '+', '='],
    ['_', '\\', '|', '~', '<', '>', '€', '$', '&', '•'],
    ['{numeric}', '.', ',', '?', '!', '{backspace}'],
    ['{alphabetic}', '{space}', '{done}'],
  ],
  search_alphabetic: [
    ['ק', 'ר', 'א', 'ט', 'ו', 'ן', 'ם', 'פ'],
    ['ש', 'ד', 'ג', 'כ', 'ע', 'י', 'ח', 'ל', 'ך', 'ף'],
    ['ז', 'ס', 'ב', 'ה', 'נ', 'מ', 'צ', 'ת', 'ץ', '{backspace}'],
    ['{numeric}', '{space}', '{done}'],
  ],
  search_numeric: [
    ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
    ['-', '/', ':', ';', '(', ')', '₪', '@', '"', "'"],
    ['{symbolic}', '.', ',', '?', '!', '{backspace}'],
    ['{alphabetic}', '{space}', '{done}'],
  ],
  search_symbolic: [
    ['[', ']', '{', '}', '#', '%', '^', '*', '+', '='],
    ['_', '\\', '|', '~', '<', '>', '€', '$', '&', '•'],
    ['{numeric}', '.', ',', '?', '!', '{backspace}'],
    ['{alphabetic}', '{space}', '{done}'],
  ],
  email_alphabetic: [
    ['ק', 'ר', 'א', 'ט', 'ו', 'ן', 'ם', 'פ'],
    ['ש', 'ד', 'ג', 'כ', 'ע', 'י', 'ח', 'ל', 'ך', 'ף'],
    ['ז', 'ס', 'ב', 'ה', 'נ', 'מ', 'צ', 'ת', 'ץ', '{backspace}'],
    ['{numeric}', '@', '{space}', '.', '{done}'],
  ],
  email_numeric: [
    ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
    ['₪', '!', '~', '&', '=', '#', ']', '['],
    ['{symbolic}', '.', '_', '-', '+', '{backspace}'],
    ['{alphabetic}', '@', '{space}', '.', '{done}'],
  ],
  email_symbolic: [
    ['`', '|', '{', '}', '?', '%', '^', '*', '/', "'"],
    ['₪', '!', '~', '&', '=', '#', ']', '['],
    ['{numeric}', '.', '_', '-', '+', '{backspace}'],
    ['{alphabetic}', '@', '{space}', '.', '{done}'],
  ],
  url_alphabetic: [
    ['ק', 'ר', 'א', 'ט', 'ו', 'ן', 'ם', 'פ'],
    ['ש', 'ד', 'ג', 'כ', 'ע', 'י', 'ח', 'ל', 'ך', 'ף'],
    ['ז', 'ס', 'ב', 'ה', 'נ', 'מ', 'צ', 'ת', 'ץ', '{backspace}'],
    ['{numeric}', '/', '.com', '.', '{done}'],
  ],
  url_numeric: [
    ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
    ['@', '&', '%', '?', ',', '=', ']', '['],
    ['{symbolic}', '_', ':', '-', '+', '{backspace}'],
    ['{alphabetic}', '/', '.com', '.', '{done}'],
  ],
  url_symbolic: [
    ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
    ['*', '₪', '#', '!', "'", '^', ']', '['],
    ['{numeric}', '~', ';', ')', '(', '{backspace}'],
    ['{alphabetic}', '/', '.com', '.', '{done}'],
  ],
  numeric_default: [
    ['1', '2', '3', '.'],
    ['4', '5', '6', '-'],
    ['7', '8', '9', '{backspace}'],
    ['0', '{done}'],
  ],
  decimal_default: [
    ['1', '2', '3', '.'],
    ['4', '5', '6', '-'],
    ['7', '8', '9', '{backspace}'],
    ['0', '{done}'],
  ],
  tel_default: [
    ['1', '2', '3', '+'],
    ['4', '5', '6', '-'],
    ['7', '8', '9', '{backspace}'],
    ['*', '0', '#', '{done}'],
  ],
};

const display: Display = {
  '{done}': fnDisplay.DONE,
  '{backspace}': fnDisplay.BACKSPACE,
  '{space}': fnDisplay.SPACE,
  '{alphabetic}': 'אבג',
  '{numeric}': '123',
  '{symbolic}': '=+#',
};

const locale: Locale = {
  code: 'he-IL',
  dir: 'rtl',
  layouts: layouts,
  display: display,
};

export default locale;
