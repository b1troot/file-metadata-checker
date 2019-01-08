
const http = require('http')
const fs = require('fs')

const router = require('./router.js')

const server  = http.createServer( router )

server.listen( 3000, () => console.log('Server is up on port 3000') )
