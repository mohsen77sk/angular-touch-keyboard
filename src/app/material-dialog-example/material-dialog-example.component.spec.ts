import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgxTouchKeyboardModule } from 'ngx-touch-keyboard';

import { MaterialDialogExampleComponent } from './material-dialog-example.component';

describe('MaterialDialogExampleComponent', () => {
  let component: MaterialDialogExampleComponent;
  let fixture: ComponentFixture<MaterialDialogExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MatIconModule,
        MatInputModule,
        MatButtonModule,
        MatDialogModule,
        MatFormFieldModule,
        NgxTouchKeyboardModule,
      ],
      declarations: [MaterialDialogExampleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MaterialDialogExampleComponent);
    component = fixture.componentInstance;
  });

  it('should create the material dialog example', () => {
    expect(component).toBeTruthy();
  });
});
