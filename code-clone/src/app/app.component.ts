import {Component, OnInit} from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {CloneFeedback} from "./shared/models/CloneFeedback";
import {DatabaseService} from "./shared/services/database/database.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  title = 'code-clone';

  cloneFeedbackList: CloneFeedback[];
  constructor(private databaseService: DatabaseService) { }

  ngOnInit() {
    this.databaseService.getData().subscribe(data => {
      this.cloneFeedbackList=this.convertData(data);
      this.printData();

    });
  }


  addRandomDataPoint(){
    let randRank = Math.floor(Math.random() * (+5 - +1)) + +1;
    let randCloneType = Math.floor(Math.random() * (+4 - +1)) + +1;
    let randomText = ["hey", "bye", "testing this stuff", "idk"];
    let randTextOutput = Math.floor(Math.random() * Math.floor(4));
    let fbd = new CloneFeedback(randRank,randCloneType,randomText[randTextOutput]);
    fbd = this.databaseService.createDataPoint(fbd);
  }

  printData(){
    console.log("heyeyeyeyey heres your data");
    console.log(this.cloneFeedbackList);
  }

  convertData(data){
    let feedbackData:CloneFeedback[]=[];
    for (const i of data){
      let fb = new CloneFeedback(i["rating"],i["cloneType"],i["textFeedback"]);
      fb.id = i["id"];
      feedbackData.push(fb)
    }
    return feedbackData;
  }

  create(cloneFeedback: CloneFeedback){
    this.databaseService.createDataPoint(cloneFeedback);
  }

  update(cloneFeedback: CloneFeedback) {
    this.databaseService.updateDataPoint(cloneFeedback);
  }

  delete(cloneFeedback: CloneFeedback) {
    this.databaseService.deleteDataPoint(cloneFeedback);
  }

  deleteAll(){
    this.databaseService.deleteEverything();
  }


}
