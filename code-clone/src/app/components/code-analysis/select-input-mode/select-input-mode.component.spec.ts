import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SelectInputModeComponent} from './select-input-mode.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {InputType} from "../../../shared/models/file-inputs/CodeReference";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

describe('SelectInputModeComponent', () => {
  let component: SelectInputModeComponent;
  let fixture: ComponentFixture<SelectInputModeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SelectInputModeComponent],
      imports: [
        MatFormFieldModule,
        MatSelectModule,
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        FormsModule,
        BrowserAnimationsModule
      ]
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

  it(`should have value SNIPPET`, async(() => {
    fixture = TestBed.createComponent(SelectInputModeComponent);

    const expected_value = InputType.SNIPPET;
    component.referenceCodeType=expected_value;
    // component = fixture.debugElement.componentInstance;
    expect(component.referenceCodeType).toEqual(expected_value);
  }));

});
