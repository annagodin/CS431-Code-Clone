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
import {HighlightModule, HIGHLIGHT_OPTIONS, HighlightOptions} from "ngx-highlightjs";
import {NgxFileDropModule} from "ngx-file-drop";
import {HttpClientModule} from "@angular/common/http";
import {MatTabsModule} from "@angular/material/tabs";
import {MatChipsModule} from "@angular/material/chips";
import {MatCardModule} from "@angular/material/card";
import {MatRippleModule} from "@angular/material/core";
import  {MatSnackBarModule} from '@angular/material/snack-bar';
// import 'highlightjs-line-numbers.js';
// import hljs from 'highlight.js';

export function getHighlightLanguages() {
  return {
    typescript: () => import('highlight.js/lib/languages/typescript'),
    css: () => import('highlight.js/lib/languages/css'),
    xml: () => import('highlight.js/lib/languages/xml'),
    java: () => import('highlight.js/lib/languages/java')
  };
}

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
    HighlightModule,
    NgxFileDropModule,
    HttpClientModule,
    MatTabsModule,
    MatChipsModule,
    MatCardModule,
    MatRippleModule,
    MatSnackBarModule,
    // use forRoot() in main app module only.
  ],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue:  <HighlightOptions>{
        languages: getHighlightLanguages(),
        lineNumbers: true
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
