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


  constructor(private databaseService: DatabaseService) { }

  ngOnInit() {

  }







}
