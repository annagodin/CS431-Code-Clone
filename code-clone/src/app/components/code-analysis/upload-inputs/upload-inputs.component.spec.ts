import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By} from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { CodeReference, InputType } from "../../../shared/models/file-inputs/CodeReference";
import {CloneResults} from "../../../shared/models/CloneResults";

import { MatSnackBarModule } from '@angular/material/snack-bar';
import { UploadInputsComponent } from './upload-inputs.component';
import { CodeInput } from 'src/app/shared/models/file-inputs/CodeInput';
import { CloneData } from 'src/app/shared/models/CloneData';
import {Snippet} from "../../../shared/models/file-inputs/Snippet";

describe('UploadInputsComponent', () => {
  let component: UploadInputsComponent;
  let fixture: ComponentFixture<UploadInputsComponent>;
  let de: DebugElement;

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
    de = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have code input', ()=> {
    fixture = TestBed.createComponent(UploadInputsComponent);
    const expected_value: CodeInput = { contents: 'SampleCodeInputStringHere'};
    component.codeInput = expected_value;
    expect(component.codeInput).toEqual(expected_value);
  });

  it('should have code reference (Snippet)', ()=> {
    fixture = TestBed.createComponent(UploadInputsComponent);
    const expected_value: CodeInput = { contents: "SnippetContentsHere"};
    component.codeInput = expected_value;
    expect(component.codeInput).toEqual(expected_value);
  });

  it('should have code reference (Project)', ()=> {
    fixture = TestBed.createComponent(UploadInputsComponent);
    const expected_value: CodeReference = { type: InputType.PROJECT, contents: ["ProjectContentsHere"] };
    component.codeReference = expected_value;
    expect(component.codeReference).toEqual(expected_value);
  });

  it('should have code results', ()=> {
    fixture = TestBed.createComponent(UploadInputsComponent);
    const placeholderCode = "//the is a placeholder for code inputs\npublic class HelloWorld {\n" +
    "    public static void main(String[] args) {\n" +
    "        System.out.println(\"Hello, World\");\n" +
    "    }\n" +
    "}";
    const codeInput: CodeInput = new Snippet(null, placeholderCode);
    const codeReference: CodeReference = new Snippet(null, placeholderCode);
    const expected_value: CloneResults = new CloneResults(codeInput,codeReference);

    component.cloneResults = expected_value;
    expect(component.cloneResults).toEqual(expected_value);
  });

  it('should have an `button` tag of `Get Results`', () => {
    expect(de.query(By.css('button')).nativeElement.innerText).toBe('Get Results');
  });

  it('should click button `Get Results`', async(() => {
    spyOn(component, 'goToResults');
  
    let button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();
  
    fixture.whenStable().then(() => {
      expect(component.goToResults).toHaveBeenCalled();
    });
  }));
});
