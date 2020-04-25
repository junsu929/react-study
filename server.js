const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


// 라우터 객체생성
var UserRouter = require('./routes/user');

// 라우터 객체등록
// user.js에서 실행되는 항목은 반드시, localhost:3030/user/ 로 시작한다.
// 또한, 밑처럼 /user로 경로가 지정된 경우, 정보를 보낼 때, '/' 형식으로 해야 'localhost:0000/user/' 형식으로 
// 보낼 수 있다.
app.use('/user', UserRouter);



app.listen(port, () => console.log(`Listening on Port ${port}`));