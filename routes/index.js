
var express = require('express');
var router = express.Router();
const knex = require('../db/knex');

/* GET home page. */
router.get('/', function(req, res, next) {
  return knex('users')
  .then(function(data){
    res.json(data);
  });
});

router.get('/games', function(req, res, next){
  return knex('game')
  .then(function(data){
    res.json(data);
  });
});

router.post('/games', function(req, res, next){
  knex('game').insert({
    type: req.body.type,
    p1_winner: req.body.p1_winner,
    time: new Date(),
    p1_score: req.body.p1_score,
    p2_score: req.body.p2_score,
    lat: req.body.lat,
    long: req.body.long
  })
  .then(function(data){
    res.json(data);
  });
});

module.exports = router;
