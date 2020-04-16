import {CloneFeedback} from "./CloneFeedback";

export class CloneData{
   type: Number;
   referenceLocation: [Number,Number];
   inputLocation: [Number,Number];
   methodName: String;
   feedback: CloneFeedback;


  constructor(type: Number, referenceLocation: [Number, Number], inputLocation: [Number, Number], methodName: String) {
    this.type = type;
    this.referenceLocation = referenceLocation;
    this.inputLocation = inputLocation;
    this.methodName = methodName;
  }

  setFeedback(cloneFeedback: CloneFeedback) {
    this.feedback = cloneFeedback;
  }

  getFeedback(): CloneFeedback {
    return this.feedback;
  }

  getType(): Number {
    return this.type;
  }

  getReferenceLocation(): [Number, Number] {
    return this.referenceLocation;
  }

  getInputLocation(): [Number, Number] {
    return this.inputLocation;
  }

  getMethodName(): String {
    return this.methodName;
  }
}
