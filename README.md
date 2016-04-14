process superagent response to get better error logging result

# Example

````
const request = require('superagent');
const serial = require('util-superagent-serializer');

superagent.get(restful_url)
  .end((err, res)=>{
    
    // superagent will detect general http level error for you(404, 403, 500...)
    if (err) return console.error(err);
    
    // Golden Rule: in javascript, you should trust your own input
    // But, you should NEVER trust 3rd party input. `res` is 3rd party input
    
    if (!isSomething(res)) return console.error(NotSomethingErr(res));
    
    // Now, you can trust the res, and continue your codes
    ....
  });
  

function isSomething(res) {
  // check if the res is something you want here
}

function NotSomethingErr(res) {
  
  var err = new TypeError('we got something unknown');
  
  // serialize the res, and log the error, so we know what happened.
  err.original = serial(res);
  return err;
}
