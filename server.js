const express = require('express')
const server = express()

server.use(express.static('html'))
server.use('/assest', express.static('dist'))
server.listen(3000)