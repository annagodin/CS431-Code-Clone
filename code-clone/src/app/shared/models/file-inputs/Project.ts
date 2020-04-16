import {CodeReference, InputType} from "./CodeReference";
import {Snippet} from "./Snippet";

export class Project implements CodeReference{
  contents: Snippet[];
  type: InputType;

  constructor(folderName: String) {
    this.type = InputType.PROJECT;
    this.createFiles(folderName);
  }

  /**
   * Get the folder name of a project and search/parse it to create an
   * list of java file contents as Snippets
   *
   * Should create Snippets with .java filenames found in the project structure
   *
   * @param fileName
   * Reference? - https://www.lucidchart.com/techblog/2018/01/03/folder-upload-in-an-angular-app/
   */
  createFiles(folderName: String): Snippet[] {
    //TODO
    return null;
  }






}
