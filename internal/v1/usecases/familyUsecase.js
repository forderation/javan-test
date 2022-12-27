const ModelDB = require("../../../core/db/hapiSequelize")
const FamilyRepository = require("../repositories/familyRepository")
const db = ModelDB.getDB()
const repoFamily = new FamilyRepository(db)

const getFamilyUC = async function ({ nik, id }) {
    const dataExisting = await repoFamily.getFamilies({ nik, id })
    return dataExisting
}

const addFamilyUC = async function (nik) {
    const dataExisting = await repoFamily.getFamilyByNik(nik)
    if (dataExisting.length > 0) {
        throw `data with nik ${nik} already exist`
    }
    const data = await repoFamily.addFamily(nik)
    return data
}

const deleteFamilyUC = async function (id) {
    const data = await repoFamily.deleteFamilyById(id)
    if (data == 0) {
        throw `data with id ${id} not exist`
    }
    return data
}

const updateFamilyUC = async function ({ id, nik }) {
    const dataExisting = await repoFamily.getFamilyByNik(nik)
    if (dataExisting.length > 0) {
        throw `data with nik ${nik} already exist`
    }
    const data = await repoFamily.updateFamilyById({ id: id, nik: nik })
    if (data == 0) {
        throw `data with id ${id} not exist`
    }
}

module.exports = {
    getFamilyUC,
    addFamilyUC,
    deleteFamilyUC,
    updateFamilyUC
}