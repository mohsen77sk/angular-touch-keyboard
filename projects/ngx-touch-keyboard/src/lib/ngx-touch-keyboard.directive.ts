import {
  booleanAttribute,
  ComponentRef,
  Directive,
  effect,
  ElementRef,
  HostListener,
  inject,
  input,
  model,
  OnDestroy,
} from '@angular/core';
import { ComponentPortal } from '@angular/cdk/portal';
import { Overlay, OverlayRef, OverlaySizeConfig, PositionStrategy } from '@angular/cdk/overlay';
import { NgxTouchKeyboardComponent } from './ngx-touch-keyboard.component';
import { Locale } from './Locale/type';

/**
 * Directive applied to an element to make it usable as an origin for an keyboard using a
 * ConnectedPositionStrategy.
 */
@Directive({
  selector: '[ngxTouchKeyboardOrigin]',
  exportAs: 'ngxTouchKeyboardOrigin',
})
export class NgxTouchKeyboardOrigin {
  elementRef = inject(ElementRef);
}

/**
 * This directive provides methods to open, close, and toggle the touch keyboard panel.
 * It also handles the creation and configuration of the overlay used to display the keyboard.
 */
@Directive({
  selector: 'input[ngxTouchKeyboard], textarea[ngxTouchKeyboard]',
  exportAs: 'ngxTouchKeyboard',
})
export class NgxTouchKeyboardDirective implements OnDestroy {
  private _overlay = inject(Overlay);
  private _elementRef = inject(ElementRef<HTMLInputElement>);

  open = model(false, {
    alias: 'ngxTouchKeyboardOpen',
  });

  openOnFocus = input(false, {
    alias: 'ngxTouchKeyboardOpenOnFocus',
    transform: booleanAttribute,
  });

  locale = input<Locale | undefined>(undefined, {
    alias: 'ngxTouchKeyboardLocale',
  });

  debugMode = input(false, {
    alias: 'ngxTouchKeyboardDebug',
    transform: booleanAttribute,
  });

  fullScreenMode = input(false, {
    alias: 'ngxTouchKeyboardFullScreen',
    transform: booleanAttribute,
  });

  origin = input<NgxTouchKeyboardOrigin | null>(null, {
    alias: 'ngxConnectedTouchKeyboardOrigin',
  });

  private _overlayRef!: OverlayRef;
  private _panelRef!: ComponentRef<NgxTouchKeyboardComponent>;

  @HostListener('focus')
  onFocus(): void {
    if (this.openOnFocus()) {
      this.open.set(true);
    }
  }

  /**
   * constructor
   */
  constructor() {
    effect(() => {
      this.open() ? this.openPanel() : this.closePanel();
    });
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On destroy
   */
  ngOnDestroy(): void {
    // Dispose the overlay
    if (this._overlayRef) {
      this._overlayRef.dispose();
    }
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Open keyboard panel
   */
  openPanel(): void {
    // return if panel is attached
    if (this._overlayRef?.hasAttached()) {
      return;
    }

    // Create the overlay if it doesn't exist
    if (!this._overlayRef) {
      this._createOverlay();
    }

    // Set overlay class
    if (this.fullScreenMode()) {
      this._overlayRef.addPanelClass('ngx-touch-keyboard-fullScreen');
    } else {
      this._overlayRef.removePanelClass('ngx-touch-keyboard-fullScreen');
    }

    // Update position the overlay
    this._overlayRef.updatePositionStrategy(this._getPositionStrategy(this.fullScreenMode()));

    // Update size the overlay
    this._overlayRef.updateSize(this._getOverlaySize(this.fullScreenMode()));

    // Attach the portal to the overlay
    this._panelRef = this._overlayRef.attach(new ComponentPortal(NgxTouchKeyboardComponent));
    this._panelRef.instance.debug = this.debugMode();
    this._panelRef.instance.setLocale(this.locale());
    this._panelRef.instance.setActiveInput(this._elementRef.nativeElement);
    this._panelRef.instance.closePanel.subscribe(() => this.closePanel());
    this.open.set(true);
  }

  /**
   * Close keyboard panel
   */
  closePanel(): void {
    this._overlayRef?.detach();
    this.open.set(false);
  }

  /**
   * Toggle keyboard panel
   */
  togglePanel(): void {
    if (this.open()) {
      this.closePanel();
    } else {
      this.openPanel();
    }
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Private methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Create the overlay
   *
   * @private
   */
  private _createOverlay(): void {
    this._overlayRef = this._overlay.create({
      direction: 'ltr',
      hasBackdrop: false,
      panelClass: 'ngx-touch-keyboard-overlay-pane',
      scrollStrategy: this._overlay.scrollStrategies.noop(),
    });
  }

  /**
   * Get position strategy
   *
   * @param fullscreen
   * @private
   */
  private _getPositionStrategy(fullscreen: boolean): PositionStrategy {
    if (fullscreen) {
      return this._overlay.position().global().centerHorizontally().bottom('0');
    }

    return this._overlay
      .position()
      .flexibleConnectedTo(this._getOriginElement())
      .withLockedPosition()
      .withPush()
      .withPositions([
        {
          originX: 'start',
          originY: 'bottom',
          overlayX: 'start',
          overlayY: 'top',
        },
        {
          originX: 'start',
          originY: 'top',
          overlayX: 'start',
          overlayY: 'bottom',
        },
        {
          originX: 'end',
          originY: 'bottom',
          overlayX: 'end',
          overlayY: 'top',
        },
        {
          originX: 'end',
          originY: 'top',
          overlayX: 'end',
          overlayY: 'bottom',
        },
      ]);
  }

  /**
   * Get overlay size
   *
   * @param fullscreen
   * @private
   */
  private _getOverlaySize(fullscreen: boolean): OverlaySizeConfig {
    if (fullscreen) {
      return {
        width: '100%',
        maxWidth: '100%',
        minWidth: '100%',
      };
    }

    return {
      width: this._getOriginElement().getBoundingClientRect().width,
      maxWidth: this._getOriginElement().getBoundingClientRect().width,
      minWidth: '260px',
    };
  }

  /**
   * Gets the origin element for the keyboard panel.
   *
   * @private
   */
  private _getOriginElement(): any {
    if (this.origin()) {
      return this.origin()?.elementRef.nativeElement;
    }

    const element = this._elementRef.nativeElement;

    // Material form field <= v14
    if (element.classList.contains('mat-input-element')) {
      // Return [mat-form-field-flex] element
      return element.parentNode?.parentNode;
    }

    // Material form field > v14
    if (element.classList.contains('mat-mdc-input-element')) {
      // Return [mat-mdc-text-field-wrapper] element
      return element.parentNode?.parentNode?.parentNode;
    }

    // Return input
    return element;
  }
}
