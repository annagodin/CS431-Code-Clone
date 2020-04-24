import {Component, OnInit} from '@angular/core';
import {DatabaseService} from "../../shared/services/database/database.service";
import {CloneFeedback} from "../../shared/models/CloneFeedback";
import * as CanvasJS from '../../../assets/jquery.canvasjs.min';

@Component({
  selector: 'app-view-statistics',
  templateUrl: './view-statistics.component.html',
  styleUrls: ['./view-statistics.component.css']
})


export class ViewStatisticsComponent implements OnInit {
  cloneFeedbackList: CloneFeedback[];


  constructor(private databaseService: DatabaseService) {
    CanvasJS.addColorSet("customColorSet1", [
      "#4661EE",
      "#EC5657",
      "#1BCDD1",
      "#4bbb69"
    ]);

  }




  ngOnInit(): void {
    this.databaseService.getData().subscribe(data => {
      this.cloneFeedbackList = this.convertData(data);
      this.getPieChart();
      this.getBarChart();
      this.getBarChartData(this.cloneFeedbackList);
    });


  }


  getBarChart() {
    let chart = new CanvasJS.Chart("chartBarContainer", {
      theme: "light2",
      colorSet: "customColorSet1",
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: "Accuracy rate of each clone type"
      },
      data: [{
        type: "column",
        toolTipContent: "<b>{label}</b>: {y}%",
        dataPoints: this.getBarChartData(this.cloneFeedbackList)
      }]
    });

    chart.render();
  }

  getPieChart() {
    let chart = new CanvasJS.Chart("chartPieContainer", {
      theme: "light2",
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: "Percentage of all agree/disagree/neither cases"
      },
      data: [{
        type: "pie",
        showInLegend: true,
        toolTipContent: "<b>{name}</b>: {y} (#percent%)",
        indexLabel: "{name} - #percent%",
        dataPoints: this.getPieChartData(this.cloneFeedbackList)
      }]
    });

    chart.render();
  }

  convertData(data) {
    let feedbackData: CloneFeedback[] = [];
    for (const i of data) {
      let fb = new CloneFeedback(i["rating"], i["cloneType"], i["textFeedback"]);
      fb.id = i["id"];
      feedbackData.push(fb);

      // let row = {cloneType: fb.cloneType, rating: fb.rating, textFeedback: fb.textFeedback, id: fb.id };
    }
    console.log(feedbackData);
    return feedbackData;
  }

  getPieChartData(data: CloneFeedback[]) {
    console.log(data);
    let pieData = [0, 0, 0];
    for (const i of data) {
      if (i.rating == 4 || i.rating == 5) { //agree = 4,5
        pieData[0] += 1;
      } else if (i.rating == 3) { //neither agree nor disagree = 3
        pieData[1] += 1;
      } else if (i.rating == 1 || i.rating == 2) {
        pieData[2] += 1; //disagree = 1,2
      }
    }

    let pieChart = [{
      name: "Agree",
      y: pieData[0]
    },
      {
        name: "Neither",
        y: pieData[1]
      },
      {
        name: "Disagree",
        y: pieData[2]
      }];

    console.log(JSON.parse(JSON.stringify(pieChart)));
    return pieChart;

  }

  getBarChartData(data: CloneFeedback[]) {
    let accuracyRates = [0, 0, 0, 0];
    let totalCloneCounts = [0, 0, 0, 0];
    for (const i of data) {


      if (i.rating >= 4) {
        accuracyRates[i.cloneType - 1] += 1;
      }
      totalCloneCounts[i.cloneType - 1] += 1;
    }

    let percentages = [0, 0, 0, 0];
    for (let x = 0; x < 4; x++) {
      if (accuracyRates[x] != 0) {
        percentages[x] = Math.round((accuracyRates[x] / totalCloneCounts[x] * 100) * 100) / 100;
      }
    }

    let barChart = [{
      label: "Type 1",
      y: percentages[0]
    },
      {
        label: "Type 2",
        y: percentages[1]
      },
      {
        label: "Type 3",
        y: percentages[2]
      }, {
        label: "Type 4",
        y: percentages[3]
      }];

    return barChart;
  }


}
