'use strict'
const { deleteAssetUC, addAssetUC, updateAssetUC, getAssetUC } = require('../usecases/assetUsecase')

const deleteAssetHandler = async function (request, h) {
    const id = request.params.assetId
    let data
    try {
        data = await deleteAssetUC(id)
    } catch (error) {
        const response = h.objectResponse.invalidRequest(error)
        return h.response(response).code(404)
    }
    const response = h.objectResponse.genericResponse({
        message: 'successfully remove asset data',
        data: data
    })
    return h.response(response)
}

const addAssetHandler = async function (request, h) {
    const personId = request.payload.person_id
    const name = request.payload.name
    let data
    try {
        data = await addAssetUC({ personId, name })
    } catch (error) {
        const response = h.objectResponse.invalidRequest(error)
        return h.response(response).code(400)
    }
    const response = h.objectResponse.genericResponse({
        message: 'successfully add asset data',
        data: data
    })
    return h.response(response)
}

const getAssetHandler = async function (request, h) {
    const personId = request.query.person_id
    const name = request.query.name
    const id = request.query.id
    const data = await getAssetUC({ id, name, personId })
    const response = h.objectResponse.genericResponse({
        message: 'successfully get asset data',
        data: data
    })
    return h.response(response)
}

const putAssetHandler = async function (request, h) {
    const id = request.params.assetId
    const personId = request.payload.person_id
    const name = request.payload.name
    let data
    try {
        data = await updateAssetUC({ id, personId, name })
    } catch (error) {
        const response = h.objectResponse.invalidRequest(error)
        return h.response(response).code(400)
    }
    const response = h.objectResponse.genericResponse({
        message: 'successfully update asset data',
        data: data
    })
    return h.response(response)
}

module.exports = {
    deleteAssetHandler,
    addAssetHandler,
    putAssetHandler,
    getAssetHandler
}