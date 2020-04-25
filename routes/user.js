var express = require('express');
var router = express.Router();


router.get('/', (req, res, next) =>{
    res.send([
        {
        'id':1,
        "image": "https://placeimg.com/64/64/1",
        'name' : '홍길동',
        'birthday' : '961222',
        'gender' : '남자',
        'job' : '프로그래머'
      },
      {
        'id':2,
        "image": "https://placeimg.com/64/64/2",
        'name' : '박준수',
        'birthday' : '950929',
        'gender' : '남자',
        'job' : '대학생'
      },
      {
        'id':3,
        "image": "https://placeimg.com/64/64/3",
        'name' : '이자',
        'birthday' : '157213',
        'gender' : '여성',
        'job' : '직업군인'
      }
]);
});

module.exports = router;