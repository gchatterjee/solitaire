class Card {
  constructor({ suite, color, number }) {
    this.suite = suite
    this.color = color
    this.number = number
  }

  toJson() {
    const { suite, color, number } = this
    return JSON.stringify({ suite, color, number })
  }
}

module.exports = Card
