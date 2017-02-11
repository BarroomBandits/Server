
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "wager"; ALTER SEQUENCE wager_id_seq RESTART WITH 5')
  .then(function(){
    const wagers = [{
      id: 1,
      game_id: 3,
      p1_id: 4,
      p2_id: 3,
      amount: 30,
      winner_p1: true
    }, {
      id: 2,
      game_id: 1,
      p1_id: 2,
      p2_id: 3,
      amount: 10,
      winner_p1: false
    }, {
      id: 3,
      game_id: 4,
      p1_id: 5,
      p2_id: 2,
      amount: 500,
      winner_p1: false
    }, {
      id: 4,
      game_id: 2,
      p1_id: 2,
      p2_id: 4,
      amount: 80,
      winner_p1: true
    }];
    return knex('wager').insert(wagers);
  });
};
