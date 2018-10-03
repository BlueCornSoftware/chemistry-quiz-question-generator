'use strict';

import testData from './testData';
import wrongChoiceGenerator from './wrongChoiceGenerator';
import Question from './Question';

describe('A Question', () => {
  const { elements } = testData.fetch();
  const hydrogen = elements[0];
  const correctChoice = hydrogen;
  const alreadyUsedOptions = [];
  const wrongChoices = wrongChoiceGenerator(correctChoice, elements, alreadyUsedOptions, 3);
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