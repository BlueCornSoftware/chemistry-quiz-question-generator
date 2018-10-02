'use strict';

// const wrongChoiceGenerator = require('./wrongChoiceGenerator');
const arrayShuffle = require('./lib/arrayShuffle');

class Quiz {

  constructor({ questions, testData, Question }) {
    if (questions > testData.fetch().elements.length) {
      throw new Error('Test cannot be longer than the data it uses');
    }
    this.testData = testData;
    this.questions = [ ...Array(questions) ];
    this.score = 0;
    this.Question = Question;
  }

  init() {
    // initializes question data
    const data = this.testData.random(this.questions.length);

    this.questions = data.map(el => {
      return new this.Question({
        correctChoice: el,
        wrongChoices: [null, null, null],
        idProp: 'name',
      });
    });

    const { elements } = this.testData.fetch();

    const questionNames = this.questions.map(({ correctChoice: { name } }) => name);

    this.wrongChoicePool = arrayShuffle(elements.filter(el => questionNames.indexOf(el.name) === -1));
  }


}

module.exports = Quiz;
