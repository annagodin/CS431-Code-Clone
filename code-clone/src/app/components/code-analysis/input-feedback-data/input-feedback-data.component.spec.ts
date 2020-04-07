import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputFeedbackDataComponent } from './input-feedback-data.component';

describe('InputFeedbackDataComponent', () => {
  let component: InputFeedbackDataComponent;
  let fixture: ComponentFixture<InputFeedbackDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputFeedbackDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputFeedbackDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
