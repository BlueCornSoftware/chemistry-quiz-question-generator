'use strict';

class Quiz {
  constructor({ questions }) {
    this.questions = [ ...Array(questions) ];
  }
}

module.exports = Quiz;
