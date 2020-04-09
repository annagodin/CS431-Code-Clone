import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ComponentOrder} from "../../shared/ComponentOrder";
import {InputType} from "../../shared/models/file-inputs/CodeReference";

@Component({
  selector: 'app-code-analysis',
  templateUrl: './code-analysis.component.html',
  styleUrls: ['./code-analysis.component.css']
})
export class CodeAnalysisComponent implements OnInit {
  pageView = new Array<boolean>(Object.keys(ComponentOrder).length/2);
  pageAvailability = new Array<boolean>(Object.keys(ComponentOrder).length/2);
  currentView: string;
  inputType: InputType;
  giveFeedback = false;

  constructor() {
  }

  ngOnInit(): void {


    this.currentView="SELECT_INPUT_MODE";
    for(let i = 0; i< this.pageView.length; i++) {
      this.pageView[i] = false;
      this.pageAvailability[i]=false;
    }
    this.pageView[0]=true;
    this.pageAvailability[0]=true;
    console.log(this.pageView)
  }



  get componentOrder() { return ComponentOrder; }

  togglePage(index, string) {

    if(this.pageAvailability[index]==false){
      return;
    }

    for(let i = 0; i< this.pageView.length; i++) {
      this.pageView[i] = false;
    }

    this.pageView[index]=true;

    this.currentView=string;
  }

   onValChange(val: string) {
    this.currentView = val;
  }

  getInputType($event) {
    console.log("here");
    this.inputType = $event;
    this.makePageAvailable(ComponentOrder.UPLOAD_INPUTS)
    this.togglePage(ComponentOrder.UPLOAD_INPUTS, "UPLOAD_INPUTS");
  }

  makePageAvailable(index){
    this.pageAvailability[index]=true;
  }

}
