class Well {
  constructor() {
    this.stack = []
  }

  addCard(card) {
    this.stack.push(card)
  }

  popCard() {
    return this.stack.pop()
  }

  toJson() {
    return JSON.stringify(this.stack.map((card) => JSON.parse(card.toJson())))
  }
}

module.exports = Well
