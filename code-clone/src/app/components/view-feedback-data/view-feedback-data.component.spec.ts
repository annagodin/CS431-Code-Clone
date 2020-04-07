import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFeedbackDataComponent } from './view-feedback-data.component';

describe('ViewFeedbackDataComponent', () => {
  let component: ViewFeedbackDataComponent;
  let fixture: ComponentFixture<ViewFeedbackDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewFeedbackDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewFeedbackDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
