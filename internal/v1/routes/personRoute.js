const { getPersonHandler, addPersonHandler, putPersonHandler, deletePersonHandler } = require('../handlers/personHandler')
const validator = require('../validator')

module.exports = {
  name: 'personRoute',
  version: '1.0.0',
  register: async function (server, options) {
    const prefix = options.prefix || ''
    const localPrefix = 'person'
    server.route({
      method: 'GET',
      path: `${prefix}/${localPrefix}`,
      handler: getPersonHandler,
    })
    server.route({
      method: 'POST',
      path: `${prefix}/${localPrefix}`,
      handler: addPersonHandler,
      options: {
        validate: {
          payload: validator.addPerson
        }
      }
    })
    server.route({
      method: 'PUT',
      path: `${prefix}/${localPrefix}/{personId}`,
      handler: putPersonHandler,
      options: {
        validate: {
          payload: validator.putPerson
        }
      }
    })
    server.route({
      method: 'DELETE',
      path: `${prefix}/${localPrefix}/{personId}`,
      handler: deletePersonHandler,
    })
  }
}
