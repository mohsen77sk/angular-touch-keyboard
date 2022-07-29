import { KeyboardLayout, KeyboardDisplay } from './layouts.type';

export const getDefaultLayout = (): KeyboardLayout => {
  return {
    text_default: [
      ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
      ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
      ['{shift}', 'z', 'x', 'c', 'v', 'b', 'n', 'm', '{backspace}'],
      ['{numbers}', '{space}', '{ent}'],
    ],
    text_shift: [
      ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
      ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
      ['{shift}', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '{backspace}'],
      ['{numbers}', '{space}', '{ent}'],
    ],
    text_numbers: [
      ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
      ['-', '/', ':', ';', '(', ')', '$', '&', '@', '"'],
      ['{extends}', '.', ',', '?', '!', "'", '{backspace}'],
      ['{abc}', '{space}', '{ent}'],
    ],
    text_extends: [
      ['[', ']', '{', '}', '#', '%', '^', '*', '+', '='],
      ['_', '\\', '|', '~', '<', '>', '€', '£', '¥', '•'],
      ['{numbers}', '.', ',', '?', '!', "'", '{backspace}'],
      ['{abc}', '{space}', '{ent}'],
    ],
    search_default: [
      ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
      ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
      ['{shift}', 'z', 'x', 'c', 'v', 'b', 'n', 'm', '{backspace}'],
      ['{numbers}', '{space}', '{ent}'],
    ],
    search_shift: [
      ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
      ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
      ['{shift}', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '{backspace}'],
      ['{numbers}', '{space}', '{ent}'],
    ],
    search_numbers: [
      ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
      ['-', '/', ':', ';', '(', ')', '$', '&', '@', '"'],
      ['{extends}', '.', ',', '?', '!', "'", '{backspace}'],
      ['{abc}', '{space}', '{ent}'],
    ],
    search_extends: [
      ['[', ']', '{', '}', '#', '%', '^', '*', '+', '='],
      ['_', '\\', '|', '~', '<', '>', '€', '£', '¥', '•'],
      ['{numbers}', '.', ',', '?', '!', "'", '{backspace}'],
      ['{abc}', '{space}', '{ent}'],
    ],
    email_default: [
      ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
      ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
      ['{shift}', 'z', 'x', 'c', 'v', 'b', 'n', 'm', '{backspace}'],
      ['{numbers}', '@', '{space}', '.', '{ent}'],
    ],
    email_shift: [
      ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
      ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
      ['{shift}', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '{backspace}'],
      ['{numbers}', '@', '{space}', '.', '{ent}'],
    ],
    email_numbers: [
      ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
      ['$', '!', '~', '&', '=', '#', '[', ']'],
      ['{extends}', '.', '_', '-', '+', '{backspace}'],
      ['{abc}', '@', '{space}', '.', '{ent}'],
    ],
    email_extends: [
      ['`', '|', '{', '}', '?', '%', '^', '*', '/', "'"],
      ['$', '!', '~', '&', '=', '#', '[', ']'],
      ['{numbers}', '.', '_', '-', '+', '{backspace}'],
      ['{abc}', '@', '{space}', '.', '{ent}'],
    ],
    url_default: [
      ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
      ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
      ['{shift}', 'z', 'x', 'c', 'v', 'b', 'n', 'm', '{backspace}'],
      ['{numbers}', '/', '.com', '.', '{ent}'],
    ],
    url_shift: [
      ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
      ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
      ['{shift}', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '{backspace}'],
      ['{numbers}', '/', '.com', '.', '{ent}'],
    ],
    url_numbers: [
      ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
      ['@', '&', '%', '?', ',', '=', '[', ']'],
      ['{extends}', '_', ':', '-', '+', '{backspace}'],
      ['{abc}', '/', '.com', '.', '{ent}'],
    ],
    url_extends: [
      ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
      ['*', '$', '#', '!', "'", '^', '[', ']'],
      ['{numbers}', '~', ';', '(', ')', '{backspace}'],
      ['{abc}', '/', '.com', '.', '{ent}'],
    ],
    numeric_default: [
      ['1', '2', '3'],
      ['4', '5', '6'],
      ['7', '8', '9'],
      ['0', '{backspace}'],
    ],
    decimal_default: [
      ['1', '2', '3'],
      ['4', '5', '6'],
      ['7', '8', '9'],
      ['.', '0', '{backspace}'],
    ],
    tel_default: [
      ['1', '2', '3', '*'],
      ['4', '5', '6', '#'],
      ['7', '8', '9', '+'],
      ['0', '{backspace}'],
    ],
  };
};

export const getDefaultDisplay = (): KeyboardDisplay => {
  return {
    '{shift}': '⇧',
    '{backspace}': '⌫',
    '{abc}': 'ABC',
    '{numbers}': '123',
    '{extends}': '#+=',
    '{ent}': 'return',
    '{space}': ' ',
  };
};
