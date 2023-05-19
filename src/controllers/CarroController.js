const CarroService = require('../services/CarroService')

module.exports = {
  getAllCars: async (req, res) => {
    let json = {error:'', result:[]}

    let carros = await CarroService.getAllCars()

    for(let i in carros){
      json.result.push({
        codigo: carros[i].codigo, 
        descricao: carros[i].modelo,
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

    let modelo = req.body.modelo
    let placa = req.body.placa

    if(modelo && placa) {
      let codigoCarro = await CarroService.insertCar(modelo, placa)
      json.result = {
        codigo: codigoCarro,
        modelo,
        placa
      }
    } else {
      json.error = 'Campos não enviados'
    }

    res.json(json)
  }
}