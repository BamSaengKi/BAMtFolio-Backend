var express = require('express');
var router = express.Router();

//  포트폴리오 기본값
var PortfolioLst =[
  {
    id : "bamsaengki",
    title : "프로젝트명",
    duration : "2022-01-01 ~ 2022-02-01",
    lang : "java, js",
    part : "90%",
    thumbnail : "",
    content : "",
    updateat : new Date()
  }

]

// 글 작성
router.post('/', (req,res)=> {
  try {
    const body = req.body;
    const {id} = body;

    const temp = PortfolioLst.filter(item =>{
      return id === item.id;
    });

    if(temp.length != 0){
      throw new Error("ㅋㅋ 아이디 하나당 게시물은 하나밖에 적을 수 ㅇ벗으셈 ㅋㅋ")
    }

    const newPortpolio = {
      ...body,
      updateat : new Date()
    }

    PortfolioLst.push(newPortpolio);

    res.status(200).json({
      status : 200,
      data : newPortpolio,
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
    const {id} = body;

    const temp = PortfolioLst.filter(item =>{
      return id === item.id;
    })

    if(temp.length ===0){
      throw new Error("수정한 정보가 없습니다.")
    }

    const updatePortfolio ={
      ...body,
      updateat : new Date()
    }

    const updatelist = PortfolioLst.map(item =>{
      if(id === item.id){
        return updatePortfolio;
      }

      return item;
    })

      PortfolioLst = updatelist

    res.status(200).json({
      status : 200,
      data : updatelist,
      message : "SUCCESS"
    })
    
  } catch (error) {
    res.status(400).json({
      status : 200,
      message : error.message
    })
  }

})

// 포트폴리오 조회
router.get('/', function(req, res, next) {
  try {
    res.status(200).json({
    status : 200,
    data : PortfolioLst,
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
