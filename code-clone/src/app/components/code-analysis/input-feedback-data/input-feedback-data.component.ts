import {Component, Input, OnInit} from '@angular/core';
import {CloneResults} from "../../../shared/models/CloneResults";
import {CloneFeedback} from "../../../shared/models/CloneFeedback";
import {CloneData} from "../../../shared/models/CloneData";
import {DatabaseService} from "../../../shared/services/database/database.service";
import {MatTableDataSource} from "@angular/material/table";
import {CloneFeedbackInterface} from "../../view-feedback-data/view-feedback-data.component";

@Component({
  selector: 'app-input-feedback-data',
  templateUrl: './input-feedback-data.component.html',
  styleUrls: ['./input-feedback-data.component.css']
})
export class InputFeedbackDataComponent implements OnInit {
  @Input() cloneResults: CloneResults;
  // @Input() feedbackData: CloneFeedback[];

  isFeedbackUploaded = false;
  step = 0;
  cloneFeedbackList: CloneFeedback[];

  constructor(private databaseService: DatabaseService) {
  }

  ngOnInit(): void {
    this.databaseService.getData().subscribe(data => {
      this.cloneFeedbackList = this.convertData(data);
      this.printData();
    });
  }

  convertData(data) {
    let feedbackData: CloneFeedback[] = [];
    for (const i of data) {
      let fb = new CloneFeedback(i["rating"], i["cloneType"], i["textFeedback"]);
      fb.id = i["id"];
      feedbackData.push(fb);
      // let row = {cloneType: fb.cloneType, rating: fb.rating, textFeedback: fb.textFeedback, id: fb.id };
    }
    return feedbackData;
  }


  addFeedbackDataPoint(cloneFeedback: CloneFeedback) {
    cloneFeedback = this.databaseService.createDataPoint(cloneFeedback);
  }

  printData() {
    console.log("---------- here's your data");
    console.log(this.cloneFeedbackList);
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
    // console.log("###### PRINTING FEEDBACK~~~~~~~");
    for (let i = 0; i < this.cloneResults.results.length; i++) {
      let feedbackDataPoint = this.cloneResults.results[i].feedback;
      if (feedbackDataPoint.textFeedback == undefined) {
        feedbackDataPoint.textFeedback = null;
      }
      this.addFeedbackDataPoint(feedbackDataPoint);
    }
    this.isFeedbackUploaded = true;
    // console.log("~~~~~~~~~~UPLOADED FEEDBACK~~~~~~~");


  }
}
