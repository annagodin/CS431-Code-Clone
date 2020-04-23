import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFeedbackDataComponent } from './view-feedback-data.component';
import {AngularFireModule} from "@angular/fire";
import {environment} from "../../../environments/environment";
import {AngularFireDatabaseModule} from "@angular/fire/database";

describe('ViewFeedbackDataComponent', () => {
  let component: ViewFeedbackDataComponent;
  let fixture: ComponentFixture<ViewFeedbackDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewFeedbackDataComponent ],
      imports: [
        AngularFireModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireDatabaseModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewFeedbackDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
