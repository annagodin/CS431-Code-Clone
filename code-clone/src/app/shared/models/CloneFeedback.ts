import { map } from 'rxjs/operators';


export class CloneFeedback{
   rating: number;
   cloneType: number;
   textFeedback?: string;
   id: string;

  constructor(rating?: number, cloneType?: number, text?: string) {
    this.textFeedback = text;
    this.rating = rating;
    this.cloneType=cloneType;
  }

  toString():String{
    return "rating: " + this.rating + ", clone type: " + this.cloneType + ", text: " + this.textFeedback;
  }

}
