'use strict'

const hitter = require("../../../utils/axios")

class ProductRepository {

  async getProducts(productName) {
    const hitterInstance = hitter({
        baseURL: "https://dummyjson.com"
    })
    const url = "/products/search?q=" + productName
    const response = await hitterInstance.get(url)
    return response?.data 
  }

}

module.exports = ProductRepository
