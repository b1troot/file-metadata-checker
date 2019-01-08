const fs = require('fs')

const formidable = require('formidable')

const parseHtml = require('./utils').parseHtml



/*  Default route handler, for all urls that do not match any route */

const defaultHandler = (req,res) => {
  res.writeHead(404, {
    'Content-Type' : 'text/html'
  })
  res.write(parseHtml('./error.html'))
  res.end()
}


/*  Handler for index page with upload form  */

const indexHandler = (req, res) => {
  res.writeHead(200, {
    'Content-Type' : 'text/html'
  })
  res.write(parseHtml('./index.html'))
  res.end()
}

/* Handler for file upload and json response with basic info */

const fileinfoHandler = (req, res) => {

  let form = formidable.IncomingForm()

  form.parse(req, (err, fields, files) => {

    if( err ) {
      res.writeHead( 500, {'Content-type' : 'text/html'} )
      res.write( parseHtml('./error500.html') )
      return res.end()
    }

    let name = files.upfile.name
    let size = files.upfile.size
    let type = files.upfile.type

    let info = {
      name,
      type,
      size
    }

    res.writeHead( 200, {'Content-type' : 'application/json'} )
    res.write( JSON.stringify(info) )
    res.end()
  })
}

module.exports = {
  defaultHandler,
  indexHandler,
  fileinfoHandler
}
