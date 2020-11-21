const express = require('express')
// const cors = require('cors')
// const bodyParser = require('body-parser')

const { configureLogger } = require('./logger')
const Game = require('./game/game')

configureLogger()
const game = new Game()

const app = express()
// app.use(cors)
// app.use(bodyParser.json())

app.get('/game', (req, res) => {
  res.send(game.toJson())
})

app.listen(3000)
