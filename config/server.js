require('dotenv').config()

const express = require('express')
const server = express()

const cors = require('cors')
server.use(cors())
server.use(express.json())

const PORT = process.env.PORT || 3000
server.listen(PORT, ()=> {console.log('Server running...')})

module.exports = server