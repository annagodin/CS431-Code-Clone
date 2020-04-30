import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { By} from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let de: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should have create HomeComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should have an `a` tag of `Get Started`', () => {
    expect(de.query(By.css('a')).nativeElement.innerText).toBe('Get Started');
  });

  it('should have an `h1` tag of `Welcome to Code Clone Detector!`', () => {
    expect(de.query(By.css('h1')).nativeElement.innerText).toBe('Welcome to Code Clone Detector!');
  });

  it('should have an `p` tag of `This is a tool that helps you determine if two pieces of code are clones of each other.`', () => {
    expect(de.query(By.css('p')).nativeElement.innerText).toBe('This is a tool that helps you determine if two pieces of code are clones of each other.');
  });

});
