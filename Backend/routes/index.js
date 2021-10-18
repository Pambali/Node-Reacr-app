var express = require('express');
var router = express.Router();

var users =[
  {
    "email":"abc@gmail.com", "password":"password"
  }
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("welcome to backend");
  });
 
router.get('/login',function(req,res){
  let result = users.find(user => user.email == req.body.email);
  if(result){
            if(result.password == req.body.password){
              res.status(200).send({
                message:"succeful login"
              })
            }else{
              res.status(200).send({
                message:"password incorrect"
              })
            }
          }else {
              res.status(200).send({
                message:"user not found"
              })
            }
})

module.exports = router;
