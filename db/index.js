// getting environment
const env = process.env.NODE_ENV || 'development' //process.env is information about where the program was started

// getting config for environment
const config = require('../knexfile')[env]

// creating connection to database
const connection = require('knex')(config)

module.exports = connection
