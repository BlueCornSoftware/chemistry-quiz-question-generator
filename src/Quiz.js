'use strict';

const arrayShuffle = require('./lib/arrayShuffle');

const guid = require('./lib/guid');

class Quiz {

  constructor({ questions, testData, Question, wrongChoicesPerQuestion = 3 }) {
    this.id = guid();
    const totalElementCount = testData.fetch().elements.length;
    if (questions > totalElementCount) {
      throw new Error('Test cannot be longer than the data it uses');
    }
    this.testData = testData;
    this.questions = [ ...Array(questions) ];
    this.score = 0;
    this.Question = Question;
    this.wrongChoicePool = [ ...Array(totalElementCount - questions) ];
    this.currentQuestionIndex = 0;
    this.intialized = false;
    this.wrongChoicesPerQuestion = wrongChoicesPerQuestion;
  }

  init() {
    // initializes question data
    if (this.intialized) return;
    const data = this.testData.random(this.questions.length);

    this.questions = data.map(el => {
      return new this.Question({
        correctChoice: el,
        wrongChoices: [ ...Array(this.wrongChoicesPerQuestion) ].map(() => null),
        idProp: 'name',
        choicesHaveBeenBuilt: false,
      });
    });

    const { elements } = this.testData.fetch();
    const questionNames = this.questions.map(({ correctChoice: { name } }) => name);

    this.wrongChoicePool = arrayShuffle(elements.filter(el => questionNames.indexOf(el.name) === -1));
    this.intialized = true;
  }

  loadNextQuestion() {
    this.currentQuestionIndex++
    this.currentQuestion = this.questions[this.currentQuestionIndex];
    if (!this.currentQuestion.choicesHaveBeenBuilt && this.calculateSkipsLeft()) {
      this.currentQuestion.wrongChoices = this.currentQuestion.wrongChoices.map(() => this.wrongChoicePool.pop());
    }
  }

  answerQuestion(answerIdProp) {

  }

  calculateSkipsLeft() {
    const wrongChoiceCount = this.wrongChoicePool.length
    return Math.floor(wrongChoiceCount / this.wrongChoicesPerQuestion)
  }

  start() {
    // loadNextQuestion()
  }

  skipQuestion() {
    // enqueuCurrentQuestion()
    // loadNextQuestion()
    //
  }

}

module.exports = Quiz;
