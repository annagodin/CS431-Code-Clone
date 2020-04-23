import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {CloneFeedback} from "../../shared/models/CloneFeedback";
import {DatabaseService} from "../../shared/services/database/database.service";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {newArray} from "@angular/compiler/src/util";

@Component({
  selector: 'app-view-feedback-data',
  templateUrl: './view-feedback-data.component.html',
  styleUrls: ['./view-feedback-data.component.css']
})
export class ViewFeedbackDataComponent implements OnInit {
  // displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource: MatTableDataSource<CloneFeedbackInterface>;
  ELEMENT_DATA: CloneFeedbackInterface[] = [];

  displayedColumns: string[] = ['cloneType', 'rating', 'textFeedback'];
  adminColumns: string[] = ['cloneType', 'rating', 'textFeedback', 'action'];

  columnDefinitions: any[] = [
    'cloneType',
    'rating',
    'textFeedback',
    { def: 'action', showNotAdmin: false },
  ];


  cloneFeedbackList: CloneFeedback[];
  // dataSource: MatTableDataSource<CloneFeedback>;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  isAdmin = false;
  hide = true;
  adminPasswordInput = "";
  validInput = false;
  submitted = false;

  constructor(private databaseService: DatabaseService) {
  }

  ngOnInit() {
    this.databaseService.getData().subscribe(data => {
      this.cloneFeedbackList = this.convertData(data);
      this.printData();
    });
  }


  getDisplayedColumns(): string[] {
    // const isMobile = this.currentDisplay === 'mobile';
    // return this.columnDefinitions
    //   .filter(cd => this.isAdmin)
    //   .map(cd => cd.def);
    //
    if(!this.isAdmin){
      return this.displayedColumns;
    } else{
      return this.adminColumns;
    }
  }

  addRandomDataPoint() {
    let randRank = Math.floor(Math.random() * Math.floor(5)) + 1;
    let randCloneType = Math.floor(Math.random() * Math.floor(4)) + 1;
    let randomText = ["hey", "bye", "testing this stuff", "idk"];
    let randTextOutput = Math.floor(Math.random() * Math.floor(5));
    console.log("randTextOutput: " + randTextOutput);
    let fbd;
    if (randTextOutput == 4) {
      fbd = new CloneFeedback(randRank, randCloneType, null);
    } else {
      fbd = new CloneFeedback(randRank, randCloneType, randomText[randTextOutput]);
    }
    fbd = this.databaseService.createDataPoint(fbd);
  }

  printData() {
    console.log("heyeyeyeyey heres your data");
    console.log(this.cloneFeedbackList);
    console.log(this.ELEMENT_DATA);
  }

  convertData(data) {
    let feedbackData: CloneFeedback[] = [];
    this.ELEMENT_DATA = [];
    for (const i of data) {
      let fb = new CloneFeedback(i["rating"], i["cloneType"], i["textFeedback"]);
      fb.id = i["id"];
      feedbackData.push(fb);

      let row = {cloneType: fb.cloneType, rating: fb.rating, textFeedback: fb.textFeedback, id: fb.id};
      this.ELEMENT_DATA.push(row);
    }
    this.dataSource = new MatTableDataSource<CloneFeedbackInterface>(this.ELEMENT_DATA);
    this.dataSource.paginator = this.paginator;
    return feedbackData;
  }

  create(cloneFeedback: CloneFeedback) {
    this.databaseService.createDataPoint(cloneFeedback);
  }

  update(cloneFeedback: CloneFeedback) {
    this.databaseService.updateDataPoint(cloneFeedback);
  }

  delete(id) {
    this.databaseService.deleteDataPoint(id);
  }

  deleteAll() {
    this.databaseService.deleteEverything();
  }


  authenticate() {
    this.submitted = true;
    if (this.adminPasswordInput == "admin") { //all good
      this.validInput = true;
    } else { //not good
      this.validInput = false;
    }
  }

  login() {
    this.isAdmin = true;
  }


  clearPassword() {
    this.adminPasswordInput = "";
  }

  logout() {
    this.isAdmin = false;
    this.submitted = false;
    this.validInput = false;
    this.adminPasswordInput = '';
  }
}


export interface CloneFeedbackInterface {
  cloneType: number;
  rating: number;
  textFeedback: string;
  id: string;
}

