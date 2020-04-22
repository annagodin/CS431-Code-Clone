import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CodeReference, InputType} from "../../../shared/models/file-inputs/CodeReference";
import {CodeInput} from "../../../shared/models/file-inputs/CodeInput";
import {Snippet} from "../../../shared/models/file-inputs/Snippet";
import {CloneResults} from "../../../shared/models/CloneResults";
import {FileSystemDirectoryEntry, FileSystemFileEntry, NgxFileDropEntry} from 'ngx-file-drop';
import {Project} from "../../../shared/models/file-inputs/Project";

export interface FileData {
  fileName: string;
  fileContents: string;
}

@Component({
  selector: 'app-upload-inputs',
  templateUrl: './upload-inputs.component.html',
  styleUrls: ['./upload-inputs.component.css']
})


export class UploadInputsComponent implements OnInit {
  position: any = "after";

  displayedColumns: string[] = ['fileName'];

  codeInput: CodeInput;
  codeReference: CodeReference;
  cloneResults: CloneResults;

  @Output() cloneResultsEmitter = new EventEmitter<CloneResults>();
  @Input() refInputType: InputType;


  referenceEditorOptions = {theme: 'vs-dark', language: 'java'};
  inputEditorOptions = {theme: 'vs-dark', language: 'java'};

  placeholderCode = "//the is a placeholder for code inputs\npublic class HelloWorld {\n" +
    "    public static void main(String[] args) {\n" +
    "        System.out.println(\"Hello, World\");\n" +
    "    }\n" +
    "}";


  files: NgxFileDropEntry[] = [];
  fileStrings: FileData[] = [];
  filesUploaded=false;

  constructor() {
    this.codeInput = new Snippet(null, this.placeholderCode);
    this.codeReference = new Snippet(null, this.placeholderCode);
  }

  ngOnInit(): void {
  }

  get inputType() {
    return InputType;
  }

  goToResults() {


    if(this.refInputType==InputType.PROJECT){
      this.codeReference = new Project(this.fileStrings);
    }

    this.cloneResults = new CloneResults(this.codeInput, this.codeReference);


    this.cloneResultsEmitter.emit(this.cloneResults);


  }


  public dropped(files: NgxFileDropEntry[]) {
    this.files = files;
    for (const droppedFile of files) {

      // Is it a file?
      if (droppedFile.fileEntry.isFile) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file: File) => {

          // Here you can access the real file
          console.log(droppedFile.relativePath, file);

          if (droppedFile.relativePath.endsWith('.java')) {
            this.uploadDocument(droppedFile.fileEntry.name, file);
            // console.log("FILE STRING HERE\n" + fileString);
          }

        });
      } else {
        // It was a directory (empty directories are added, otherwise only files)
        const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;
        console.log(droppedFile.relativePath, fileEntry);
      }
    }
    this.filesUploaded=true;
  }

  uploadDocument(fileName: string, file) {
    let fileString: any = "";

    let fileReader = new FileReader();
    fileReader.onloadend = (e) => {
      // Entire file
      console.log(fileReader.result);
      fileString = fileReader.result;

      let fileStuff = {fileName: fileName.toString(), fileContents: fileString.toString()};
      // let fileStuff: [string, string] = [fileName.toString(), fileString.toString()];
      this.fileStrings.push(fileStuff);
      console.log("printing file stuffs:\n" + fileStuff.fileName + "\n" + fileStuff.fileContents);

    };

    fileReader.readAsText(file);


  }


  public printFileList() {
    for (const file of this.fileStrings) {
      console.log(file);
      console.log("File Name:" + file.fileName);
      console.log("File Contents\n" + file.fileContents);
    }
  }

  public fileOver(event) {
    console.log(event);
  }

  public fileLeave(event) {
    console.log(event);
  }


}
