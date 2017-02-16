var express = require('express');
var router = express.Router();
const knex = require('../db/knex');
const dotenv = require('dotenv').config();
const profile = require('../db/profile.js');
const encrypt = require('../db/encrypt.js');
var jwt = require('jsonwebtoken');

/* Get 'dem users */
router.get('/users', function(req, res, next) {
    return knex('users')
        .then(function(data) {
            res.json(data);
        });
});

router.get('/users/:id', function(req, res, next) {
    return knex('users').where('id', req.params.id)
        .then(data => {
            res.json(data)
        });
});

router.get('/profile', function(req, res){
  if(req.user) {
    return knex('users').where('email', req.user.email)
      .then(data =>{
        res.json(data)
      })
  } else {
    res.status(401);
    res.json({
      message: "UnAuthorized"
    });
  }
});

router.post('/signIn',(req,res,next)=>{
  knex('users')
  .select('id', 'email', 'password','users_name')
    .where('email',req.body.email)
      .first()
        .then((user)=>{
          if(user!==undefined){
            encrypt.decrypt(user.password,req.body.password)
              .then((result)=>{
                delete user.password;
                jwt.sign(user, process.env.TOKEN_SECRET, { expiresIn: '1d' }, function(error, token) {
                   console.log(error, token);
                   res.json({
                     token: token
                   });

                });
              })
            }else{
              next(new Error('invalid email!'))
         }
      })
})

router.post('/newuser', function(req,res,next){

  profile.checkIfProfileExists(req.body)
  .then(result=>{
    if (result === undefined){
      if(req.body.password === req.body.password2){
        req.body.password = encrypt.encrypt(req.body.password)
      .then(hashPass=>{
          //checking if passwords match
        console.log("passwords match, adding to database");
        return knex('users').insert({
          users_name: req.body.users_name,
          password: hashPass,
          email: req.body.email
        })
        .returning(['users_name','email'])
        .then(addedUser=>{
          console.log(addedUser)
          res.json(addedUser)
        })
      })
      }else{
        console.log("passwords do not match");
      }

    } else {
      console.log("user exists")
    }
  });
});

/* Get 'dem games */

router.get('/games', function(req, res, next) {
    return knex('game')
        .then(function(data) {
            res.json(data);
        });
});


router.get('/games_users',(req,res) => {
  knex.from('game')
    .select('game.id','game.type','game.time','game.is_active','users.id as userss_id','users.users_name')
    .innerJoin('users_game','users_game.game_id','game.id')
    .innerJoin('users','users.id','users_game.users_id')
    .where("game.is_active","pending")
    .then((data)=>{
      res.json(data)
    })
})

router.get('/games/:id', function(req, res, next) {
    return knex('game').where('id', req.params.id).first()
        .then(a_game => {
            res.json(a_game);
        });
});

router.post('/games', function(req, res, next) {
    return knex('game').insert({
            type: req.body.type,
            p1_winner: null,
            time: new Date(),
            p1_score: req.body.p1_score,
            p2_score: req.body.p2_score,
            // lat: req.body.lat,
            // long: req.body.long
        })
        .then(function(data) {
            // console.log(data)
            res.redirect('/games');
        });
});

/* Get Dem Wagers */

router.get('/wagers', function(req, res, next) {
    return knex('wager')
        .then(allWagers => {
            res.json(allWagers);
        });
});

router.get('/wagers/user/:user_id', function(req, res, next) {
    return knex('wager').where('p1_id', req.params.user_id)
        .orWhere('p2_id', req.params.user_id)
        .then(wagers => {
            res.json(wagers);
        });
});

router.get('/wagers/:id', function(req, res, next) {
    return knex('wager').where('id', req.params.id).first()
        .then(a_wager => {
            res.json(a_wager);
        });
});

router.get('/wagers/game/:game_id', function(req, res, next) {
    return knex('wager').where('game_id', req.params.game_id)
        .then(wagers => {
            res.json(wagers);
        });
});

router.post('/wagers', function(req, res, next) {
    return knex('wager').insert({
            game_id: req.body.game_id,
            p1_id: req.body.p1_id,
            p2_id: req.body.p2_id,
            amount: req.body.amount,
            winner_p1: req.body.winner_p1
        })
        .then(wagers => {
            res.json(wagers);
        });
});

router.get('/achievements', function(req, res, next) {
    return knex('achievement')
        .then(achievements => {
            res.json(achievements);
        });
});

router.post('/achievements', function(req, res, next) {
    return knex('achievement').insert({
            name: req.body.name,
            value: req.body.value,
            experience: req.body.experience,
            trophy_url: req.body.trophy_url
        })
        .then(achievements => {
            res.json(achievements);
        });
});

router.get('/achievements/user/:users_id', (req, res, next) => {
    return knex('users_achievement').where('users_id', req.params.users_id)
        .then(data => {
            res.json(data);
        });
});

router.post('/achievements/user/:users_id', (req, res, next) => {
    return knex('users_achievement').insert({
            users_id: req.body.users_id,
            achievement_id: req.body.achievement_id
        })
        .then(data => {
            res.json(data);
        });
});

router.get('/games/:game_id/:users_id', (req, res, next) => {
    return knex('users_game').where('game_id', req.params.game_id)
        .andWhere('users_id', req.params.users_id)
        .then(data => {
            res.json(data);
        });
});

router.post('/games/:games_id/user/:users_id', (req, res, next) => {
    return knex('users_game').insert({
            game_id: req.params.games_id,
            users_id: req.params.users_id
        })
        .then(data => {
            res.json(data);
        });
});

router.put('/user/:users_id', (req, res, next) => {

    let userInfo = {
        purse: req.body.purse,
        experience: req.body.experience,
        level: req.body.level,
        games_since_loss: req.body.games_since_loss,
        pong_games_played: req.body.pong_games_played,
        pong_games_won: req.body.pong_games_won,
        horse_games_played: req.body.horse_games_played,
        horse_games_won: req.body.horse_games_won,
        darts_games_played: req.body.darts_games_played,
        darts_games_won: req.body.darts_games_won,
        pool_games_played: req.body.pool_games_played,
        pool_games_won: req.body.pool_games_won,
        pro_games_played: req.body.pro_games_played,
        pro_games_won: req.body.pro_games_won
    };
    return knex('users')
        .where("id", req.params.users_id)
        .update(userInfo)
        .then(data => {
            res.json(data);
        });
});

router.put('/games/:games_id', (req, res) => {
    let updatedGame = {
        p1_score: req.body.p1_score,
        p2_score: req.body.p2_score,
        p1_winner: req.body.p1_winner,
        is_active: req.body.is_active
    };
    return knex('game').where("id", req.params.games_id)
        .update(updatedGame)
        .then((data) => {
            res.json(data);
        });
});


router.put('/wagers/:id', (req, res) => {
    return knex('wager').where("id", req.params.id)
        .update({
            winner_p1: req.params.winner_p1
        })
        .then(data => {
            res.json(data);
        });
});

router.delete('/users/:id', (req, res)=>{
  return knex('users').where('id', req.params.id).del()
  .then(id =>{
    res.send('user deleted');
  });
});

router.get('/games_users_wagers/',(req,res) => {
  knex.from('wager')
    .select('wager.amount','wager.winner_p1','p1_id','p2_id','winner_p1','wager.id as wagers_id'
      ,'game.id','game.type','game.p1_winner','game.time','game.p1_score','game.p2_score','game.is_active')
      .innerJoin('game','game.id','wager.game_id')
      .where({
          'game.is_active':'active'
      })
  .then((wagers)=>{
        extractInfo(wagers).then((information)=>{
            res.json(information)
          })
        })
      })

function extractInfo(array){
  let infoArray = [];
  let promises = []
    for(var i =0;i<array.length;i++){
      let player1_id = array[i].p1_id
      let player2_id = array[i].p2_id
      promises.push(knex('users').
      where('users.id', player1_id)
          .then((user) => {
              return knex('users').
              where('users.id', player2_id)
                  .then((user2) => {
                      return {
                          user1_name: user[0].users_name,
                          user2_name: user2[0].users_name,
                          amount: array[0].amount,
                          type: array[0].type,
                          time:array[0].time,
                          p1_score:array[0].p1_score,
                          p2_score:array[0].p2_score,
                      }
                  })
        }))
    }
    return Promise.all(promises)
}

module.exports = router;
