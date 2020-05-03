import { async, fakeAsync, ComponentFixture, TestBed, tick } from '@angular/core/testing';

import { CodeAnalysisComponent } from './code-analysis.component';
import {MatButtonToggleModule, MatButtonToggleGroup, MatButtonToggle} from "@angular/material/button-toggle";
import {MatButtonModule} from "@angular/material/button";

import { By} from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { group } from '@angular/animations';

describe('CodeAnalysisComponent', () => {
  let component: CodeAnalysisComponent;
  let fixture: ComponentFixture<CodeAnalysisComponent>;
  let groupDebugElement: DebugElement;
  let groupInstance: MatButtonToggleGroup;
  let buttonToggleInstances: MatButtonToggle[];
  let buttonToggleDebugElements: DebugElement[];
  let buttonToggleLabelElements: HTMLLabelElement[];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeAnalysisComponent ],
      imports: [
        MatButtonModule,
        MatButtonToggleModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    groupDebugElement = fixture.debugElement.query(By.directive(MatButtonToggleGroup));
    buttonToggleDebugElements = fixture.debugElement.queryAll(By.directive(MatButtonToggle));   
    groupInstance = groupDebugElement.injector.get<MatButtonToggleGroup>(MatButtonToggleGroup);
    buttonToggleInstances = buttonToggleDebugElements.map(debugElement => debugElement.componentInstance);
    //change button to mat-button-toggle
    buttonToggleLabelElements = fixture.debugElement.queryAll(By.css('button')).map(debugElement => debugElement.nativeElement);


  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should set individual button toggle names based on the group name', () => {
    expect(groupInstance.name).toBeTruthy();
    for( let buttonToggle of buttonToggleInstances){
      expect(buttonToggle.name).toBe(groupInstance.name);
    }
  });

  it('should disable click interactions when the group is disabled', () => {
    let testComponent = fixture.debugElement.componentInstance;
    testComponent.isGroupDisabled = true;
    fixture.detectChanges();

    expect(buttonToggleInstances[0].disabled).toBeFalsy();

    for ( let i = 1; i < 4; i++){
      expect(buttonToggleInstances[i].disabled).toBeTruthy();
    }
  });

  it('should emit a change event from button toggles', fakeAsync(() => {
    let changeSpy = jasmine.createSpy('button-toggle change listener');
      buttonToggleInstances[0].change.subscribe(changeSpy);

      buttonToggleLabelElements[0].click();
      fixture.detectChanges();
      tick();
      expect(changeSpy).toHaveBeenCalledTimes(1);

      buttonToggleLabelElements[0].click();
      fixture.detectChanges();
      tick();

      // Always emit change event when button toggle is clicked
      expect(changeSpy).toHaveBeenCalledTimes(2);
    
  }));

});
