import {CloneData} from "./CloneData";
import {CodeReference, InputType} from "./file-inputs/CodeReference";
import {CodeInput} from "./file-inputs/CodeInput";
import {CloneFeedback} from "./CloneFeedback";

export class CloneResults {
  results: CloneData[];
  referenceCode: CodeReference;
  inputCode: CodeInput;


  constructor(inputCode?: CodeInput, referenceCode?: CodeReference, results?: CloneData[]) {
    this.inputCode = inputCode;
    this.referenceCode = referenceCode;
    this.results = [];


    //for testing
    // let randNumClones = Math.floor(Math.random() * Math.floor(8));
    // for (let i = 0; i < randNumClones; i++) {
    //   this.addRandomResult();
    // }

  }

  addRandomResult() {
    let randCloneType = this.getRandomInt(1, 4);
    let c: CloneData;
    let numLinesInputCode: number;
    let numLinesReferenceCode: number;
    let randomFileName: string;
    let lengthInputCodeClone: number;

    if (this.inputCode.contents != null) {
      numLinesInputCode = this.inputCode.contents.split(/\r\n|\r|\n/).length;
      console.log("numLinesInputCode: " + numLinesInputCode + "\n\n\n\n");
    }

    let inputCodeLine_lowerBound = this.getRandomInt(1, numLinesInputCode-1);
    let inputCodeLine_upperBound = this.getRandomInt(inputCodeLine_lowerBound + 1, numLinesInputCode);
    let inputLocation: [number, number] = [inputCodeLine_lowerBound, inputCodeLine_upperBound];
    console.log("Random input code location: " + inputLocation);
    lengthInputCodeClone = inputCodeLine_upperBound-inputCodeLine_lowerBound;


    if (this.referenceCode.type == InputType.PROJECT) { //PROJECT, get random file, and get num lines in that file
      let numFiles = this.referenceCode.contents.length;
      let randFileIndex = Math.floor(Math.random() * Math.floor(numFiles));
      randomFileName = this.referenceCode.contents[randFileIndex].fileName;
      let randomFile = this.referenceCode.contents[randFileIndex].contents;

      console.log("file: " + randomFileName);
      numLinesReferenceCode = randomFile.split(/\r\n|\r|\n/).length;
      console.log("num lines in file: " + numLinesReferenceCode);
    } else { //SNIPPET, get num lines in the code snippet
      if (this.referenceCode.contents != null) {
        numLinesReferenceCode = this.referenceCode.contents.split(/\r\n|\r|\n/).length;
      }
    }

    //get random reference code location
    let referenceCodeLine_lowerBound = this.getRandomInt(1, numLinesReferenceCode-1);
    console.log("REFERENCE LOWER BOUND: " + referenceCodeLine_lowerBound);
    // let referenceCodeLine_upperBound = this.getRandomInt(referenceCodeLine_lowerBound + 1, numLinesReferenceCode-1);
    let referenceCodeLine_upperBound = referenceCodeLine_lowerBound + lengthInputCodeClone;
    console.log("REFERENCE UPPER BOUND: " + referenceCodeLine_upperBound);

    let referenceLocation: [number, number] = [referenceCodeLine_lowerBound, referenceCodeLine_upperBound];
    console.log("Random reference code location: " + referenceLocation);


    if (this.referenceCode.type == InputType.PROJECT) {
      c = new CloneData(randCloneType, referenceLocation, inputLocation, randomFileName);
    } else { //SNIPPET
      c = new CloneData(randCloneType, referenceLocation, inputLocation);
    }

    c.feedback = new CloneFeedback(undefined, randCloneType, null);
    this.results.push(c);

  }

  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
  }

  getResult(index): CloneData {
    return this.results[index];
  }

  addResult(cloneData: CloneData) {
    this.results.push(cloneData);
  }

  removeResultByObject(cloneData: CloneData) {
    this.results.forEach((item, index) => {
      if (item === cloneData) this.results.splice(index, 1);
    });
  }

  removeResultByIndex(index) {
    this.results.splice(index, 1);
  }

}
