/**
 * @author Electrolysis
 * 
 */


let express = require('express');
let router = express.Router();
let itemStuff = require('./item');
var api = require('./public_api.json')

/* GET home page. */
router.get('/', function(req, res, next) {
  if(req.query.name === undefined) {
    req.query.name = "";
  }
  

  let items = itemStuff.searchItem(req.query);
  res.render('home', {"items": items});
});

module.exports = router;
