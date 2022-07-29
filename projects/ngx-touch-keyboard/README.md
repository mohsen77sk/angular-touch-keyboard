# AngularTouchKeyboard
[![MIT licensed](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![npm version](https://badge.fury.io/js/ngx-touch-keyboard.svg)](http://badge.fury.io/js/ngx-touch-keyboard)

## What is this?
Virtual Keyboard for Angular applications.

<img src="src/assets/images/angularTouchKeyboard.png" alt="angular touch keyboard"/>

## Demo
https://stackblitz.com/edit/ngx-touch-keyboard

## Install

### Step 1: Install ngx-touch-keyboard
```sh
$ npm install ngx-touch-keyboard
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
### Methods

| Methods | Description |
| --- | --- |
| `openPanel`   | Open keyboard panel   |
| `closePanel`  | Close keyboard panel  |
| `togglePanel` | Toggle keyboard panel |

### Layouts

| inputmode | screenshot |
| --- | --- |
| `inputmode='text'`    | <img src="src/assets/images/text.png" alt="angular touch keyboard" width="260"/> |
| `inputmode='search'`  | <img src="src/assets/images/search.png" alt="angular touch keyboard" width="260"/> |
| `inputmode='email'`   | <img src="src/assets/images/email.png" alt="angular touch keyboard" width="260"/> |
| `inputmode='url'`     | <img src="src/assets/images/url.png" alt="angular touch keyboard" width="260"/> |
| `inputmode='numeric'` | <img src="src/assets/images/number.png" alt="angular touch keyboard" width="260"/> |
| `inputmode='decimal'` | <img src="src/assets/images/decimal.png" alt="angular touch keyboard" width="260"/> |
| `inputmode='tel'`     | <img src="src/assets/images/tel.png" alt="angular touch keyboard" width="260"/> |

## License
[The MIT License (MIT)](LICENSE)
