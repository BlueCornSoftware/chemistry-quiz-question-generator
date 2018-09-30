'use strict';

const testData = require('./testData');
const wrongChoiceGenerator = require('./wrongChoiceGenerator');
const Quiz = require('./Quiz');
const Question = require('./Question');

describe('testData', () => {
  it('should load test data', () => {
    const data = testData.fetch();
    expect(data.elements[0].name).toBe('Hydrogen');
  });

  describe('the .random method', () => {
    it('should give x unique elements', () => {
      const elements = testData.random(2);

      expect(elements[0].name).not.toBe(elements[1].name);
    });
  });
});

describe('A Quiz', () => {
  let quiz = new Quiz({ questions: 10, testData, Question });
  it('has a number of questions', () => {
    expect(quiz.questions.length).toBe(10);
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
    it('stores questions', () => {
      expect(quiz.questions[0].wrongChoices.length).toBe(3);
    });
  });
  // it('should keep track of already used choices', () => {
  //   const q = new Quiz({ questions: 10, testData, Question });
  //   expect(q.)
  // });

});

describe('wrongChoiceGenerator', () => {
  it(`takes an element and a reference to all other elements
  and returns three other element options`, () => {
    const allData = testData.fetch();
    const hydrogen = allData.elements[0];
    const alreadyUsed = [
      allData.elements[40],
      allData.elements[41],
      allData.elements[42],
    ];
    const options = wrongChoiceGenerator(
      hydrogen,
      allData.elements,
      alreadyUsed
    );
    expect(options.length).toBe(3);
    expect(options[0].name).not.toBe(hydrogen.name);
    expect(options[1].name).not.toBe(hydrogen.name);
    expect(options[2].name).not.toBe(hydrogen.name);
  });
});


describe('A Question', () => {
  const allData = testData.fetch();
  const hydrogen = allData.elements[0];
  const correctChoice = hydrogen;
  const alreadyUsedOptions = [];
  const wrongChoices = wrongChoiceGenerator(correctChoice, allData.elements, alreadyUsedOptions);
  const question = new Question({ correctChoice, wrongChoices, idProp: 'name' });
  it('should have one correct choice', () => {
    expect(question.correctChoice.name.toLowerCase()).toBe('hydrogen');
  });
  it('should have three wrong choices', () => {
    expect(question.wrongChoices.length).toBe(3);
  });
  it('should have an initial currentPointValue of 100', () => {
    expect(question.currentPointValue).toBe(100);
  });
  describe('.removeWrongChoice method', () => {
    it('should remove a wrong choice by a pre-specified unique ID property', () => {
      question.removeWrongChoice(question.wrongChoices[0].name);
      expect(question.wrongChoices.length).toBe(2);
    });
  });

});
