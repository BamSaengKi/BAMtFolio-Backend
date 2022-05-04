var express = require('express');
var router = express.Router();

var user = {
  id: "bamsaengki",
  name : "오진우",
  birth : "1994-11-16",
  lang : "java, JS",
  title : "test",
  decription : "test"
}

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
