'use strict';

class Question {
  constructor({ correctChoice, wrongChoices, idProp }) {
    this.correctChoice = correctChoice;
    this.wrongChoices = wrongChoices;
    this.currentPointValue = 100;
    this.idProp = idProp;
  }

  removeWrongChoice(id) {
    this.wrongChoices = this.wrongChoices.filter(wc => wc[this.idProp] !== id);
  }
}

module.exports = Question;
