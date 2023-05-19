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
  }
}