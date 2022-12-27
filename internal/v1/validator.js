const Joi = require('joi')

const addFamily = Joi.object({
  nik: Joi.number().required(),
})

const putFamily = Joi.object({
  nik: Joi.number().required(),
})

const addPerson = Joi.object({
  family_id: Joi.number().required(),
  name: Joi.string().required(),
  gender: Joi.number().required(),
  nip: Joi.number().required(),
})

const putPerson = Joi.object({
  family_id: Joi.number().required(),
  name: Joi.string().required(),
  gender: Joi.number().required(),
  nip: Joi.number().required(),
})

const addAsset = Joi.object({
  person_id: Joi.number().required(),
  name: Joi.string().required(),
})

const putAsset = Joi.object({
  person_id: Joi.number().required(),
  name: Joi.string().required(),
})

module.exports = {
  addFamily,
  putFamily,
  addPerson,
  putPerson,
  addAsset,
  putAsset,
}
