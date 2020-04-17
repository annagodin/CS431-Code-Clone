import {CloneFeedback} from "./CloneFeedback";

export class CloneData{
   cloneType: number;
   referenceLocation: [number,number];
   inputLocation: [number,number];
   methodName: string;
   feedback: CloneFeedback;


  constructor(type: number, referenceLocation: [number, number], inputLocation: [number, number], methodName: string) {
    this.cloneType = type;
    this.referenceLocation = referenceLocation;
    this.inputLocation = inputLocation;
    this.methodName = methodName;
  }

  toString(): String{
    return "type: " + this.cloneType + ",\nref location: " + this.referenceLocation
    + ",\ninput location: " + this.inputLocation + ",\nmethod name: " + this.methodName
    + ",\nfeedback: " + this.feedback;
  }

}
