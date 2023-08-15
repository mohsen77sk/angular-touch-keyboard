import { Layout, Display, Locale } from '../type';

import { fnDisplay } from '../constants';

const layouts: Layout = {
text_alphabetic: [
[ 'ქ', 'წ', 'ე', 'რ', 'ტ', 'ყ', 'უ', 'ი', 'ო', 'პ' ],
['ა', 'ს', 'დ', 'ფ', 'გ', 'ჰ', 'ჯ', 'კ', 'ლ'],
['{shift}', 'ზ', 'ხ', 'ც', 'ვ', 'ბ', 'ნ', 'მ', '{backspace}'],
['{numeric}', '{space}', '{done}'],
],

text_shift: [
    ['ქ', 'ჭ', 'ე', 'ღ', 'თ', 'ყ', 'უ', 'ი', 'ო', 'პ'],
    ['ა', 'შ', 'დ', 'ფ', 'გ', 'ჰ', 'ჟ', 'კ', '₾'],
    ['{shift}', 'ძ', 'ხ', 'ჩ', 'ვ', 'ბ', 'ნ', 'მ', '{backspace}'],
    ['{numeric}', '{space}', '{done}'],
],
text_numeric: [
    ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
    ['-', '/', ':', ';', '(', ')', '$', '&', '@', '"'],
    ['{symbolic}', '.', ',', '?', '!', "'", '{backspace}'],
    ['{alphabetic}', '{space}', '{done}'],
],
text_symbolic: [
    ['[', ']', '{', '}', '#', '%', '^', '*', '+', '='],
    ['_', '\\', '|', '~', '<', '>', '€', '£', '¥', '•'],
    ['{numeric}', '.', ',', '?', '!', "'", '{backspace}'],
    ['{alphabetic}', '{space}', '{done}'],
],
search_alphabetic: [
    [ 'ქ', 'წ', 'ე', 'რ', 'ტ', 'ყ', 'უ', 'ი', 'ო', 'პ' ],
    ['ა', 'ს', 'დ', 'ფ', 'გ', 'ჰ', 'ჯ', 'კ', 'ლ'],
    ['{shift}', 'ზ', 'ხ', 'ც', 'ვ', 'ბ', 'ნ', 'მ', '{backspace}'],
    ['{numeric}', '{space}', '{done}'],
],
search_shift: [
    ['ქ', 'ჭ', 'ე', 'ღ', 'თ', 'ყ', 'უ', 'ი', 'ო', 'პ'],
    ['ა', 'შ', 'დ', 'ფ', 'გ', 'ჰ', 'ჟ', 'კ', '₾'],
    ['{shift}', 'ძ', 'ხ', 'ჩ', 'ვ', 'ბ', 'ნ', 'მ', '{backspace}'],
    ['{numeric}', '{space}', '{done}'],
],
search_numeric: [
    ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
    ['-', '/', ':', ';', '(', ')', '$', '&', '@', '"'],
    ['{symbolic}', '.', ',', '?', '!', "'", '{backspace}'],
    ['{alphabetic}', '{space}', '{done}'],
],
search_symbolic: [
    ['[', ']', '{', '}', '#', '%', '^', '*', '+', '='],
    ['_', '\\', '|', '~', '<', '>', '€', '£', '¥', '•'],
    ['{numeric}', '.', ',', '?', '!', "'", '{backspace}'],
    ['{alphabetic}', '{space}', '{done}'],
],
email_alphabetic: [
    ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
    ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
    ['{shift}', 'z', 'x', 'c', 'v', 'b', 'n', 'm', '{backspace}'],
    ['{numeric}', '@', '{space}', '.', '{done}'],
],
email_shift: [
    ['a', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
    ['{shift}', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '{backspace}'],
    ['{numeric}', '@', '{space}', '.', '{done}'],
],
email_numeric: [
    ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
    ['$', '!', '~', '&', '=', '#', '[', ']'],
    ['{symbolic}', '.', '_', '-', '+', '{backspace}'],
    ['{alphabetic}', '@', '{space}', '.', '{done}'],
],
email_symbolic: [
    ['`', '|', '{', '}', '?', '%', '^', '*', '/', "'"],
    ['$', '!', '~', '&', '=', '#', '[', ']'],
    ['{numeric}', '.', '_', '-', '+', '{backspace}'],
    ['{alphabetic}', '@', '{space}', '.', '{done}'],
],
url_alphabetic: [
    ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
    ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
    ['{shift}', 'z', 'x', 'c', 'v', 'b', 'n', 'm', '{backspace}'],
    ['{numeric}', '/', '.com', '.', '{done}'],
],
url_shift: [
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
    ['{shift}', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '{backspace}'],
    ['{numeric}', '/', '.com', '.', '{done}'],
],
url_numeric: [
    ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
    ['@', '&', '%', '?', ',', '=', '[', ']'],
    ['{symbolic}', '_', ':', '-', '+', '{backspace}'],
    ['{alphabetic}', '/', '.com', '.', '{done}'],
],
url_symbolic: [
    ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
    ['*', '$', '#', '!', "'", '^', '[', ']'],
    ['{numeric}', '~', ';', '(', ')', '{backspace}'],
    ['{alphabetic}', '/', '.com', '.', '{done}'],
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
const display: Display = {
'{done}': fnDisplay.DONE,
'{shift}': fnDisplay.SHIFT,
'{backspace}': fnDisplay.BACKSPACE,
'{space}': fnDisplay.SPACE,
'{alphabetic}': 'აბგ',
'{numeric}': '123',
'{symbolic}': '#+=',
};
const locale: Locale = {
code: 'ka-GE',
dir: 'ltr',
layouts: layouts,
display: display,
};
export default locale;