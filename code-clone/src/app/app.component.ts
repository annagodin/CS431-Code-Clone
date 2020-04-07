import {Component, OnInit} from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {CloneFeedback} from "./shared/models/CloneFeedback";
import {DatabaseService} from "./shared/services/database/database.service";
import {Observable} from "rxjs";
import {ComponentOrder} from "./shared/ComponentOrder";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'code-clone';
  pageView = new Array<boolean>(Object.keys(ComponentOrder).length/2);
  // cloneFeedbackList: CloneFeedback[];


  constructor(private databaseService: DatabaseService) { }

  ngOnInit() {
    // this.databaseService.getData().subscribe(data => {
    //   this.cloneFeedbackList=this.convertData(data);
    //   this.printData();
    // });

    for(let i = 0; i< this.pageView.length; i++) {
      this.pageView[i] = false;
    }
    console.log(this.pageView)

  }


  get componentOrder() { return ComponentOrder; }

  togglePage(index) {
    for(let i = 0; i< this.pageView.length; i++) {
      this.pageView[i] = false;
    }
    if(index!=-1)
      this.pageView[index]=true;
  }


  // printData(){
  //   console.log("heyeyeyeyey heres your data");
  //   console.log(this.cloneFeedbackList);
  // }

  // convertData(data){
  //   let feedbackData:CloneFeedback[]=[];
  //   for (const i of data){
  //     let fb = new CloneFeedback(i["rating"],i["cloneType"],i["textFeedback"]);
  //     fb.id = i["id"];
  //     feedbackData.push(fb)
  //   }
  //   return feedbackData;
  // }

  // create(cloneFeedback: CloneFeedback){
  //   this.databaseService.createDataPoint(cloneFeedback);
  // }
  //
  // update(cloneFeedback: CloneFeedback) {
  //   this.databaseService.updateDataPoint(cloneFeedback);
  // }





}
