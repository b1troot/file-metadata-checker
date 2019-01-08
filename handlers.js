const fs = require('fs')

const parseHtml = require('./utils').parseHtml


/*
* Default route handler, for all urls that do not match any route
*/

const defaultHandler = (req,res) => {
  res.writeHead(404, {
    'Content-Type' : 'text/html'
  })
  res.write(parseHtml('./error.html'))
  res.end()
}

const indexHandler = (req, res) => {
  res.writeHead(200, {
    'Content-Type' : 'text/html'
  })
  res.write(parseHtml('./index.html'))
  res.end()
}

const fileinfoHandler = (req, res) => {
  let info = {}
  let json = JSON.stringify(info)
  res.writeHead(200, {
    'Content-Type' : 'application/json'
  })
  res.write(json)
  res.end()
}



module.exports = {
defaultHandler,
indexHandler,
fileinfoHandler
}
