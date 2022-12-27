'use strict'
const {
    deleteFamilyUC,
    addFamilyUC,
    getFamilyUC,
    updateFamilyUC
} = require('../usecases/familyUsecase')

const deleteFamilyHandler = async function (request, h) {
    const id = request.params.familyId
    let data
    try {
        data = await deleteFamilyUC(id)
    } catch (error) {
        const response = h.objectResponse.invalidRequest(error)
        return h.response(response).code(404)
    }
    const response = h.objectResponse.genericResponse({
        message: 'successfully remove family data',
        data: data
    })
    return h.response(response)
}

const addFamilyHandler = async function (request, h) {
    const nik = request.payload.nik
    let data
    try {
        data = await addFamilyUC(nik)
    } catch (error) {
        const response = h.objectResponse.invalidRequest(error)
        return h.response(response).code(400)
    }
    const response = h.objectResponse.genericResponse({
        message: 'successfully add family data',
        data: data
    })
    return h.response(response)
}

const getFamilyHandler = async function (request, h) {
    const nik = request.query.nik
    const id = request.query.id
    const data = await getFamilyUC({ nik: nik, id: id })
    const response = h.objectResponse.genericResponse({
        message: 'successfully get family data',
        data: data
    })
    return h.response(response)
}

const putFamilyHandler = async function (request, h) {
    const id = request.params.familyId
    const nik = request.payload.nik
    let data
    try {
        data = await updateFamilyUC({ id, nik })
    } catch (error) {
        const response = h.objectResponse.invalidRequest(error)
        return h.response(response).code(400)
    }
    const response = h.objectResponse.genericResponse({
        message: 'successfully update family data',
        data: data
    })
    return h.response(response)
}

module.exports = {
    deleteFamilyHandler,
    addFamilyHandler,
    getFamilyHandler,
    putFamilyHandler
}