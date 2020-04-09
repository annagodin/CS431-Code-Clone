import {Component, Input, OnInit} from '@angular/core';
import {InputType} from "../../../shared/models/file-inputs/CodeReference";

@Component({
  selector: 'app-upload-inputs',
  templateUrl: './upload-inputs.component.html',
  styleUrls: ['./upload-inputs.component.css']
})
export class UploadInputsComponent implements OnInit {

  @Input() refInputType: InputType;

  constructor() { }

  ngOnInit(): void {
    // console.log("we got the input type in upload inputs");
    // console.log(this.refInputType)
  }

  get inputType() { return InputType; }


}
