'use strict';

const http = require('http');
const colors = require('colors');

http.createServer((req, res)=> {

  res.writeHead(200, {'Content-Type': 'application/json'})
  res.end(JSON.stringify({error: [], result: { XXBTZEUR: [], last: 1427617277683000000}}));

}).listen(3000, _=> console.log('listening...'.cyan))