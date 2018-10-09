"use strict";
exports.__esModule = true;
var arrayShuffle_1 = require("./lib/arrayShuffle");
var bluecornsoftware_functions_1 = require("bluecornsoftware-functions");
var Quiz = /** @class */ (function () {
    function Quiz(_a) {
        var questions = _a.questions, testData = _a.testData, Question = _a.Question, _b = _a.wrongChoicesPerQuestion, wrongChoicesPerQuestion = _b === void 0 ? 3 : _b;
        this.id = bluecornsoftware_functions_1.guid();
        var totalElementCount = testData.fetch().elements.length;
        if (questions > totalElementCount) {
            throw new Error('Test cannot be longer than the data it uses');
        }
        this.Question = Question;
        this.testData = testData;
        this.questions = Array(questions).slice();
        this.score = 0;
        this.wrongChoicePool = Array(totalElementCount - questions).slice();
        this.currentQuestionIndex = 0;
        this.initialized = false;
        this.wrongChoicesPerQuestion = wrongChoicesPerQuestion;
    }
    Quiz.prototype.init = function () {
        var _this = this;
        // initializes question data
        if (this.initialized)
            return;
        var data = this.testData.random(this.questions.length);
        this.questions = data.map(function (el) {
            return new _this.Question({
                correctChoice: el,
                wrongChoices: Array(_this.wrongChoicesPerQuestion).slice().map(function () { return null; }),
                idProp: 'name',
                choicesHaveBeenBuilt: false
            });
        });
        var elements = this.testData.fetch().elements;
        var questionNames = this.questions.map(function (_a) {
            var name = _a.correctChoice.name;
            return name;
        });
        this.wrongChoicePool = arrayShuffle_1["default"](elements.filter(function (el) { return questionNames.indexOf(el.name) === -1; }));
        this.initialized = true;
    };
    Quiz.prototype.loadNextQuestion = function () {
        var _this = this;
        this.currentQuestionIndex++;
        this.currentQuestion = this.questions[this.currentQuestionIndex];
        this.currentQuestion.wrongChoices = this.currentQuestion.wrongChoices.map(function () { return _this.wrongChoicePool.pop(); });
    };
    Quiz.prototype.answerQuestion = function (answerIdProp) {
    };
    Quiz.prototype.calculateSkipsLeft = function () {
        var wrongChoiceCount = this.wrongChoicePool.length;
        return Math.floor(wrongChoiceCount / this.wrongChoicesPerQuestion);
    };
    Quiz.prototype.start = function () {
        // loadNextQuestion()
    };
    Quiz.prototype.skipQuestion = function () {
        // enqueuCurrentQuestion()
        // loadNextQuestion()
        //
    };
    return Quiz;
}());
exports.Quiz = Quiz;
