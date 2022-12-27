const { getFamilyHandler, addFamilyHandler, putFamilyHandler, deleteFamilyHandler } = require('./../handlers/familyHandler')
const validator = require('./../validator')

module.exports = {
  name: 'familyRoute',
  version: '1.0.0',
  register: async function (server, options) {
    const prefix = options.prefix || ''
    const localPrefix = 'family'
    server.route({
      method: 'GET',
      path: `${prefix}/${localPrefix}`,
      handler: getFamilyHandler,
    })
    server.route({
      method: 'POST',
      path: `${prefix}/${localPrefix}`,
      handler: addFamilyHandler,
      options: {
        validate: {
          payload: validator.addFamily
        }
      }
    })
    server.route({
      method: 'PUT',
      path: `${prefix}/${localPrefix}/{familyId}`,
      handler: putFamilyHandler,
      options: {
        validate: {
          payload: validator.putFamily
        }
      }
    })
    server.route({
      method: 'DELETE',
      path: `${prefix}/${localPrefix}/{familyId}`,
      handler: deleteFamilyHandler,
    })
  }
}
