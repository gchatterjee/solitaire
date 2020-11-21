const log4js = require('log4js')

function configureLogger() {
  log4js.configure({
    appenders: { solitaire: { type: 'file', filename: 'solitaire.log' } },
    categories: { default: { appenders: ['solitaire'], level: 'trace' } },
  })
}

module.exports = { configureLogger }
