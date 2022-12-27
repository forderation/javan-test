'use strict'
const { Op } = require("sequelize")

class AssetRepository {
    constructor(models) {
        this._models = models.assetModel
    }

    _override(item) {
        const itemNew = {}
        itemNew.id = item.id
        itemNew.name = item.name
        itemNew.person_id = item.person_id
        itemNew.created_at = item.created_at
        itemNew.updated_at = item.updated_at
        return itemNew
    }

    async getAsset({ id, name, personId }) {
        const whereClauses = {}
        if (name) {
            whereClauses.name = {
                [Op.iLike]: name
            }
        }
        if (personId) {
            whereClauses.person_id = personId
        }
        if (id) {
            whereClauses.id = id
        }
        let data = await this._models.findAll({
            where: Object.keys(whereClauses).length !== 0 ? { [Op.or]: whereClauses } : null
        })
        data = data.map(this._override)
        return data
    }

    async addAsset({ name, personId }) {
        const data = await this._models.create({
            name: name,
            person_id: personId
        })
        return this._override(data)
    }

    async deleteAssetById(id) {
        const data = await this._models.destroy({
            where: {
                id: id
            }
        })
        return this._override(data)
    }

    async deleteAssetByPersonId(personId) {
        const data = await this._models.destroy({
            where: {
                person_id: personId
            }
        })
        return this._override(data)
    }

    async updateAssetById({ personId, name, id }) {
        const data = await this._models.update({
            name: name,
            person_id: personId
        }, {
            where: {
                id: id
            }
        })
        return this._override(data)
    }
}

module.exports = AssetRepository
