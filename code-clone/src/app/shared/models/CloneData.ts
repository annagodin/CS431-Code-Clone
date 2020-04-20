import {CloneFeedback} from "./CloneFeedback";

export class CloneData {
  cloneType: number;
  referenceLocation: [number, number];
  inputLocation: [number, number];
  methodName: string;
  feedback: CloneFeedback;
  referenceFileName: string;


  constructor(type: number, referenceLocation: [number, number], inputLocation: [number, number], methodName: string, referenceFileName?: string) {
    this.cloneType = type;
    this.referenceLocation = referenceLocation;
    this.inputLocation = inputLocation;
    this.methodName = methodName;
    this.referenceFileName = referenceFileName;
  }

  toString(): String {
    return "type: " + this.cloneType + ",\nref location: " + this.referenceLocation
      + ",\nreference file name: " + this.referenceFileName + ",\ninput location: " + this.inputLocation + ",\nmethod name: " + this.methodName
      + ",\nfeedback: " + this.feedback;
  }

}
