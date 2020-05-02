import {CloneFeedback} from "./CloneFeedback";

export class CloneData {
  cloneType: number;
  referenceLocation: [number, number];
  inputLocation: [number, number];
  feedback: CloneFeedback;
  referenceFileName: string;


  constructor(type: number, referenceLocation: [number, number], inputLocation: [number, number],referenceFileName?: string) {
    this.cloneType = type;
    this.referenceLocation = referenceLocation;
    this.inputLocation = inputLocation;
    this.referenceFileName = referenceFileName;
  }

  toString(): String {
    return "type: " + this.cloneType + ",\nref location: " + this.referenceLocation
      + ",\nreference file name: " + this.referenceFileName + ",\ninput location: " + this.inputLocation + ",\nfeedback: " + this.feedback;
  }

}
