
const handlers = require('./handlers.js')
const trimUrl = require('./utils.js').trimUrl


const routes = {};

routes['default'] = handlers.defaultHandler
routes['/'] = handlers.indexHandler
routes['api/fileinfo'] = handlers.fileinfoHandler


const router = (req, res) => {

  let trimmedUrl = req.url === '/' ? '/' : trimUrl(req.url)
  console.log(trimmedUrl)
  if( routes[trimmedUrl] ) routes[trimmedUrl](req,res)
  else routes['default'](req, res)
}
module.exports = router
