import {CodeReference} from "./CodeReference";
import {CodeInput} from "./CodeInput";
import {InputType} from "./CodeReference";

export class Snippet implements CodeReference, CodeInput{
  contents: string;
  ASTStructure: any;
  type: InputType;
  fileName: string;

  constructor(fileName?: string, fileContents?: string) {
    this.type = InputType.SNIPPET;
    this.fileName=fileName;
    this.contents=fileContents;
  }


  /**
   * Generates AST representation of the Java file contents
   * TODO - figure out how to do this.. maybe use a service?
   * @param contents
   */
  loadAST(contents): any{
    //TODO
  }





}
