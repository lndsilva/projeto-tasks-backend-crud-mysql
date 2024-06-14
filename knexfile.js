
module.exports = {
    client: 'mysql2',
    connection: {
      database: 'dbtasks',
      user:     'senac',
      password: 'senac'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
