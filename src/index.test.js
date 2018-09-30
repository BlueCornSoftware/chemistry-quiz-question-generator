'use strict';

const testData = require('./testData');
const wrongChoiceGenerator = require('./wrongChoiceGenerator');
const Quiz = require('./Quiz');

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
  it('has a number of questions', () => {
    const quiz = new Quiz({ questions: 10 });
    expect(quiz.questions.length).toBe(10);
  });
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

// class Question {
//   constructor(body, correctOption, ) {

//   }
// }

// describe('A Question', () => {
//   it('should have one correct option', () => {});
//   it('should have four unique options', () => {});
//   it('should have a body', () => {});
//   describe('answering correctly', () => {
//     it('should give 100 points if answered correctly on first guess', () => {});
//     it('should give 75 points if answered correctly on second guess', () => {});
//     it('should give 50 points if answered correctly on third guess', () => {});
//     it('should give 25 points if answered correctly on fourth guess', () => {});
//   });
// });
