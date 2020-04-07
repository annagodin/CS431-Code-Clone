import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from "./app.component";
import {SelectInputModeComponent} from "./components/code-analysis/select-input-mode/select-input-mode.component";
import {UploadInputsComponent} from "./components/code-analysis/upload-inputs/upload-inputs.component";
import {CloneResultsComponent} from "./components/code-analysis/clone-results/clone-results.component";
import {InputFeedbackDataComponent} from "./components/code-analysis/input-feedback-data/input-feedback-data.component";
import {ViewFeedbackDataComponent} from "./components/view-feedback-data/view-feedback-data.component";
import {ViewStatisticsComponent} from "./components/view-statistics/view-statistics.component";
import {HomeComponent} from "./components/home/home.component";
import {CodeAnalysisComponent} from "./components/code-analysis/code-analysis.component";


const routes: Routes = [

  { path: 'select-input-mode', component: SelectInputModeComponent },
  { path: 'upload-inputs', component: UploadInputsComponent },
  { path: 'clone-results', component:CloneResultsComponent},
  { path: 'input-feedback-data', component: InputFeedbackDataComponent},
  { path: 'view-feedback-data', component: ViewFeedbackDataComponent},
   {path: 'view-statistics', component: ViewStatisticsComponent},
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  {path: 'home', component: HomeComponent},
  {path: 'code-analysis',component: CodeAnalysisComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
