process superagent response to get better error logging result

# Example

````
const request = require('superagent');
const serial = require('util-superagent-serializer');

superagent.get(restful_url)
  .end((err, res)=>{
    
    if (err) return console.error(err);
    
    console.log(serial(res));
  });
