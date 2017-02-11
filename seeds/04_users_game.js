
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "users_game"; ALTER SEQUENCE users_game_id_seq RESTART WITH 5')
    .then(function () {
      const users_games = [{
        id: 1,
        users_id: 2,
        game_id: 3,
      }, {
        id: 2,
        users_id: 3,
        game_id: 3
      }, {
        id: 3,
        users_id: 1,
        game_id: 4,
      }, {
        id: 4,
        users_id: 4,
        game_id: 4
      }];
      return knex('users_game').insert(users_games)
    });
};
