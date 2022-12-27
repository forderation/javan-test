'use strict'

module.exports = function (sequelize, DataTypes) {
  /**
   * Set paranoid to true if using soft delete
   * @type {*|ModelCtor<Model>|void}
   */
  const Schema = sequelize.define('asset',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataTypes.STRING
      },
      person_id: {
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
    models.assetModel.belongsTo(models.personModel, {
      as: 'person'
    })
  }

  return Schema
}
