'use strict'
const { Op } = require("sequelize")

class PersonRepository {
    constructor(models) {
        this._models = models.personModel
    }

    _override(item) {
        const itemNew = {}
        itemNew.id = item.id
        itemNew.nip = item.nip
        itemNew.name = item.name
        itemNew.gender = item.gender
        itemNew.family_id = item.family_id
        itemNew.created_at = item.created_at
        itemNew.updated_at = item.updated_at
        if (item.asset) {
            itemNew.asset = item.asset.map(function (e) {
                const eNew = {}
                eNew.id = e.id
                eNew.name = e.name
                eNew.person_id = e.person_id
                eNew.created_at = e.created_at
                eNew.updated_at = e.updated_at
                return eNew
            })
        }
        return itemNew
    }

    async getPersons({ familyId, name, gender, nip, id, includeProduct }) {
        const whereClauses = {}
        if (name) {
            whereClauses.name = {
                [Op.iLike]: name
            }
        }
        if (gender) {
            whereClauses.gender = gender
        }
        if (familyId) {
            whereClauses.family_id = familyId
        }
        if (nip) {
            whereClauses.nip = {
                [Op.iLike]: `${nip}`
            }
        }
        if (id) {
            whereClauses.id = id
        }
        const query = {
            where: Object.keys(whereClauses).length !== 0 ? { [Op.or]: whereClauses } : null
        }
        if (includeProduct) {
            query.include = 'asset'
        }
        let data = await this._models.findAll(query)
        data = data.map(this._override)
        return data
    }

    async addPerson({ familyId, name, gender, nip }) {
        const data = await this._models.create({
            name: name,
            gender: gender,
            nip: `${nip}`,
            family_id: familyId
        })
        return this._override(data)
    }

    async deletePersonById(id) {
        const data = await this._models.destroy({
            where: {
                id: id
            }
        })
        return this._override(data)
    }

    async updatePersonById({ familyId, name, gender, nip, id }) {
        const data = await this._models.update({
            name: name,
            gender: gender,
            nip: `${nip}`,
            family_id: familyId
        }, {
            where: {
                id: id
            }
        })
        return this._override(data)
    }
}

module.exports = PersonRepository
