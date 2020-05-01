import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ComponentOrder} from "../../shared/ComponentOrder";
import {CodeReference, InputType} from "../../shared/models/file-inputs/CodeReference";
import {CodeInput} from "../../shared/models/file-inputs/CodeInput";
import {CloneResults} from "../../shared/models/CloneResults";
import {CloneFeedback} from "../../shared/models/CloneFeedback";
import {CloneData} from "../../shared/models/CloneData";

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


  cloneResults: CloneResults;
  codeInput: CodeInput;
  codeReference: CodeReference;


  feedbackData: CloneFeedback[];

  constructor() {
    this.codeInput = new class implements CodeInput {
      contents: string;
    };
    this.codeReference = new class implements CodeReference {
      contents: any;
      type: InputType;
    };
    this.cloneResults=new CloneResults(this.codeInput,this.codeReference);
    this.cloneResults.results = new Array<CloneData>();
    let cloneDataTemp = new CloneData(0,[0,0],[0,0],null);
    cloneDataTemp.feedback= new CloneFeedback(0,0,null)
    this.cloneResults.results.push(cloneDataTemp);
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

    if(index>0){
      this.pageAvailability[0]=false;
    }

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


  getCloneResults($event) {
    this.cloneResults=$event;
    this.makePageAvailable(ComponentOrder.CLONE_RESULTS)
    this.togglePage(ComponentOrder.CLONE_RESULTS, "CLONE_RESULTS");
  }


  goToInputFeedback($event) {
    this.cloneResults=$event;
    this.makePageAvailable(ComponentOrder.INPUT_FEEDBACK_DATA);
    this.togglePage(ComponentOrder.INPUT_FEEDBACK_DATA, "INPUT_FEEDBACK_DATA");
    this.giveFeedback=true;
  }
  //
  // getFeedbackData($event) {
  //   this.feedbackData = $event;
  // }
}
