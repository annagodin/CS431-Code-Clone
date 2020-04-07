import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeAnalysisComponent } from './code-analysis.component';

describe('CodeAnalysisComponent', () => {
  let component: CodeAnalysisComponent;
  let fixture: ComponentFixture<CodeAnalysisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeAnalysisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
