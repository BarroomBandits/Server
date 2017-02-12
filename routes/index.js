
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

router.get('/games', function(req, res, next){
  return knex('game')
  .then(function(data){
    res.json(data);
  });
});

router.get('/games/:id', function(req, res, next){
  return knex('game').where('id', req.params.id).first()
  .then(a_game=>{
    res.json(a_game);
  })
})

router.post('/games', function(req, res, next){

  return knex('game').insert({
    type: req.body.type,
    p1_winner: req.body.p1_winner,
    time: new Date(),
    p1_score: req.body.p1_score,
    p2_score: req.body.p2_score,
    lat: req.body.lat,
    long: req.body.long
  })
  .then(function(data){
    // console.log(data)
    res.redirect('/games');
  });
});


module.exports = router;
