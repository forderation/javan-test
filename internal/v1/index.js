'use strict'
const assetRoute = require('./routes/assetRoute')
const familyRoute = require('./routes/familyRoute')
const personRoute = require('./routes/personRoute')

module.exports = async function (server, prefix = '') {
  await server.register([
    {
      plugin: familyRoute,
      options: {
        prefix: `${prefix}/v1`
      }
    },
    {
      plugin: personRoute,
      options: {
        prefix: `${prefix}/v1`
      }
    },
    {
      plugin: assetRoute,
      options: {
        prefix: `${prefix}/v1`
      }
    }
  ])
  return server
}