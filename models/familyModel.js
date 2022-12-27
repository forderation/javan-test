'use strict'

module.exports = function (sequelize, DataTypes) {
  /**
   * Set paranoid to true if using soft delete
   * @type {*|ModelCtor<Model>|void}
   */
  const Schema = sequelize.define('family',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      nik: {
        type: DataTypes.STRING
      },
      created_at: {
        type: DataTypes.DATE
      },
      updated_at: {
        type: DataTypes.DATE
      }
    },
    {
      underscored: true
    }
  )

  /**
   * Write association here
   * @param models
   */
  Schema.associate = function (models) {
    models.familyModel.hasMany(models.personModel, {
      as: 'person',
    })
  }

  return Schema
}
