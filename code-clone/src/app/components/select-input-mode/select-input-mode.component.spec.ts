import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectInputModeComponent } from './select-input-mode.component';

describe('SelectInputModeComponent', () => {
  let component: SelectInputModeComponent;
  let fixture: ComponentFixture<SelectInputModeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectInputModeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectInputModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
