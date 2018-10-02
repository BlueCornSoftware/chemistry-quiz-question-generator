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
  describe('Number of Questions per quiz', () => {
    it('cannot exceed the number of available elements', () => {
      expect(
        () => new Quiz({ questions: 200, testData, Question })
      ).toThrow();
    });
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
    it('should store 3 null wrong choices for each question', () => {
      quiz.questions.forEach(question => {
        expect(question.wrongChoices.length).toBe(3);
        expect(question.wrongChoices[0]).toBeNull();
      });
    });
    it(
      `should store the difference of total elements
      and already used correct choices in the .wrongChoicePool
      `, () => {
        const { elements } = testData.fetch();
        const elementCount = elements.length;
        const wrongChoicePoolCount = quiz.wrongChoicePool.length;
        expect(wrongChoicePoolCount).toBe(elementCount - questions);
      });
  });
});