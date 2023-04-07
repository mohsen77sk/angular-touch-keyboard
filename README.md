# AngularTouchKeyboard

[![MIT licensed](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE) [![npm version](https://badge.fury.io/js/ngx-touch-keyboard.svg)](http://badge.fury.io/js/ngx-touch-keyboard) [![Build Status](https://github.com/mohsen77sk/angular-touch-keyboard/workflows/main/badge.svg)](https://github.com/mohsen77sk/angular-touch-keyboard/actions)

## What is this?

Virtual Keyboard for Angular applications.

![angular touch keyboard](https://mohsen77sk.github.io/angular-touch-keyboard/assets/images/angularTouchKeyboard.png)

## Demo

[https://mohsen77sk.github.io/angular-touch-keyboard/](https://mohsen77sk.github.io/angular-touch-keyboard/)

## Install

### Step 1: Install [ngx-touch-keyboard](https://www.npmjs.com/package/ngx-touch-keyboard)

```sh
npm install @angular/cdk ngx-touch-keyboard
```

### Step 2: Import the module

Add `ngxTouchKeyboardModule` as an import in your app's root NgModule.

```typescript
import { ngxTouchKeyboardModule }  from 'ngx-touch-keyboard';
@NgModule({
  ...
  imports: [
    ...
    ngxTouchKeyboardModule,
  ],
  ...
})
export class AppModule { }
```

### Compatibility

* `@angular/core`: >= 14.0.0
* `@angular/cdk`: >= 14.0.0

## Localization

AngularTouchKeyboard is localized in 4 keyboard-specific locales:

* `en-US` English (United States) (default)
* `en-UK` English (United Kingdom)
* `fa-IR` Persian
* `sv-SE` Swedish

## Usage

Simple usage example

```html
<input
  type="text"
  ngxTouchKeyboard
  #touchKeyboard="ngxTouchKeyboard"
  (focus)="touchKeyboard.openPanel()"
/>
```

Locale usage example

```html
<input
  type="text"
  ngxTouchKeyboard="fa-IR"
  #touchKeyboard="ngxTouchKeyboard"
  (focus)="touchKeyboard.openPanel()"
/>
```

Material usage example

```html
<mat-form-field>
  <mat-label>Default</mat-label>
  <input
    matInput
    type="text"
    ngxTouchKeyboard
    #touchKeyboard="ngxTouchKeyboard"
  />
  <button
    mat-icon-button
    matSuffix
    type="button"
    (click)="touchKeyboard.togglePanel()"
  >
    <mat-icon> keyboard </mat-icon>
  </button>
</mat-form-field>
```

### Properties

| Property                     | Description                                                 |
| ---------------------------- | ----------------------------------------------------------- |
| `ngxTouchKeyboard`           | Required to initialize Virtual Keyboard to specified input. |
| `ngxTouchKeyboardDebug`      | Debug mode is on.                                           |
| `ngxTouchKeyboardFullScreen` | Full screen mode is on.                                     |

### Methods

Here's the list of all available methods:

| Methods               | Description           |
| --------------------- | --------------------- |
| `openPanel(): void`   | Open keyboard panel   |
| `closePanel(): void`  | Close keyboard panel  |
| `togglePanel(): void` | Toggle keyboard panel |

## Themes

### Built-in themes

* `default`: white theme
* `dark`: dark theme

You must put the class `dark` in the body to use the `dark` theme.

### Create custom theme

To customize the theme, you need to use css variables.

| Name                            | Description                           |
| ------------------------------- | ------------------------------------- |
| `--tk-color-text`               | color of text button                  |
| `--tk-background`               | color of background panel             |
| `--tk-background-button`        | color of background basic button      |
| `--tk-background-button-fn`     | color of background functional button |
| `--tk-background-button-active` | color of background active button     |

## Layouts

Depends on attribute inputmode, the keyboard layout is changed.

| inputmode             | Screenshot                                                                                               |
| --------------------- | -------------------------------------------------------------------------------------------------------- |
| `inputmode='text'`    | ![angular touch keyboard](https://mohsen77sk.github.io/angular-touch-keyboard/assets/images/text.png)    |
| `inputmode='search'`  | ![angular touch keyboard](https://mohsen77sk.github.io/angular-touch-keyboard/assets/images/search.png)  |
| `inputmode='email'`   | ![angular touch keyboard](https://mohsen77sk.github.io/angular-touch-keyboard/assets/images/email.png)   |
| `inputmode='url'`     | ![angular touch keyboard](https://mohsen77sk.github.io/angular-touch-keyboard/assets/images/url.png)     |
| `inputmode='numeric'` | ![angular touch keyboard](https://mohsen77sk.github.io/angular-touch-keyboard/assets/images/number.png)  |
| `inputmode='decimal'` | ![angular touch keyboard](https://mohsen77sk.github.io/angular-touch-keyboard/assets/images/decimal.png) |
| `inputmode='tel'`     | ![angular touch keyboard](https://mohsen77sk.github.io/angular-touch-keyboard/assets/images/tel.png)     |

## Development

The most useful commands for development are:

* `npm run start` to start a development server
* `npm run build-demo` to build the demo locally (it will be published automatically by GitHub Actions)

## License

[The MIT License (MIT)](LICENSE)
