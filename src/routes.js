const express = require('express')
const router = express.Router()

const CarroController = require('./controllers/CarroController')

router.get('/carros', CarroController.getAllCars)
router.get('/carro/:codigo', CarroController.getCar)

module.exports = router