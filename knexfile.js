const path = require('path')

module.exports = {

  // setup database connection
  development: {
    client: 'postgresql',
    connection: 'postgresql://localhost/school_dev', // database name
    migrations: {
      directory: path.join(__dirname, 'db', 'migrations')
    },
    seeds: {
      directory: path.join(__dirname, 'db', 'seeds')
    }
  },

  test: {
    client: 'postgresql', // type of db
    connection: 'postgresql://localhost/school_test', // db name
    migrations: { // describe structure of database
      directory: path.join(__dirname, 'db', 'migrations') // path to files
    },
    seeds: {
      directory: path.join(__dirname, 'db', 'seeds') // path to files
    }
  },

  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL, // dynamic, DATABASE_URL is where your db is deployed
    migrations: {
      directory: path.join(__dirname, 'db', 'migrations')
    },
    seeds: {
      directory: path.join(__dirname, 'db', 'seeds')
    }
  }
};
