import guid from './lib/guid';

export default class Question {
  id: string
  correctChoice: any
  wrongChoices: any[]
  currentPointValue: number
  idProp: string

  constructor({ correctChoice, wrongChoices, idProp }) {
    this.id = guid()
    this.correctChoice = correctChoice
    this.wrongChoices = wrongChoices
    this.currentPointValue = 100
    this.idProp = idProp
  }

  removeWrongChoice(id) {
    this.wrongChoices = this.wrongChoices.filter(wc => wc[this.idProp] !== id)
  }
}
