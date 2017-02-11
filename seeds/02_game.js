
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "game"; ALTER SEQUENCE game_id_seq RESTART WITH 5')
    .then(function () {
      const games = [{
        id: 1,
        type: 3,
        p1_winner: true,
        time: new Date(),
        p1_score: 21,
        lat: 39.7392,
        long: -104.9903
      }, {
        id: 2,
        type: 8,
        p1_winner: false,
        time: new Date(),
        p1_score: 11,
        lat: 39.9042,
        long: 116.4074
      }, {
        id: 3,
        type: 1,
        p1_winner: false,
        time: new Date(),
        p1_score: 0,
        lat: -37.8136,
        long: 144.9631
      }, {
        id: 4,
        type: 10,
        p1_winner: false,
        time: new Date(),
        p1_score: 6,
        lat: 46.7712,
        long: 23.6236
      }];
      return knex('game').insert(games);
    });
};
