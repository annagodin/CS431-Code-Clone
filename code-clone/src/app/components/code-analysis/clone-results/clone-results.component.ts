import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CodeReference, InputType} from "../../../shared/models/file-inputs/CodeReference";
import {CodeInput} from "../../../shared/models/file-inputs/CodeInput";
import {CloneResults} from "../../../shared/models/CloneResults";
import {DiffEditorModel, NgxEditorModel} from "ngx-monaco-editor";
import {MonacoEditorModule} from "ngx-monaco-editor";
import {CloneFeedback} from "../../../shared/models/CloneFeedback";
// https://github.com/MurhafSousli/ngx-highlightjs/blob/master/README_v2.md

// https://stackoverflow.com/questions/59275532/monaco-deltadecorations-disappear-in-angular-7-when-model-changes

@Component({
  selector: 'app-clone-results',
  templateUrl: './clone-results.component.html',
  styleUrls: ['./clone-results.component.css']
})
export class CloneResultsComponent implements OnInit {
  @Input() cloneResults: CloneResults;
  @Output() cloneResultsEmitter = new EventEmitter<CloneResults>();
  @Output() feedbackDataEmitter = new EventEmitter<CloneFeedback[]>();


  inputEditorOptions = {theme: 'vs', language: 'java', readOnly: true};
  referenceEditorOptions = {theme: 'vs', language: 'java', readOnly: true};
  code_string_idk = "//the is a placeholder for code inputs\npublic class HelloWorld {\n" +
    "    blah blach blach public static void main(String[] args) {\n" +
    "        System.out.println(\"Hello, World\");\n" +
    "    }\n" +
    "}";
  position: any = "after";


  onInit(editor: any) {
    const t = editor.deltaDecorations([], [
      {
        range: new monaco.Range(3, 1, 5, 1),
        options: {isWholeLine: true, linesDecorationsClassName: 'myLineDecoration'}
      },

    ]);
    console.log("here " + t);
  }

  constructor() {
  }

  ngOnInit(): void {
    // console.log("GOT HEREEEEEE\n" + this.codeInput.contents);
    // console.log("GOT HEREEEEEE\n" + this.codeReference.contents);

  }

  goToFeedback() {

    let cloneFeedback = new Array<CloneFeedback>(this.cloneResults.results.length);

    for (let i = 0; i < cloneFeedback.length; i++) {
      let cloneFeedbackData = new CloneFeedback();
      cloneFeedbackData.cloneType = this.cloneResults.results[i].cloneType;
      this.cloneResults.results[i].feedback=cloneFeedbackData;
      cloneFeedback[i] = cloneFeedbackData;
    }

    this.cloneResultsEmitter.emit(this.cloneResults);
    // console.log("CLONE FEEDBACK LENGTH: " + cloneFeedback.length);
    // this.feedbackDataEmitter.emit(cloneFeedback);
  }


  get inputType() {
    return InputType;
  }

}
