'use strict';

const wrongChoiceGenerator = require('./wrongChoiceGenerator');
class Quiz {
  constructor({ questions, testData, Question }) {
    this.testData = testData;
    this.questions = [ ...Array(questions) ];
    this.score = 0;
    this.Question = Question;
  }

  init() {
    const data = this.testData.random(this.questions.length);
    const allData = this.testData.fetch().elements;
    let alreadyUsedOptions = [];
    let wrongChoices = [];

    this.questions = data.map(el => {
      wrongChoices = wrongChoiceGenerator(el, allData, alreadyUsedOptions);
      alreadyUsedOptions = [ ...alreadyUsedOptions, wrongChoices ];

      return new this.Question({
        correctChoice: el,
        wrongChoices,
        idProp: 'name',
      });
    });


  }
}

module.exports = Quiz;
