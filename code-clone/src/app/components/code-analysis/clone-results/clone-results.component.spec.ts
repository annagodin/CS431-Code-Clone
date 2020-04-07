import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CloneResultsComponent } from './clone-results.component';

describe('CloneResultsComponent', () => {
  let component: CloneResultsComponent;
  let fixture: ComponentFixture<CloneResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CloneResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CloneResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
