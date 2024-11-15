import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import packageJson from '../../projects/ngx-touch-keyboard/package.json';

import { MaterialDialogExampleComponent } from './material-dialog-example/material-dialog-example.component';
import { NgxTouchKeyboardComponent } from 'ngx-touch-keyboard';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  isDark = true;
  version = packageJson.version;

  language = 'en-US';
  languages = [
    { value: 'en-US', name: 'English (US)' },
    { value: 'en-GB', name: 'English (UK)' },
    { value: 'fa-IR', name: 'Persian' },
    { value: 'he-IL', name: 'Hebrew' },
    { value: 'ka-GE', name: 'Georgian' },
    { value: 'ru-RU', name: 'Russian' },
    { value: 'sv-SE', name: 'Swedish' },
  ];

  /**
   * constructor
   */
  constructor(
    @Inject(DOCUMENT) private _document: any,
    private _dialog: MatDialog
  ) {}

  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void {
    this.toggleScheme();
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Toggle scheme theme
   */
  toggleScheme(): void {
    this.isDark = !this.isDark;

    if (this.isDark) {
      this._updateScheme('dark');
    } else {
      this._updateScheme('light');
    }
  }

  /**
   * Open dialog
   */
  openDialog(): void {
    this._dialog.open(MaterialDialogExampleComponent, {
      width: '600px',
      autoFocus: false,
      disableClose: true,
    });
  }


  /**
   * Accept click
   */
  acceptClick(element: NgxTouchKeyboardComponent): void {
    console.info('acceptClick:' + element.getActiveInputElement()?.value);
    //alert('yes');
  }
  public validateNumber(value: string|undefined): boolean {
    if (!isNaN(parseFloat(String(value))) && isFinite(Number(value)))
      return true;
    else
      return false;
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Private methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Update the selected scheme
   *
   * @private
   */
  private _updateScheme(scheme: 'light' | 'dark'): void {
    // Remove class names for all schemes
    this._document.body.classList.remove('light', 'dark');

    // Add class name for the currently selected scheme
    this._document.body.classList.add(scheme);
  }
}
