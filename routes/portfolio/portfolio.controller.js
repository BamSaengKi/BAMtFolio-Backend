var express = require('express');
const protfolioService = require('./portfolio.service');
var router = express.Router();


// 글 작성
router.post('/', (req,res)=> {
  try {
    const body = req.body;

    const result = protfolioService.Write(body);

    res.status(200).json({
      status : 200,
      data : result,
      message : "SUCCESS"
    })
  } catch (error) {
      res.status(400).json({
        status : 400,
        message : error.message
      })
  }
})



// 포트폴리오 수정

router.put('/', (req, res)=>{
  try {
    const body = req.body;

    const result = protfolioService.updateproject(body);

    res.status(200).json({
      status : 200,
      data : result,
      message : "SUCCESS"
    })
    
  } catch (error) {
    res.status(400).json({
      status : 400,
      message : error.message
    })
  }

})

// 포트폴리오 삭제
router.delete('/', (req,res) =>{
  try {
    const body = req.body;

    const result = protfolioService.deleteproject(body);
   
    res.status(200).json({
      status : 200,
      data : 1,
      message : "SUCCESS"
    
    })

  } catch (error) {
    res.status(400).json({
      status : 400,
      message : error.message
    })
  }
  
})

// 포트폴리오 조회
router.get('/', function(req, res, next) {
  try {

      const result = protfolioService.getproject();

    res.status(200).json({
    status : 200,
    data : result,
    message : "SUCCESS"
    });
      
  } catch (error) {
    res.status(400).json({
      status : 400,
      message : error.message
    })
    
  }
  
});



module.exports = router;
