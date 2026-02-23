import { NgModule } from '@angular/core';
import { PortalModule } from '@angular/cdk/portal';
import { OverlayModule } from '@angular/cdk/overlay';

import { NgxTouchKeyboardOrigin, NgxTouchKeyboardDirective } from './ngx-touch-keyboard.directive';
import { NgxTouchKeyboardComponent } from './ngx-touch-keyboard.component';

@NgModule({
  imports: [PortalModule, OverlayModule],
  declarations: [NgxTouchKeyboardOrigin, NgxTouchKeyboardDirective, NgxTouchKeyboardComponent],
  exports: [NgxTouchKeyboardOrigin, NgxTouchKeyboardDirective, NgxTouchKeyboardComponent],
})
export class NgxTouchKeyboardModule {}
