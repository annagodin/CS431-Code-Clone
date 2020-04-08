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

  displayedColumns: string[] = ['cloneType', 'rating', 'textFeedback', "action"];
  cloneFeedbackList: CloneFeedback[];
  // dataSource: MatTableDataSource<CloneFeedback>;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;


  constructor(private databaseService: DatabaseService) { }

  ngOnInit() {
    this.databaseService.getData().subscribe(data => {
      this.cloneFeedbackList = this.convertData(data);
      this.printData();
    });
    // this.dataSource = new MatTableDataSource<CloneFeedbackInterface>(this.ELEMENT_DATA);
    // this.dataSource.paginator = this.paginator;
    // console.log(this.ELEMENT_DATA);



  }

  addRandomDataPoint(){
    let randRank = Math.floor(Math.random() * (+5 - +1)) + +1;
    let randCloneType = Math.floor(Math.random() * (+4 - +1)) + +1;
    let randomText = ["hey", "bye", "testing this stuff", "idk"];
    let randTextOutput = Math.floor(Math.random() * Math.floor(5));
    console.log("randTextOutput: " + randTextOutput);
    let fbd;
    if(randTextOutput==4){
      fbd = new CloneFeedback(randRank,randCloneType,null);
    }
    else {
      fbd = new CloneFeedback(randRank,randCloneType,randomText[randTextOutput]);
    }
    fbd = this.databaseService.createDataPoint(fbd);
  }

  printData(){
    console.log("heyeyeyeyey heres your data");
    console.log(this.cloneFeedbackList);
    console.log(this.ELEMENT_DATA);
  }

  convertData(data){
    let feedbackData:CloneFeedback[]=[];
    this.ELEMENT_DATA=[];
    for (const i of data){
      let fb = new CloneFeedback(i["rating"],i["cloneType"],i["textFeedback"]);
      fb.id = i["id"];
      feedbackData.push(fb);

      let row = {cloneType: fb.cloneType, rating: fb.rating, textFeedback: fb.textFeedback, id: fb.id };
      this.ELEMENT_DATA.push(row);
    }
    this.dataSource = new MatTableDataSource<CloneFeedbackInterface>(this.ELEMENT_DATA);
    this.dataSource.paginator = this.paginator;
    return feedbackData;
  }

  create(cloneFeedback: CloneFeedback){
    this.databaseService.createDataPoint(cloneFeedback);
  }

  update(cloneFeedback: CloneFeedback) {
    this.databaseService.updateDataPoint(cloneFeedback);
  }

  delete(id) {
    this.databaseService.deleteDataPoint(id);
  }

  deleteAll(){
    this.databaseService.deleteEverything();
  }


}




export interface CloneFeedbackInterface {
  cloneType: number;
  rating: number;
  textFeedback: string;
  id: string;
}

// const ELEMENT_DATA: PeriodicElement[] = [
//   {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
//   {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
//   {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na'},
//   {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},
//   {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},
//   {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si'},
//   {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},
//   {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S'},
//   {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},
//   {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'},
//   {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K'},
//   {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'},
// ];
