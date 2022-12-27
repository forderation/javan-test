const ModelDB = require("../../../core/db/hapiSequelize")
const AssetRepository = require("../repositories/assetRepository")
const PersonRepository = require("../repositories/personRepository")
const ProductRepository = require("../repositories/productRepository")
const { getFamilyUC } = require("./familyUsecase")
const db = ModelDB.getDB()
const repoPerson = new PersonRepository(db)
const repoAsset = new AssetRepository(db)
const repoProduct = new ProductRepository()

const mappingProductPriceUC = async function (asset) {
    let name = asset.name
    asset.price = 0
    if (name != "") {
        let resp = await repoProduct.getProducts(name)
        if (resp.products) {
            const totalPrice = resp.products.reduce(function (total, item) {
                return total + item.price
            }, 0)
            asset.price = totalPrice
        }
    }
    return asset
}

const getPersonUC = async function ({ familyId, name, gender, nip, id, includeProduct }) {
    let dataExisting = await repoPerson.getPersons({
        familyId, name, gender, nip, id, includeProduct
    })
    if (includeProduct) {
        dataExisting = await Promise.all(dataExisting.map(async function (person) {
            let assets = await Promise.all(person.asset.map(mappingProductPriceUC))
            person.asset = assets
            return person
        }))
    }
    return dataExisting
}

const addPersonUC = async function ({ familyId, name, gender, nip }) {
    if (gender > 1 && gender < 0) {
        throw `gender must be 0 or 1`
    }
    const dataExisting = await getFamilyUC({ id: familyId })
    if (dataExisting.length < 1) {
        throw `data with family id ${familyId} not exist`
    }
    const data = await repoPerson.addPerson({ familyId, name, gender, nip })
    return data
}

const deletePersonUC = async function (id) {
    const data = await repoPerson.deletePersonById(id)
    if (data == 0) {
        throw `data with id ${id} not exist`
    }
    await repoAsset.deleteAssetByPersonId(id)
    return data
}

const updatePersonUC = async function ({ familyId, name, gender, nip, id }) {
    if (gender > 1 && gender < 0) {
        throw `gender must be 0 or 1`
    }
    const dataPersonExisting = await repoPerson.getPersons({ id: id })
    if (dataPersonExisting.length < 1) {
        throw `data with person id ${id} not exist`
    }
    const dataFamilyExisting = await getFamilyUC({ id: familyId })
    if (dataFamilyExisting.length < 1) {
        throw `data with family id ${familyId} not exist`
    }
    const data = await repoPerson.updatePersonById({
        familyId, name, gender, nip, id
    })
    return data
}

module.exports = {
    getPersonUC,
    addPersonUC,
    deletePersonUC,
    updatePersonUC
}