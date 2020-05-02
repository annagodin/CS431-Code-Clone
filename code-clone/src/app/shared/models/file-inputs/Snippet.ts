import {CodeReference} from "./CodeReference";
import {CodeInput} from "./CodeInput";
import {InputType} from "./CodeReference";

export class Snippet implements CodeReference, CodeInput{
  contents: string;
  type: InputType;
  fileName: string;

  constructor(fileName?: string, fileContents?: string) {
    this.type = InputType.SNIPPET;
    this.fileName=fileName;
    this.contents=fileContents;
  }




}
