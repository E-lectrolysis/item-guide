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
  let min = 0;
  let max = 150;
  if(req.query.min !== undefined) {
    min = req.query.min;
  }
  if(req.query.max !== undefined) {
    max = req.query.max;
  }
  res.render('home', {"items": items});
});

module.exports = router;
