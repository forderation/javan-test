'use strict'

module.exports = function (sequelize, DataTypes) {
  /**
   * Set paranoid to true if using soft delete
   * @type {*|ModelCtor<Model>|void}
   */
  const Schema = sequelize.define('person',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      nip: {
        type: DataTypes.STRING
      },
      name: {
        type: DataTypes.STRING
      },
      gender: {
        type: DataTypes.INTEGER
      },
      family_id: {
        type: DataTypes.INTEGER
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
    models.personModel.belongsTo(models.familyModel, {
      as: 'family'
    })
    models.personModel.hasMany(models.assetModel, {
      as: 'asset'
    })
  }

  return Schema
}
