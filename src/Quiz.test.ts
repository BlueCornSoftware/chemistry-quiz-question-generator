import Quiz from './Quiz'
import testData from './testData'
import Question from './Question'

describe('A Quiz', () => {
  const questions = 50
  const wrongChoicesPerQuestion = 3
  let quiz = new Quiz({ questions, testData, Question, wrongChoicesPerQuestion })
  it('has a number of questions', () => {
    expect(quiz.questions.length).toBe(questions);
  })
  it('has a starting currentQuestionIndex of 0', () => {
    expect(quiz.currentQuestionIndex).toBe(0)
  })
  describe('Number of Questions per quiz', () => {
    it('cannot exceed the number of available elements', () => {
      expect(
        () => new Quiz({ questions: 200, testData, Question })
      ).toThrow()
    })
  })
  it('has an initial score of 0', () => {
    expect(quiz.score).toBe(0)
  });
  it('has a reference to the testData object', () => {
    expect(typeof quiz.testData.random).toBe('function')
  });
  it('has an init method', () => {
    expect(typeof quiz.init).toBe('function')
  });
  describe('the .init method', () => {
    quiz.init()
    it('should store 3 null wrong choices for each question', () => {
      quiz.questions.forEach(question => {
        expect(question.wrongChoices.length).toBe(3)
        expect(question.wrongChoices[0]).toBeNull()
      })
    })
    it(
      `should store the difference of total elements
      and already used correct choices in the .wrongChoicePool
      `, () => {
        const { elements } = testData.fetch()
        const elementCount = elements.length
        const wrongChoicePoolCount = quiz.wrongChoicePool.length
        expect(wrongChoicePoolCount).toBe(elementCount - questions)
      })
  })

  describe('the loadNextQuestion method', () => {
    quiz.init();
    it('increments the currentQuestionIndex by one', () => {
      const previous = quiz.currentQuestionIndex;
      quiz.loadNextQuestion();
      expect(quiz.currentQuestionIndex).toBe(previous + 1);
    });
    it('should decrease the length of the wrong choice pool by the wrongChoicePerQuestion count the first time it is called', () => {
      let wrongChoicesPerQuestion = 3
      const q = new Quiz({ questions, testData, Question, wrongChoicesPerQuestion })
      q.init()
      const previousLength = q.wrongChoicePool.length
      q.loadNextQuestion()
      expect(
        q.wrongChoicePool.length
      ).toBe(previousLength - wrongChoicesPerQuestion)
    })
  })

  describe('the calculateSkipsLeft method', () => {
    it(`should return the number of times the count
       of wrong choices per question will go into
       the remaining wrongChoicePool`, () => {
        expect(
          quiz.calculateSkipsLeft()
        ).toBeLessThanOrEqual(
          quiz.wrongChoicePool.length / quiz.wrongChoicesPerQuestion
        )
    })
  })

})