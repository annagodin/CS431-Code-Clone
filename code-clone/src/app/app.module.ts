import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AngularFireModule} from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {environment} from "../environments/environment";
import {SelectInputModeComponent} from "./components/code-analysis/select-input-mode/select-input-mode.component";
import {UploadInputsComponent} from "./components/code-analysis/upload-inputs/upload-inputs.component";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CloneResultsComponent } from './components/code-analysis/clone-results/clone-results.component';
import { ViewFeedbackDataComponent } from './components/view-feedback-data/view-feedback-data.component';
import { InputFeedbackDataComponent } from './components/code-analysis/input-feedback-data/input-feedback-data.component';
import { ViewStatisticsComponent } from './components/view-statistics/view-statistics.component';
import { HomeComponent } from './components/home/home.component';
import { CodeAnalysisComponent } from './components/code-analysis/code-analysis.component';
import {TabsModule, TooltipModule} from "ngx-bootstrap";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatIconModule} from "@angular/material/icon";
import {ScrollingModule} from "@angular/cdk/scrolling";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatTableModule} from "@angular/material/table";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {PieChartModule} from "@swimlane/ngx-charts";
import {MonacoEditorModule} from "ngx-monaco-editor";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatRadioModule} from "@angular/material/radio";
// import { WavesModule, TableModule } from 'angular-bootstrap-md';


@NgModule({
  declarations: [
    AppComponent,
    SelectInputModeComponent,
    UploadInputsComponent,
    CloneResultsComponent,
    ViewFeedbackDataComponent,
    InputFeedbackDataComponent,
    ViewStatisticsComponent,
    HomeComponent,
    CodeAnalysisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    NgbModule,
    BsDropdownModule.forRoot(),
    BrowserAnimationsModule,
    CarouselModule.forRoot(),
    TabsModule.forRoot(),
    MatButtonToggleModule,
    MatIconModule,
    ScrollingModule,
    MatPaginatorModule,
    MatTableModule,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    PieChartModule,
    MonacoEditorModule.forRoot(),
    FormsModule,
    TooltipModule,
    MatTooltipModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatRadioModule,
    // use forRoot() in main app module only.
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
