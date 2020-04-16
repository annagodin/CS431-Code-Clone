import {Component, Input, OnInit} from '@angular/core';
import {CodeReference, InputType} from "../../../shared/models/file-inputs/CodeReference";
import {CodeInput} from "../../../shared/models/file-inputs/CodeInput";
import {CloneResults} from "../../../shared/models/CloneResults";
import {DiffEditorModel, NgxEditorModel} from "ngx-monaco-editor";
import {MonacoEditorModule} from "ngx-monaco-editor";

@Component({
  selector: 'app-clone-results',
  templateUrl: './clone-results.component.html',
  styleUrls: ['./clone-results.component.css']
})
export class CloneResultsComponent implements OnInit {
  @Input() cloneResults: CloneResults;


  inputEditorOptions = {theme: 'vs', language: 'java', readOnly: true};
  referenceEditorOptions = {theme: 'vs', language: 'java', readOnly: true};
  code_string_idk = "//the is a placeholder for code inputs\npublic class HelloWorld {\n" +
    "    blah blach blach public static void main(String[] args) {\n" +
    "        System.out.println(\"Hello, World\");\n" +
    "    }\n" +
    "}";


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

  }
}
