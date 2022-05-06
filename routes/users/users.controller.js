var express = require('express');
const userService = require('./users.service');
var router = express.Router();



// 회원가입
router.post('/', (req, res) => {
  try {
    const body = req.body;

    const result = userService.createUser(body)

    res.status(200).json({
      status: 200,
      data: result,
      message: "SUCCESS"
    })
  } catch (error) {
    res.status(400).json({
      status: 400,
      message: error.message
    })

  }
})


// 회워정보 수정
router.put('/', (req, res) => {
  try {
    const body = req.body;
    
    const result = userService.UpdateUser(body)

    res.status(200).json({
      status: 200,
      data: result,
      message: "SUCCESS"
    })
  } catch (error) {
    res.status(400).json({
      status: 400,
      message: error.message
    })

  }
})

// 회원 정보 삭제

router.delete('/', (req, res) => {
  try {
    const body = req.body;
    
    const result = userService.DeleteUser(body)

    res.status(200).json({
      status: 200,
      data: 1,
      message: "SUCCESS"
    })
  }
  catch (error) {
    res.status(400).json({
      status: 400,
      message: error.message
    })

  }
})



/* 회원 조회  200 : ok   300 : 중복   400 : 클라이언트 오류   500 : 서버 오류*/
router.get('/', function (req, res, next) {
  try {
    const result = userService.getUserList();

    res.status(200).json({
      status: 200,
      data: result,
      message: "SUCCESS"
    })
  } catch (error) {
    res.status(400).json({
      status: 400,
      message: error.message
    })
  }
});



module.exports = router;
