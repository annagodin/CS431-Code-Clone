import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {InputType} from "../../../shared/models/file-inputs/CodeReference";
import {ComponentOrder} from "../../../shared/ComponentOrder";

@Component({
  selector: 'app-select-input-mode',
  templateUrl: './select-input-mode.component.html',
  styleUrls: ['./select-input-mode.component.css']
})
export class SelectInputModeComponent implements OnInit {

  referenceCodeType: InputType;

  constructor() { }

  ngOnInit(): void {
  }

  @Output() inputTypeEmitter = new EventEmitter<InputType>();

  sendInputType() {
    this.inputTypeEmitter.emit(this.referenceCodeType);
  }

  get inputType() { return InputType; }


  goToUploadInputs() {
    this.sendInputType();
  }

}
