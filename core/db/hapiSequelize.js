'use strict'
const Sequelize = require('sequelize')
const fs = require('fs')
const path = require('path')
const Logger = require('../../utils/logger')
let _modelDB = null

const _construct = function () {
  const options = {
    host: process.env.SQL_HOST,
    port: process.env.SQL_PORT,
    username: process.env.SQL_USER,
    password: process.env.SQL_PASSWORD,
    database: process.env.SQL_DB_NAME,
    logging: function (str) {
      // eslint-disable-next-line eqeqeq
      const log = Logger.sqlLogger(process.env.SQL_DB_NAME)
      log.info(str)
    }
  }
  const db = process.env.SQL_DB_NAME
  const sequelizeOpts = {
    // default options, it can be override through options
    dialect: 'postgres',
    define: {
      timestamps: true, // by default created_at and updated_at
      freezeTableName: true, // disable plural table naming
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    },
    ...options
  }

  // Load Sequelize Models
  console.log(`[i] sql connecting to: ${options.host}:${options.port}`)
  const sequelizeInstance = new Sequelize(sequelizeOpts)
  const models = {}
  const pathRead = path.join(__dirname, '../../models')
  console.info('[i] read models path ' + pathRead)
  fs.readdirSync(pathRead)
    .filter((model) => !model.startsWith('.') && model.endsWith('.js'))
    .forEach((model) => {
      const modelConstruct = require(path.join(__dirname, '../../models', model))
      const modelInstance = modelConstruct(sequelizeInstance, Sequelize)
      const modelName = model.replace('.js', '')
      models[modelName] = modelInstance
    })
  Object.keys(models).forEach((model) => {
    if (models[model].associate) models[model].associate(models)
  })
  console.info(`[i] sequelize ${db} model loaded ${Object.keys(models).length}`)
  return models
}

class ModelDB {

  static getDB() {
    if (_modelDB == null) {
      _modelDB = _construct()
    }
    return _modelDB
  }

}

module.exports = ModelDB