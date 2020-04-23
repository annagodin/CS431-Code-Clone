import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CloneResultsComponent } from './clone-results.component';
import {CloneResults} from "../../../shared/models/CloneResults";
import {Snippet} from "../../../shared/models/file-inputs/Snippet";
import {CodeInput} from "../../../shared/models/file-inputs/CodeInput";
import {CodeReference} from "../../../shared/models/file-inputs/CodeReference";

describe('CloneResultsComponent', () => {
  let component: CloneResultsComponent;
  let fixture: ComponentFixture<CloneResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CloneResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {

    fixture = TestBed.createComponent(CloneResultsComponent);
    component = fixture.componentInstance;

    let placeholderCode = "//the is a placeholder for code inputs\npublic class HelloWorld {\n" +
      "    public static void main(String[] args) {\n" +
      "        System.out.println(\"Hello, World\");\n" +
      "    }\n" +
      "}";
    let codeInput: CodeInput = new Snippet(null, placeholderCode);
    let codeReference: CodeReference = new Snippet(null, placeholderCode);
    component.cloneResults = new CloneResults(codeInput,codeReference);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
