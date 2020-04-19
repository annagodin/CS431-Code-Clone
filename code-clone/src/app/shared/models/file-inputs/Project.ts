import {CodeReference, InputType} from "./CodeReference";
import {Snippet} from "./Snippet";
import {FileData} from "../../../components/code-analysis/upload-inputs/upload-inputs.component";

export class Project implements CodeReference{
  contents: Snippet[];
  type: InputType;

  constructor(fileStrings?: FileData[]) {
    this.type = InputType.PROJECT;
    this.contents=[];
    this.createFiles(fileStrings);
  }

  /**
   * Load FileData into a Snippet
   * @param fileStrings
   */
  createFiles(fileStrings: FileData[]){
    for(const file of fileStrings){
      let snippet = new Snippet(file.fileName,file.fileContents);
      this.contents.push(snippet);
    }
  }






}
