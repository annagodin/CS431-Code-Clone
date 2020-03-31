import {CloneData} from "./CloneData";
import {CodeReference} from "./file-inputs/CodeReference";
import {CodeInput} from "./file-inputs/CodeInput";

export class CloneResults{
  results: CloneData[];
  referenceCode: CodeReference;
  inputCode: CodeInput;


  constructor(inputCode: CodeInput, referenceCode: CodeReference) {
    this.inputCode=inputCode;
    this.referenceCode = referenceCode;
  }

  getResult(index):CloneData{
    return this.results[index];
  }

  addResult(cloneData: CloneData){
    this.results.push(cloneData);
  }

  removeResultByObject(cloneData: CloneData){
    this.results.forEach( (item, index) => {
      if(item === cloneData) this.results.splice(index,1);
    });
  }

  removeResultByIndex(index){
    this.results.splice(index,1);
  }

}
