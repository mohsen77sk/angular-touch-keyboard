import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import packageJson from '../../projects/ngx-touch-keyboard/package.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isDark = true;
  version = packageJson.version;

  language = 'en-US';
  languages = [
    { value: 'en-US', name: 'English (US)' },
    { value: 'en-GB', name: 'English (UK)' },
    { value: 'fa-IR', name: 'Persian' },
  ];

  /**
   * constructor
   */
  constructor(@Inject(DOCUMENT) private _document: any) {}

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
