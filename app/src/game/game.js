const Board = require('./board')

class Game {
  constructor() {
    this.board = new Board()
  }

  toJson() {
    return JSON.stringify({ board: JSON.parse(this.board.toJson()) })
  }
}

module.exports = Game
