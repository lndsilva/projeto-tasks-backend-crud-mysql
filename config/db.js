const config = require('../knexfile.js')
const knex = require('knex')(config)

knex.migrate.latest([config])

module.exports = knex


//knex migrate:make create_table_users
//knex migrate:make create_table_tasks