import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from "./app.component";
import {SelectInputModeComponent} from "./components/select-input-mode/select-input-mode.component";
import {UploadInputsComponent} from "./components/upload-inputs/upload-inputs.component";


const routes: Routes = [

  { path: 'select-input-mode', component: SelectInputModeComponent },
  { path: 'upload-inputs', component: UploadInputsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
