import Sequelize from 'sequelize'

import User from '../app/models/User'
import Pet from '../app/models/Pet'

import databaseConfig from '../config/database'

const models = [User, Pet]

class Database {
  constructor () {
    this.init()
  }

  init () {
    this.connection = new Sequelize(databaseConfig)
    models
      .map(m => {
        m.init(this.connection)
      })
  }
}

export default new Database()
