'use strict';

/**
 *
 * @param {*} response
 * @param {Boolean} [needbody]
 * @returns {Object|undefined}
 */
module.exports = function(response, needbody) {

  if (!response) return;

  var res = {};

  res.statusCode = response.statusCode;
  if (response.res && response.res.statusMessage) {
    res.statusMessage = response.res.statusMessage
  }
  res.headers = response.headers;


  // logging response.request
  if (response.request) {
    let req = response.request;

    res.req = {
      method: req.method,
      url: req.url,
      header: req.header,
      cookies: req.cookies,
      qs: req.qs,
    };

    if (needbody) {
      res.req.data = req._data;
    }
  }


  // logging response.error
  if (response.error) {
    // remove something we've got previously
    delete response.error.text;
    delete response.error.body;
  }
  res.error = response.error;

  if (needbody) res.text = response.text;

  return res;
};