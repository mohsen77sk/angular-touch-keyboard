import {
  ComponentRef,
  Directive,
  ElementRef,
  EventEmitter,
  Inject,
  Input,
  OnDestroy,
  Output,
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ComponentPortal } from '@angular/cdk/portal';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import {
  Overlay,
  OverlayRef,
  OverlaySizeConfig,
  PositionStrategy,
} from '@angular/cdk/overlay';
import { NgxTouchKeyboardComponent } from './ngx-touch-keyboard.component';
import { fnButton } from './Locale/constants';

@Directive({
  selector: 'input[ngxTouchKeyboard], textarea[ngxTouchKeyboard]',
  exportAs: 'ngxTouchKeyboard',
})
export class NgxTouchKeyboardDirective implements OnDestroy {
  isOpen = false;
  @Output() acceptClick: EventEmitter<NgxTouchKeyboardComponent>;
  
  @Input() validate!: ((args: string|undefined) => boolean) | undefined;

  private _locale!: string;
  /** locale */
  @Input()
  get ngxTouchKeyboard() {
    return this._locale;
  }
  set ngxTouchKeyboard(value: string) {
    this._locale = value;
  }

  private _debugMode!: boolean;
  /** debug mode */
  @Input()
  get ngxTouchKeyboardDebug() {
    return this._debugMode;
  }
  set ngxTouchKeyboardDebug(value: any) {
    this._debugMode = coerceBooleanProperty(value);
  }

  private _fullScreenMode!: boolean;
  /** fullscreen mode */
  @Input()
  get ngxTouchKeyboardFullScreen() {
    return this._fullScreenMode;
  }
  set ngxTouchKeyboardFullScreen(value: any) {
    this._fullScreenMode = coerceBooleanProperty(value);
  }

  private _overlayRef!: OverlayRef;
  private _panelRef!: ComponentRef<NgxTouchKeyboardComponent>;

  /**
   * Constructor
   */
  constructor(
    private _overlay: Overlay,
    private _elementRef: ElementRef<HTMLInputElement>,
    @Inject(DOCUMENT) private _document: any
  ) {

    this.acceptClick = new EventEmitter<NgxTouchKeyboardComponent>();
    this._elementRef.nativeElement.addEventListener('blur', () => {
      this.blurEventHandler();
    });
    this._elementRef.nativeElement.addEventListener('focus', () => {
      this.openPanel();
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
    this._overlayRef.addPanelClass('ngx-touch-keyboard-overlay-pane');
    if (this.ngxTouchKeyboardFullScreen)
      this._overlayRef.addPanelClass('ngx-touch-keyboard-fullScreen');

    // Update direction the overlay
    this._overlayRef.setDirection(
      this._document.body.getAttribute('dir') || this._document.dir || 'ltr'
    );
    // Update position the overlay
    this._overlayRef.updatePositionStrategy(
      this._getPositionStrategy(this.ngxTouchKeyboardFullScreen)
    );
    // Update size the overlay
    this._overlayRef.updateSize(
      this._getOverlaySize(this.ngxTouchKeyboardFullScreen)
    );

    // Attach the portal to the overlay
    this._panelRef = this._overlayRef.attach(
      new ComponentPortal(NgxTouchKeyboardComponent)
    );
    this._panelRef.instance.debug = this.ngxTouchKeyboardDebug;
    this._panelRef.instance.setLocale(this._locale);
    this._panelRef.instance.setActiveInput(this._elementRef.nativeElement);
    //We initialize the text before accept to keep the last change, 
    //If there is validation process for the text input and the user insert wrong text
    //Then We need return to the previous text. 
    this._panelRef.instance.setTextBeforeAccept();
    this.isOpen = true;

    // Reference the input element
    this._panelRef.instance.closePanel.subscribe(() => this.closePanel());
    this._panelRef.instance.acceptClick.subscribe((element) => {
      this.acceptClick.emit(element);
    } );
    this._panelRef.instance.validate = this.validate;

  }
  blurEventHandler()
  {
    this._panelRef.instance.handleButtonPress(fnButton.DONE);
    //this.closePanel();
  }

  /**
   * Close keyboard panel
   */
  closePanel(): void {
    //The problem is that when I want to display the keyboard again 
    //I have to lose focus from the text input 
    //(by clicking on the screen outside the text input) and then when 
    //I click on the text input the keyboard will appear...
    //To deal with this problem we makes focus out by calling blur method 
    this._panelRef.instance.getActiveInputElement()?.blur();
    this._overlayRef.detach();
    this.isOpen = false;
  }

  /**
   * Toggle keyboard panel
   */
  togglePanel(): void {
    if (this.isOpen) {
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
      hasBackdrop: false,
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
      .flexibleConnectedTo(this._inputOrigin())
      .withLockedPosition(true)
      .withPush(true)
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
      width: this._inputOrigin().getBoundingClientRect().width,
      maxWidth: this._inputOrigin().getBoundingClientRect().width,
      minWidth: '260px',
    };
  }

  /**
   * Get input origin
   *
   * @private
   */
  private _inputOrigin(): any {
    const element = this._elementRef.nativeElement;

    // Material form field - Check input in mat-form-field
    if (element.classList.contains('mat-input-element')) {
      // Return [mat-form-field-flex] element
      return element.parentNode?.parentNode;
    }

    // Material form field - Check input in mat-form-field
    if (element.classList.contains('mat-mdc-input-element')) {
      // Return [mat-form-field] element
      return element.parentNode?.parentNode?.parentNode;
    }

    // Return input
    return element;
  }
}
