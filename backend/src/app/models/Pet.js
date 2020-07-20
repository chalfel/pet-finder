const Sequelize = require('sequelize')
const { Model } = Sequelize

class Pet extends Model {
  static init (sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        breed: Sequelize.STRING,
        age: Sequelize.INTEGER,
        weight: Sequelize.REAL,
        city: Sequelize.STRING,
        user_id: Sequelize.INTEGER
      },
      {
        sequelize
      }
    )
    return this
  }

  static associate (models) {
    this.belongsTo(models.User, { foreignKey: 'user_id', foreignKeyConstraint: 'user' })
  }
}

export default Pet
