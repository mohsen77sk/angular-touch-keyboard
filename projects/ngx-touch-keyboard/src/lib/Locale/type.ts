/**
 * Represents a keyboard layout where each key is associated with a 2D array of strings.
 *
 * @interface Layout
 * @property {Object.<string, string[][]>} [key: string] - A mapping of keys to their respective 2D array of strings.
 */
export interface Layout {
  [key: string]: Array<Array<string>>;
}

/**
 * Represents a display configuration where each key is associated with a string value.
 *
 * @interface Display
 * @property {string} [key] - The key representing a specific display element.
 * @property {string} [key: string] - The string value associated with the key.
 */
export interface Display {
  [key: string]: string;
}

/**
 * Represents a locale configuration for the touch keyboard.
 *
 * @interface Locale
 *
 * @property {string} code - The locale code (e.g., 'en-US', 'fr-FR').
 * @property {'ltr' | 'rtl'} dir - The text direction of the locale, either 'ltr' (left-to-right) or 'rtl' (right-to-left).
 * @property {Layout} layouts - The keyboard layouts associated with the locale.
 * @property {Display} display - The display settings for the locale.
 */
export interface Locale {
  code: string;
  dir: 'ltr' | 'rtl';
  layouts: Layout;
  display: Display;
}
