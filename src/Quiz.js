'use strict';

const wrongChoiceGenerator = require('./wrongChoiceGenerator');
class Quiz {
  constructor({ questions, testData, Question }) {
    this.testData = testData;
    this.questions = [ ...Array(questions) ];
    this.score = 0;
    this.Question = Question;
    this.alreadyUsedChoices = [];
  }

  init() {
    const data = this.testData.random(this.questions.length);
    const allData = this.testData.fetch().elements;
    let wrongChoices = [];

    this.questions = data.map((el, index) => {
      wrongChoices = wrongChoiceGenerator(el, allData, this.alreadyUsedChoices);
      this.alreadyUsedChoices = [ ...this.alreadyUsedChoices, ...wrongChoices ];

      // TODO:
      //   for some reason calling .reverse() here causes tests to pass.
      //   we need more tests that update already Used options
      //   maybe we need a method to encapsulate updating this value.
      if (index === 2) {
        console.log('==============', this.alreadyUsedChoices.reverse());
      }
      return new this.Question({
        correctChoice: el,
        wrongChoices,
        idProp: 'name',
      });
    });
  }  
}

module.exports = Quiz;
