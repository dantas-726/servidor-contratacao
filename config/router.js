const express = require('express')
const router = express.Router()

//const alunoController = require('../controller/alunoController')

const candidatoController = require('../controller/candidatoController')

//alunoController(router)

candidatoController(router)

module.exports = router