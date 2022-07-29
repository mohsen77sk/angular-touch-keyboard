import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isDark = true;

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
