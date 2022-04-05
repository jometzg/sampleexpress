var express = require('express');
var router = express.Router();
const http = require('http');

/* GET home page. */
router.get('/', function(req, res, next) {

  http.get('http://172.16.0.4', (resp) => {
    let data = '';

    // A chunk of data has been received.
    resp.on('data', (chunk) => {
      data += chunk;
    });

    // The whole response has been received. Print out the result.
    resp.on('end', () => {
      // console.log(data);
      res.send(data);
    });

  }).on("error", (err) => {
  console.log("Error: " + err.message);
});
});

module.exports = router;
