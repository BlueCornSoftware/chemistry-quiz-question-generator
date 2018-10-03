import arrayShuffle from './lib/arrayShuffle';
import guid from './lib/guid';

export default class Quiz {
  id: string
  testData: any
  questions: any[]
  score: number
  wrongChoicePool: any[]
  currentQuestionIndex: number
  initialized: boolean
  wrongChoicesPerQuestion: number
  Question: any
  currentQuestion: any

  constructor({ questions, testData, Question, wrongChoicesPerQuestion = 3 }) {
    this.id = guid();
    const totalElementCount = testData.fetch().elements.length;
    if (questions > totalElementCount) {
      throw new Error('Test cannot be longer than the data it uses');
    }
    this.Question = Question
    this.testData = testData;
    this.questions = [ ...Array(questions) ];
    this.score = 0;
    this.wrongChoicePool = [ ...Array(totalElementCount - questions) ];
    this.currentQuestionIndex = 0;
    this.initialized = false;
    this.wrongChoicesPerQuestion = wrongChoicesPerQuestion;
  }

  init() {
    // initializes question data
    if (this.initialized) return;
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
    this.initialized = true;
  }

  loadNextQuestion() {
    this.currentQuestionIndex++
    this.currentQuestion = this.questions[this.currentQuestionIndex];
    this.currentQuestion.wrongChoices = this.currentQuestion.wrongChoices.map(() => this.wrongChoicePool.pop());
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
