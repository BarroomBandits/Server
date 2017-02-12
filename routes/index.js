
var express = require('express');
var router = express.Router();
const knex = require('../db/knex');
const dotenv = require('dotenv').config();
const profile = require('../db/profile.js');
const encrypt = require('../db/encrypt.js');

/* GET home page. */
router.get('/users', function(req, res, next) {
  return knex('users')
  .then(function(data){
    res.json(data);
  });
});

router.get('/users/:id', function(req, res, next){
  return knex('users').where('id', req.params.id)
  .then(data=>{
    res.json(data)
  })
})

// router.post('/newuser', function(req,res,next){
//   profile.checkIfProfileExists(req.body)
//   .then(result=>{
//     if (result === undefined){
//       req.body.password = encrypt.encrypt(req.body.password)
//       .then(hashPass=>{
//         let newUser = {
//           users_name: req.body.username,
//           email: req.body.email,
//           password: hashPass,
//           avatar_url: req.body.avatar_url
//         }
//         console.log(newUser);
//       })
//     }
//   });
// });

module.exports = router;
