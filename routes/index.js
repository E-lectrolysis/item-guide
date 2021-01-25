let express = require('express');
let router = express.Router();
let itemStuff = require('./item');

/* GET home page. */
router.get('/', async function(req, res, next) {
  if(req.query.name === undefined) {
    req.query.name = "";
  }
  
  let items = await itemStuff.searchItem(req.query.name);
  res.render('home', {"items": items});
});

module.exports = router;
