'use strict'
const { deletePersonUC, addPersonUC, getPersonUC, updatePersonUC } = require('../usecases/personUsecase')

const deletePersonHandler = async function (request, h) {
    const id = request.params.personId
    let data
    try {
        data = await deletePersonUC(id)
    } catch (error) {
        const response = h.objectResponse.invalidRequest(error)
        return h.response(response).code(404)
    }
    const response = h.objectResponse.genericResponse({
        message: 'successfully remove person data',
        data: data
    })
    return h.response(response)
}

const addPersonHandler = async function (request, h) {
    const familyId = request.payload.family_id
    const name = request.payload.name
    const gender = request.payload.gender
    const nip = request.payload.nip
    let data
    try {
        data = await addPersonUC({ familyId, name, gender, nip })
    } catch (error) {
        const response = h.objectResponse.invalidRequest(error)
        return h.response(response).code(404)
    }
    const response = h.objectResponse.genericResponse({
        message: 'successfully add person data',
        data: data
    })
    return h.response(response)
}

const getPersonHandler = async function (request, h) {
    const familyId = request.query.family_id
    const name = request.query.name
    const gender = request.query.gender
    const nip = request.query.nip
    const id = request.query.id
    const includeProduct = request.query.include_product
    const data = await getPersonUC({ familyId, name, gender, nip, id, includeProduct })
    const response = h.objectResponse.genericResponse({
        message: 'successfully get person data',
        data: data
    })
    return h.response(response)
}

const putPersonHandler = async function (request, h) {
    const id = request.params.personId
    const familyId = request.payload.family_id
    const name = request.payload.name
    const gender = request.payload.gender
    const nip = request.payload.nip
    let data
    try {
        data = await updatePersonUC({ id, familyId, name, gender, nip })
    } catch (error) {
        const response = h.objectResponse.invalidRequest(error)
        return h.response(response).code(400)
    }
    const response = h.objectResponse.genericResponse({
        message: 'successfully update person data',
        data: data
    })
    return h.response(response)
}


module.exports = { deletePersonHandler, addPersonHandler, getPersonHandler, putPersonHandler }