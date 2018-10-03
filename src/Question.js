'use strict';

class Question {
  constructor({ correctChoice, wrongChoices, idProp, choicesHaveBeenBuilt }) {
    this.correctChoice = correctChoice
    this.wrongChoices = wrongChoices
    this.currentPointValue = 100
    this.idProp = idProp
    this.choicesHaveBeenBuilt = choicesHaveBeenBuilt
  }

  removeWrongChoice(id) {
    this.wrongChoices = this.wrongChoices.filter(wc => wc[this.idProp] !== id)
  }
}

module.exports = Question
