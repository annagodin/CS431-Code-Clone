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
    // let dt= new Date();
    // let ts = dt.getMonth() + "" + dt.getDay() + "" +dt.getFullYear() +"" + dt.getHours()+"" +dt.getMinutes()+"" +dt.getSeconds()+"" +dt.getMilliseconds()
    // this.id=ts;
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
