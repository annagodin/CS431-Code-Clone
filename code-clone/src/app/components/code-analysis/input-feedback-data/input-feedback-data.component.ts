import {Component, Input, OnInit} from '@angular/core';
import {CloneResults} from "../../../shared/models/CloneResults";
import {CloneFeedback} from "../../../shared/models/CloneFeedback";
import {CloneData} from "../../../shared/models/CloneData";

@Component({
  selector: 'app-input-feedback-data',
  templateUrl: './input-feedback-data.component.html',
  styleUrls: ['./input-feedback-data.component.css']
})
export class InputFeedbackDataComponent implements OnInit {
  @Input() cloneResults: CloneResults;
  // @Input() feedbackData: CloneFeedback[];

  step = 0;


  constructor() {
  }

  ngOnInit(): void {
  }


  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  uploadFeedback() {
    console.log("~~~~~~~PRINTING FEEDBACK~~~~~~~");
    for (let i=0; i<this.cloneResults.results.length; i++){
      console.log(this.cloneResults.results[i])
    }

  }
}
