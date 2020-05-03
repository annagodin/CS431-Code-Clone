import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { CodeReference, InputType } from "../../../shared/models/file-inputs/CodeReference";
import {CloneResults} from "../../../shared/models/CloneResults";

import { MatSnackBarModule } from '@angular/material/snack-bar';
import { UploadInputsComponent } from './upload-inputs.component';
import { CodeInput } from 'src/app/shared/models/file-inputs/CodeInput';
import { CloneData } from 'src/app/shared/models/CloneData';
import {Snippet} from "../../../shared/models/file-inputs/Snippet";
import { HttpClientModule } from '@angular/common/http';
import {FileSystemDirectoryEntry, FileSystemFileEntry, NgxFileDropEntry} from 'ngx-file-drop';
import { createInflate } from 'zlib';

describe('UploadInputsComponent', () => {
  let component: UploadInputsComponent;
  let fixture: ComponentFixture<UploadInputsComponent>;
  let de: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[ MatSnackBarModule,
                HttpClientModule
       ],
      declarations: [ UploadInputsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadInputsComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges();

    var placeholderCode = "//the is a placeholder for code inputs\npublic class HelloWorld {\n" +
    "    public static void main(String[] args) {\n" +
    "        System.out.println(\"Hello, World\");\n" +
    "    }\n" +
    "}";
    var codeInput: CodeInput = new Snippet(null, placeholderCode);
    var codeReference: CodeReference = new Snippet(null, placeholderCode);

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should have code input and reference for Snippet', ()=> {
    component.refInputType=InputType.SNIPPET;
    const expectedCodeInput: CodeInput = { contents: "Snippet Contents Here"};
    component.codeInput = expectedCodeInput;
    expect(component.codeInput).toEqual(expectedCodeInput);

    const expectedCodeReference: CodeReference = {type: InputType.SNIPPET, contents: "Snippet Contents Here"};
    component.codeReference = expectedCodeReference;
    expect(component.codeReference).toEqual(expectedCodeReference);
  });

  
  it('should have code input and reference for project', ()=> {
    component.refInputType=InputType.PROJECT;
    const expectedCodeInput: CodeInput = { contents: "Project Contents Here"};
    component.codeInput = expectedCodeInput;
    expect(component.codeInput).toEqual(expectedCodeInput);

    const expectedCodeReference: CodeReference = {type: InputType.PROJECT, contents: ["Project Contents Here", "Second File components"]};
    component.codeReference = expectedCodeReference;
    expect(component.codeReference).toEqual(expectedCodeReference);
  });

  it('should have an `button` tag of `Get Results`', () => {
    component.refInputType=InputType.SNIPPET;
    expect(de.query(By.css('button')).nativeElement.innerText).toBe('Get Results');
  });

  it('should click button `Get Results`', async(() => {
    component.refInputType=InputType.SNIPPET;
    spyOn(component, 'goToResults');
  
    let button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();
  
    fixture.whenStable().then(() => {
      expect(component.goToResults).toHaveBeenCalled();
    });
  }));

  it('should select the FILE by dropfile selector', () =>{
    let file = createFile()
    const $event = new DropFileEventMock()
    component.mockDropFile($event.getFiles())
    expect(component.mockFile).toEqual(file)
  })
  
});

class DropFileEventMock{
  files: NgxFileDropEntry[] = new Array<NgxFileDropEntry>()
  
  constructor(){
    let drop = this.createDrop()
    this.files.push(drop)
  }

  private createDrop(): NgxFileDropEntry{
    let file: FileSystemFileEntry = {
      isFile: true,
      isDirectory: false,
      name: null,
      file: () => createFile()
    }
    return new NgxFileDropEntry('', file)
  }
  public getFiles(){
    return this.files
  }
}

function createFile(name: string = 'test.java', type: string = 'application/CS431'): File {
  var blob = new Blob([''], {type: type})
  blob['lastModifiedDate'] = null
  blob['name'] = name
  return <File>blob
}


