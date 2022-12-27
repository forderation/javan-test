'use strict'
const { Op } = require("sequelize")

class FamilyRepository {
  constructor(models) {
    this._models = models.familyModel
  }

  _override(item) {
    const itemNew = {}
    itemNew.id = item.id
    itemNew.nik = item.nik
    itemNew.created_at = item.created_at
    itemNew.updated_at = item.updated_at
    return itemNew
}

  async getFamilies({ nik, id }) {
    const whereClauses = {}
    if (nik) {
      whereClauses.nik = {
        [Op.iLike]: `${nik}`
      }
    }
    if (id) {
      whereClauses.id = id
    }
    let data = await this._models.findAll({
      where: Object.keys(whereClauses).length !== 0 ?
        { [Op.or]: whereClauses } : null
    })
    data = data.map(this._override)
    return data
  }

  async getFamilyByNik(nik) {
    const data = await this._models.findAll({
      where: {
        nik: `${nik}`
      }
    })
    return this._override(data)
  }

  async addFamily(nik) {
    const data = await this._models.create({
      nik: `${nik}`
    })
    return this._override(data)
  }

  async deleteFamilyById(id) {
    const data = await this._models.destroy({
      where: {
        id: id
      }
    })
    return this._override(data)
  }

  async updateFamilyById({ id, nik }) {
    const data = await this._models.update({
      nik: `${nik}`
    }, {
      where: {
        id: id
      }
    })
    return this._override(data)
  }
}

module.exports = FamilyRepository
