'use strict';

const Quiz = require('./Quiz');
const testData = require('./testData');
const Question = require('./Question');

describe('A Quiz', () => {
  const questions = 50;
  let quiz = new Quiz({ questions, testData, Question });
  it('has a number of questions', () => {
    expect(quiz.questions.length).toBe(questions);
  });
  it('has an initial score of 0', () => {
    expect(quiz.score).toBe(0);
  });
  it('has a reference to the testData object', () => {
    expect(typeof quiz.testData.random).toBe('function');
  });
  it('has an init method', () => {
    expect(typeof quiz.init).toBe('function');
  });
  describe('the .init method', () => {
    quiz.init();
    it('should store 3 wrong choices for each question', () => {
      quiz.questions.forEach(question => {
        expect(question.wrongChoices.length).toBe(3);
      });
    });
  });
});