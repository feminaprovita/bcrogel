const Sequelize = require('sequelize')
const db = require('../db')

const Guest = db.define('guest', {
  Name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  Related: {
    type: Sequelize.ARRAY(Sequelize.STRING),
  },
  RSVP: {
    type: Sequelize.BOOLEAN,
    validate: {
      notEmpty: true
    }
  },
  Special: {
    type: Sequelize.ENUM('kids', 'priest')
  }
})

module.exports = Guest
