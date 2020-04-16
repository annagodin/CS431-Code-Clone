import {CodeReference} from "./CodeReference";
import {CodeInput} from "./CodeInput";
import {InputType} from "./CodeReference";

export class Snippet implements CodeReference, CodeInput{
  contents: String;
  ASTStructure: any;
  type: InputType;

  constructor(fileName?: String, fileContents?: String) {
    this.type = InputType.SNIPPET;
    if(fileName!=null){
      this.getFileContents(fileName);
    } else {
      this.contents = fileContents;
    }
    this.loadAST(this.contents);
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
    return this.contents;
  }

  getASTContents(): any {
    return this.ASTStructure;
  }



}
