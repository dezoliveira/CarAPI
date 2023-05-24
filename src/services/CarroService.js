const { deleteCar } = require('../controllers/CarroController')
const db = require('../db')

module.exports = {
  getAllCars: () => {
    return new Promise((accepted, rejected) => {
      db.query('SELECT * FROM carros', (error, results) => {
        if(error) { 
          rejected(error)
          return
        }

        accepted(results)
      })
    })
  },

  getCar: (codigo) => {
    return new Promise((accepted, rejected) => {
      db.query('SELECT * FROM carros WHERE codigo = ?', [codigo], (error, results) => {
        if(error) {
          rejected(error)
          return
        }

        if(results.length > 0) {
          accepted(results[0])
        } else {
          accepted(false)
        }

      })
    })
  },

  insertCar: (modelo, placa, cor, ano) => {
    return new Promise((accepted, rejected) => {
      db.query('INSERT INTO carros (modelo, placa, cor, ano) VALUES (?, ?, ?, ?)', 
        [modelo, placa, cor, ano],
        (error, results) => {
          if(error) {
            rejected(error)
            return
          }
          accepted(results.insertCodigo)

        })
    })
  },

  updateCar: (codigo, modelo, placa, cor, ano) => {
    return new Promise((accepted, rejected) => {
        db.query('UPDATE carros SET modelo = ?, placa = ?, cor = ?, ano = ? WHERE codigo = ?',
          [modelo, placa, cor, ano, codigo],
          (error, results) => {
            if(error) {
              rejected(error)
              return
            }
            accepted(results)
          }
        )
    })
  },

  deleteCar: (codigo) => {
    return new Promise((accepted, rejected) => {
      db.query('DELETE FROM carros WHERE codigo = ?', [codigo], (error, results) => {
        if(error) {
          rejected(error)
          return
        }
        accepted(results)
      })
    })
  }
}