var express = require('express');
var router = express.Router();

var PortfolioLst =[
  {
    id : 1,
    title : "프로젝트명",
    duration : "2022-01-01 ~ 2022-02-01",
    lang : "java, js",
    part : "90%",
    thumbnail : "",
    content : ""
  }

]

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
