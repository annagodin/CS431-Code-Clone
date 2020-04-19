import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {InputType} from "../../../shared/models/file-inputs/CodeReference";
import {ComponentOrder} from "../../../shared/ComponentOrder";
import {ErrorStateMatcher} from "@angular/material/core";
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from "@angular/forms";

@Component({
  selector: 'app-select-input-mode',
  templateUrl: './select-input-mode.component.html',
  styleUrls: ['./select-input-mode.component.css']
})
export class SelectInputModeComponent implements OnInit {

  validate=false;
  referenceCodeType: InputType;

  form: FormGroup;

  refInputType=new FormControl('', [Validators.required]);

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      'refInputType': [ undefined, Validators.required ]
    });
  }

  @Output() inputTypeEmitter = new EventEmitter<InputType>();


  onSubmit(value: any) {
    console.log('submit ', value);
    if (this.form.valid) {
      console.log('great');
    }
    else {
      console.log('invalid');
    }
  }


  sendInputType() {
    console.log("SENDING referenceCodeType:" + this.referenceCodeType);
    this.inputTypeEmitter.emit(this.referenceCodeType);
  }

  get inputType() { return InputType; }


  goToUploadInputs() {
    this.validate=true;
    if(!this.hasError()){
      this.sendInputType();
    }
  }

  hasError() {
    return this.referenceCodeType==null;
  }
}

