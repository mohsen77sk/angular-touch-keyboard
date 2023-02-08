import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialDialogExampleComponent } from './material-dialog-example.component';

describe('MaterialDialogExampleComponent', () => {
  let component: MaterialDialogExampleComponent;
  let fixture: ComponentFixture<MaterialDialogExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialDialogExampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialDialogExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
