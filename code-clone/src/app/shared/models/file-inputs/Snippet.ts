import {CodeReference} from "./CodeReference";
import {CodeInput} from "./CodeInput";
import {InputType} from "./CodeReference";

export class Snippet implements CodeReference, CodeInput{
  fileContents: String;
  ASTStructure: any;
  type: InputType;

  constructor(fileName: String) {
    this.type = InputType.SNIPPET;
    this.getFileContents(fileName);
    this.loadAST(this.fileContents);
  }

  /**
   * Extracts file contents and loads them into a String
   * @param fileName
   */
  getFileContents(fileName: String): String{
    //TODO
    return null;
  }

  /**
   * Generates AST representation of the Java file contents
   * TODO - figure out how to do this.. maybe use a service?
   * @param contents
   */
  loadAST(contents): any{
    //TODO
  }

  getContents(): String {
    return this.fileContents;
  }

  getASTContents(): any {
    return this.ASTStructure;
  }



}
