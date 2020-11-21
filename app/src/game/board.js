const { suites } = require('../config.json')
const Deck = require('./deck')
const Well = require('./well')

class Board {
  constructor() {
    this.deck = new Deck()
    this.wells = suites.map(() => new Well())
  }

  toJson() {
    return JSON.stringify({
      deck: JSON.parse(this.deck.toJson()),
      wells: this.wells.map((card) => JSON.parse(card.toJson())),
    })
  }
}

module.exports = Board
