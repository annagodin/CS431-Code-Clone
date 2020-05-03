import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By} from '@angular/platform-browser';

import { CloneResultsComponent } from './clone-results.component';
import {CloneResults} from "../../../shared/models/CloneResults";
import {CloneData} from "../../../shared/models/CloneData";
import {Snippet} from "../../../shared/models/file-inputs/Snippet";
import {CodeInput} from "../../../shared/models/file-inputs/CodeInput";
import {CodeReference} from "../../../shared/models/file-inputs/CodeReference";
import {InputType} from "../../../shared/models/file-inputs/CodeReference";


describe('CloneResultsComponent', () => {
  let component: CloneResultsComponent;
  let fixture: ComponentFixture<CloneResultsComponent>;
  let de: DebugElement;
  var expected_value: CloneResults;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CloneResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {

    fixture = TestBed.createComponent(CloneResultsComponent);
    component = fixture.componentInstance;

    var placeholderCode = "//the is a placeholder for code inputs\npublic class HelloWorld {\n" +
    "    public static void main(String[] args) {\n" +
    "        System.out.println(\"Hello, World\");\n" +
    "    }\n" +
    "}";
    var codeInput: CodeInput = new Snippet(null, placeholderCode);
    var codeReference: CodeReference = new Snippet(null, placeholderCode);
    //var codeData: CloneData[] = [new CloneData (1, [2,5], [1,4],'main', 'testing.java'), new CloneData (2, [2,5], [1,4],'main', 'testing.java')];
    expected_value = new CloneResults(codeInput,codeReference);

    component.cloneResults = expected_value;
    component.cloneResults.referenceCode.type=InputType.SNIPPET;

    fixture.detectChanges();
  });

  it('should have an `button` tag of `Submit Feedback`', () => {
    component.cloneResults.results.length = 1;
    expect(de.query(By.css('button')).nativeElement.innerText).toBe('Submit Feedback');
  });
/*
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
*/
  it('should have code results', ()=> {
    expect(component.cloneResults).toEqual(expected_value);
  });

  it('should have a cloneResults.results.length be 0', () => {
    expect(component.cloneResults.results.length).toBe(0);
  });

  it('should have reference code type', () => {
    expect(component.cloneResults).toEqual(expected_value);
  });


  it('should click button `Submit Feedback`', async(() => {
    component.cloneResults.results.length = 1;
    spyOn(component, 'goToFeedback');
    fixture.detectChanges();
    let button = fixture.debugElement.nativeElement.querySelector('button');
    console.log(button);
    button.click();
    fixture.detectChanges();
  
    expect(component.goToFeedback).toHaveBeenCalled();
  }));



  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
