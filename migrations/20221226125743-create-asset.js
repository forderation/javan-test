'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('asset', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      person_id: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'person'
          },
          key: 'id'
        }
      },
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('asset')
  }
}