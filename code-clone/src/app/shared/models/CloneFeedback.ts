import { map } from 'rxjs/operators';


export class CloneFeedback{
  private rating: Number;
  private cloneType: Number;
  private textFeedback?: String;
  id: string;

  constructor(rating: Number, cloneType: Number, text: String) {
    this.textFeedback = text;
    this.rating = rating;
    this.cloneType=cloneType;
  }

  getCloneType(): Number{
    return this.cloneType;
  }

  getRating(): Number {
    return this.rating;
  }

  getTextFeedback(): String {
    return this.textFeedback;
  }

  setTextFeedback(value: String) {
    this.textFeedback = value;
  }

}
