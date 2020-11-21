const { suites, cardCount } = require('../config.json')
const Card = require('./card')
const shuffle = require('fisher-yates')

class Deck {
  constructor() {
    this.stack = []
    for (let i = 0; i < cardCount; i++) {
      const cards = suites.map(
        ({ name, color }) => new Card({ suite: name, color, number: i }),
      )
      this.stack = [...this.stack, ...cards]
    }
    this.stack = shuffle(this.stack)
  }

  toJson() {
    return JSON.stringify(this.stack.map((card) => JSON.parse(card.toJson())))
  }
}

module.exports = Deck
