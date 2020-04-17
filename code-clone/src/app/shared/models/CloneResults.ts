import {CloneData} from "./CloneData";
import {CodeReference} from "./file-inputs/CodeReference";
import {CodeInput} from "./file-inputs/CodeInput";
import {CloneFeedback} from "./CloneFeedback";

export class CloneResults{
  results: CloneData[];
  referenceCode: CodeReference;
  inputCode: CodeInput;


  constructor(inputCode?: CodeInput, referenceCode?: CodeReference) {
    this.inputCode = inputCode;
    this.referenceCode = referenceCode;
    this.results = [];


    //for testing
    let randNumClones = Math.floor(Math.random() * Math.floor(5));
    for (let i=0; i<randNumClones; i++){
      this.addRandomResult();
    }

  }

  addRandomResult(){
    let randCloneType = Math.floor(Math.random() * Math.floor(4))+1;
    let c = new CloneData(randCloneType,[3,5],[3,5],"main");
    c.feedback= new CloneFeedback(0,randCloneType,null);
    this.results.push(c);
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
