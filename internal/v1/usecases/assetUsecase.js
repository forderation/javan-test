const ModelDB = require("../../../core/db/hapiSequelize")
const AssetRepository = require("../repositories/assetRepository")
const { getPersonUC } = require("./personUsecase")
const db = ModelDB.getDB()
const repoAsset = new AssetRepository(db)

const getAssetUC = async function ({ id, name, personId }) {
    const dataExisting = await repoAsset.getAsset({
        id, name, personId
    })
    return dataExisting
}

const addAssetUC = async function ({ name, personId }) {
    const dataExisting = await getPersonUC({ id: personId })
    if (dataExisting.length < 1) {
        throw `data with person id ${personId} not exist`
    }
    const data = await repoAsset.addAsset({ name, personId })
    return data
}

const deleteAssetUC = async function (id) {
    const data = await repoAsset.deleteAssetById(id)
    if (data == 0) {
        throw `data with id ${id} not exist`
    }
    return data
}

const updateAssetUC = async function ({ name, personId, id }) {
    const dataPersonExisting = await getPersonUC({ id: personId })
    if (dataPersonExisting.length < 1) {
        throw `data with person id ${id} not exist`
    }
    const data = await repoAsset.updateAssetById({
        name, personId, id
    })
    return data
}

module.exports = {
    getAssetUC,
    addAssetUC,
    deleteAssetUC,
    updateAssetUC
}