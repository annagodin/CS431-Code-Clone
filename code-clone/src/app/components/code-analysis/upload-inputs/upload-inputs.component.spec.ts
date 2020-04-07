import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadInputsComponent } from './upload-inputs.component';

describe('UploadInputsComponent', () => {
  let component: UploadInputsComponent;
  let fixture: ComponentFixture<UploadInputsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
