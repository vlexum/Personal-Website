const express = require('express')
const logger = require('morgan')
const path = require('path')
const server = express()
const phpExpress = require('php-express')({
  binPath: 'php'
});

server.use(express.urlencoded({'extended': true}))
server.use(logger('dev'))

//PHP
server.set('views', './views');
server.engine('php', phpExpress.engine);
server.set('view engine', 'php');
server.all(/.+\.php$/, phpExpress.router);
// Routes
server.get('/do_a_random', (req, res) => {
  res.send(`Your number is: ${Math.floor(Math.random() * 100) + 1}`)
})


// Setup static page serving for all the pages in "public"
const publicServedFilesPath = path.join(__dirname, 'public')
server.use(express.static(publicServedFilesPath))


// The server uses port 80 by default unless you start it with the extra
// command line argument 'local' like this:
//       node server.js local
let port = 80
if (process.argv[2] === 'local') {
  port = 8080
}

server.listen(port, () => console.log('Ready on localhost!'))


