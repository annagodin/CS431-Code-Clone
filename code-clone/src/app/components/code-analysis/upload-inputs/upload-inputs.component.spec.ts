import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By} from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MatSnackBarModule } from '@angular/material/snack-bar';
import { UploadInputsComponent } from './upload-inputs.component';

describe('UploadInputsComponent', () => {
  let component: UploadInputsComponent;
  let fixture: ComponentFixture<UploadInputsComponent>;
  let de: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[ MatSnackBarModule ],
      declarations: [ UploadInputsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadInputsComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
/*
  it(`should have value SNIPPET`, async(() => {
    fixture = TestBed.createComponent(UploadInputsComponent);

    const expected_value = InputType.SNIPPET;
    component.referenceCodeType=expected_value;
    expect(component.referenceCodeType).toEqual(expected_value);
  }));
*/

  it('should have an `button` tag of `Get Results`', () => {
    expect(de.query(By.css('button')).nativeElement.innerText).toBe('Get Results');
  });

  it('should click button `Get Results`', async(() => {
    spyOn(component, 'goToResults');
  
    let button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();
  
    fixture.whenStable().then(() => {
      expect(component.goToResults).toHaveBeenCalled();
    });
  }));
});
