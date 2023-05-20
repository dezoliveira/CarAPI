const express = require('express')
const router = express.Router()

const CarroController = require('./controllers/CarroController')

router.get('/carros', CarroController.getAllCars)
router.get('/carro/:codigo', CarroController.getCar)
router.post('/carro', CarroController.insertCar)
router.put('/carro/:codigo', CarroController.updateCar)
router.delete('/carro/:codigo', CarroController.deleteCar)

module.exports = router