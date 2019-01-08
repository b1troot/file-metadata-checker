const fs = require('fs')


/*
****************************************************
* Utility module with a few usefull functions
****************************************************
*/


/*
* function creating string from html file
* used to sending HTML without express
*/

const parseHtml = (html) => fs.readFileSync(html, (err,file) => {
  if(err) throw err;
  return file.toString()
})

/*
* this function trims url from '/'
*/

const trimUrl = url => url.replace(/^\/+|\/+$/g,"")


module.exports = {
  parseHtml,
  trimUrl
}
