require('dotenv').config()

const Sequelize = require('sequelize')

const sequelize = new Sequelize('mysql://root:ElsaRoseyButterScotch@localhost:3306/ecommerce_db')

module.exports = sequelize
