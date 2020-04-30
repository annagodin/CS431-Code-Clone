import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import { By} from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

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
  let de: DebugElement;

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
    de = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have value SNIPPET`, async(() => {
    fixture = TestBed.createComponent(SelectInputModeComponent);

    const expected_value = InputType.SNIPPET;
    component.referenceCodeType=expected_value;
    expect(component.referenceCodeType).toEqual(expected_value);
  }));

  it('should have an `mat-label` tag of `Reference input type`', () => {
    expect(de.query(By.css('mat-label')).nativeElement.innerText).toBe('Reference input type');
  });

  it('should have an `button` tag of `Upload Inputs`', () => {
    expect(de.query(By.css('button')).nativeElement.innerText).toBe('Upload Inputs');
  });

  it('should click button `Upload Inputs`', async(() => {
    spyOn(component, 'goToUploadInputs');
  
    let button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();
  
    fixture.whenStable().then(() => {
      expect(component.goToUploadInputs).toHaveBeenCalled();
    });
  }));

});
