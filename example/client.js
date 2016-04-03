'use strict';

const request = require('superagent');
const inspect = require('util').inspect;
const colors = require('colors');
const serializer = require('..');

request
  .post('http://localhost:3000')
  .query({since: 'blahblah'})
  .send({hello: 'this is from post'})
  .end((err, res)=>{

    if (err) return console.error(inspect(err).red);

    console.log(inspect(serializer(res)).green);

  });