require('dotenv').config({path:'variables.env'})
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const routes = require('./routes')

const server = express()
server.use(cors())
server.use(bodyParser.urlencoded({extended:false}))

//add api before all routes
server.use('/api', routes)

//add PORT (variables.env) on server listen
server.listen(process.env.PORT, () => {
  console.log(`Servidor rodando em: https://localhost:${process.env.PORT}`)
})