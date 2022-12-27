const { getAssetHandler, addAssetHandler, putAssetHandler, deleteAssetHandler } = require('../handlers/assetHandler')
const validator = require('./../validator')

module.exports = {
  name: 'assetRoute',
  version: '1.0.0',
  register: async function (server, options) {
    const prefix = options.prefix || ''
    const localPrefix = 'asset'
    server.route({
      method: 'GET',
      path: `${prefix}/${localPrefix}`,
      handler: getAssetHandler,
    })
    server.route({
      method: 'POST',
      path: `${prefix}/${localPrefix}`,
      handler: addAssetHandler,
      options: {
        validate: {
          payload: validator.addAsset
        }
      }
    })
    server.route({
      method: 'PUT',
      path: `${prefix}/${localPrefix}/{assetId}`,
      handler: putAssetHandler,
      options: {
        validate: {
          payload: validator.putAsset
        }
      }
    })
    server.route({
      method: 'DELETE',
      path: `${prefix}/${localPrefix}/{assetId}`,
      handler: deleteAssetHandler,
    })
  }
}
