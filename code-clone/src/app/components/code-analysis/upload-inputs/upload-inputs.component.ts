import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CodeReference, InputType} from "../../../shared/models/file-inputs/CodeReference";
import {CodeInput} from "../../../shared/models/file-inputs/CodeInput";
import {Snippet} from "../../../shared/models/file-inputs/Snippet";
import {CloneResults} from "../../../shared/models/CloneResults";

@Component({
  selector: 'app-upload-inputs',
  templateUrl: './upload-inputs.component.html',
  styleUrls: ['./upload-inputs.component.css']
})
export class UploadInputsComponent implements OnInit {

  codeInput: CodeInput;
  codeReference: CodeReference;
  cloneResults: CloneResults;

  @Output() cloneResultsEmitter = new EventEmitter<CloneResults>();


  referenceEditorOptions = {theme: 'vs-dark', language: 'java'};
  inputEditorOptions = {theme: 'vs-dark', language: 'java'};

  code_string = "//the is a placeholder for code inputs\npublic class HelloWorld {\n" +
    "    public static void main(String[] args) {\n" +
    "        System.out.println(\"Hello, World\");\n" +
    "    }\n" +
    "}";

  // inputCode: string= this.code_string;
  // referenceCode: string= this.code_string;

  @Input() refInputType: InputType;

  constructor() {
    this.codeInput = new Snippet(null,this.code_string);
    this.codeReference = new Snippet(null,this.code_string);
  }


  ngOnInit(): void {
    // this.codeInput= new Snippet(null,this.code_string);
    // this.codeReference = new Snippet(null,this.code_string);


  }

  get inputType() { return InputType; }


  goToResults() {
    console.log("reference");
    console.log(this.codeReference.contents);
    console.log("contents");
    console.log(this.codeInput.contents);

    this.cloneResults = new CloneResults(this.codeInput,this.codeReference);
    console.log("~~~~~CLONE DATA");
    console.log(this.cloneResults.results);
    this.cloneResultsEmitter.emit(this.cloneResults);





  }


}
