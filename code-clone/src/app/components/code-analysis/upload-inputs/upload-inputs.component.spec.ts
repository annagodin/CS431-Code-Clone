import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { UploadInputsComponent } from './upload-inputs.component';

describe('UploadInputsComponent', () => {
  let component: UploadInputsComponent;
  let fixture: ComponentFixture<UploadInputsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[ MatSnackBarModule ],
      declarations: [ UploadInputsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadInputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
