import { Component, OnInit } from '@angular/core';
import {ComponentOrder} from "../../shared/ComponentOrder";

@Component({
  selector: 'app-code-analysis',
  templateUrl: './code-analysis.component.html',
  styleUrls: ['./code-analysis.component.css']
})
export class CodeAnalysisComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  pageView = new Array<boolean>(Object.keys(ComponentOrder).length/2);


  get componentOrder() { return ComponentOrder; }

  togglePage(index) {
    for(let i = 0; i< this.pageView.length; i++) {
      this.pageView[i] = false;
    }
    if(index!=-1)
      this.pageView[index]=true;
  }

}
