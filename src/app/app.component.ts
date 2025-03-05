import { Component, inject, ViewEncapsulation } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import packageJson from '../../projects/ngx-touch-keyboard/package.json';
import { enGB, enUS, esEs, faIR, heIL, kaGE, ruRU, svSE } from 'ngx-touch-keyboard';

import { MaterialDialogExampleComponent } from './material-dialog-example/material-dialog-example.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  private _document = inject(DOCUMENT);
  private _dialog = inject(MatDialog);

  isDark = true;
  version = packageJson.version;

  language = enUS;
  languages = [
    { value: enUS, name: 'English (US)' },
    { value: enGB, name: 'English (UK)' },
    { value: esEs, name: 'Spanish' },
    { value: faIR, name: 'Persian' },
    { value: heIL, name: 'Hebrew' },
    { value: kaGE, name: 'Georgian' },
    { value: ruRU, name: 'Russian' },
    { value: svSE, name: 'Swedish' },
  ];

  basicSimpleIsOpen = false;
  materialSimpleIsOpen = false;

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
