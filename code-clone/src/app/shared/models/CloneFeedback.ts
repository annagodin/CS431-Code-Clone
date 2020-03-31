class CloneFeedback{
  private rank: Number;
  private textFeedback: String;

  constructor(rank: Number) {
    this.rank = rank;
  }


  getRank(): Number {
    return this.rank;
  }

  getTextFeedback(): String {
    return this.textFeedback;
  }

  setTextFeedback(value: String) {
    this.textFeedback = value;
  }

}
