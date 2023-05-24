const CarroService = require('../services/CarroService')

module.exports = {
  getAllCars: async (req, res) => {
    let json = {error:'', result:[]}

    let carros = await CarroService.getAllCars()

    for(let i in carros){
      json.result.push({
        codigo: carros[i].codigo, 
        descricao: carros[i].modelo,
        placa: carros[i].placa,
        cor: carros[i].cor,
        ano: carros[i].ano,
      })
    }

    res.json(json)
  },

  getCar: async (req, res) => {
    let json = {error:'', result:{}}

    let codigo = req.params.codigo
    let carro = await CarroService.getCar(codigo)

    if(carro) {
      json.result = carro
    }

    res.json(json)
  },

  insertCar: async (req, res) => {
    let json = {error:'', result:{}}

    let codigo = req.body.codigo
    let modelo = req.body.modelo
    let placa = req.body.placa
    let cor = req.body.cor
    let ano = req.body.ano

    if(modelo && placa && cor && ano) {
      let codigoCarro = await CarroService.insertCar(modelo, placa)
      json.result = {
        codigo: codigoCarro,
        modelo,
        placa,
        cor,
        ano
      }
    } else {
      json.error = 'Campos não enviados'
    }

    res.json(json)
  },

  updateCar: async (req, res) => {
    let json = {error:'', result:{}}

    let codigo = req.params.codigo
    let modelo = req.body.modelo
    let placa = req.body.placa
    let cor = req.body.cor
    let ano = req.body.ano

    if(codigo && modelo && placa) {
      await CarroService.updateCar(codigo, modelo, placa)
      json.result = {
        codigo,
        modelo,
        placa,
        cor,
        ano
      }
    } else {
      json.error = 'Campos não enviados'
    }

    res.json(json)
  },

  deleteCar: async (req, res) => {
    let json = {error:'', result:{}}
    let codigo = req.params.codigo

    await CarroService.deleteCar(codigo)

    res.json(json)
  }
}