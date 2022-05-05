var express = require('express');
var router = express.Router();

// 유저 기본값
var user  = [
{
  id: "bamsaengki",
  name : "오진우",
  birth : "1994-11-16",
  lang : "java, JS",
  title : "test",
  description : "test",
  createdat : new Date("2022-01-01"),
  updateat : new Date()
}

]
// 회원가입
router.post('/', (req, res)=> {
  try {
    const body = req.body;
    const {id} = body;

    const temp = user.filter(item =>{
      return id === item.id;
    });

      if(temp.length != 0){
        throw new Error("이미 가입된 아이디입니다.");
      }

  const newUser = {
    ...body,
    createdat : new Date()
  }

  user.push(newUser);

    res.status(200).json({
      status : 200,
      data : newUser,
      message : "SUCCESS"
    })
  } catch (error) {
    res.status(400).json({
      status : 400,
      message : error.message
    })   
    
  }
})


// 회워정보 수정
router.put('/', (req, res)=>{
  try {
    const body = req.body;
    const {id} = body;    

    const temp = user.filter(item =>{
      return id === item.id;
    });

    if(temp.length ===0){
      throw new Error("수정할 정보가 없습니다.")
    }

    const updateUser = {
      ...body,
      updateat : new Date()
    }
    
    const updatelist = user.map(item =>{
      if(id === item.id){
        return updateUser;
      }

        return item;
      
    });


      user = updatelist
  

    res.status(200).json({
      status : 200,
      data : updateUser,
      message : "SUCCESS"
    })
  } catch (error) {
    res.status(400).json({
      status : 400,
      message : error.message
    })
    
  }
})


/* 회원 조회  200 : ok   300 : 중복   400 : 클라이언트 오류   500 : 서버 오류*/
router.get('/', function(req, res, next) {
  try {
    res.status(200).json({
      status : 200,
      data : user,
      message : "SUCCESS"
    })    
  } catch (error) {
    res.status(400).json({
      status : 400,
      message : error.message
    })    
  }
  });
  


module.exports = router;
