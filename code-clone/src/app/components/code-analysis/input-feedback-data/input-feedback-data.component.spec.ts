import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputFeedbackDataComponent } from './input-feedback-data.component';
import {AngularFireModule} from "@angular/fire";
import {environment} from "../../../../environments/environment";
import {AngularFireDatabaseModule} from "@angular/fire/database";
import {CodeInput} from "../../../shared/models/file-inputs/CodeInput";
import {Snippet} from "../../../shared/models/file-inputs/Snippet";
import {CodeReference} from "../../../shared/models/file-inputs/CodeReference";
import {CloneResults} from "../../../shared/models/CloneResults";

describe('InputFeedbackDataComponent', () => {
  let component: InputFeedbackDataComponent;
  let fixture: ComponentFixture<InputFeedbackDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputFeedbackDataComponent ],
      imports: [
        AngularFireModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireDatabaseModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputFeedbackDataComponent);
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
