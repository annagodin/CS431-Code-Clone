import {Component, Input, OnInit} from '@angular/core';
import {CodeReference, InputType} from "../../../shared/models/file-inputs/CodeReference";
import {CodeInput} from "../../../shared/models/file-inputs/CodeInput";

@Component({
  selector: 'app-upload-inputs',
  templateUrl: './upload-inputs.component.html',
  styleUrls: ['./upload-inputs.component.css']
})
export class UploadInputsComponent implements OnInit {

  codeInput: CodeInput;
  codeReference: CodeReference;


  inputEditorOptions = {theme: 'vs-dark', language: 'java'};
  referenceEditorOptions = {theme: 'vs-dark', language: 'java'};

  code_string = "//the is a placeholder for code inputs\npublic class HelloWorld {\n" +
    "    public static void main(String[] args) {\n" +
    "        System.out.println(\"Hello, World\");\n" +
    "    }\n" +
    "}";

  inputCode: string= this.code_string;
  referenceCode: string= this.code_string;

  @Input() refInputType: InputType;

  constructor() { }


  ngOnInit(): void {
    // console.log("we got the input type in upload inputs");
    // console.log(this.refInputType)
  }

  get inputType() { return InputType; }


  goToResults() {

  }

}
