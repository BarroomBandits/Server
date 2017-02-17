
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "game"; ALTER SEQUENCE game_id_seq RESTART WITH 5')
    .then(function () {
      const games = [{
        id: 1,
        type: "H-O-R-S-E",
        creator: "Matt",
        // creator_id: 2,
        p1_winner: true,
        time: new Date(),
        p1_score: 5,
        p2_score: 1,
        lat: 39.7392,
        long: -104.9903,
        is_active: "pending"
      }, {
        id: 2,
        type: "Ping Pong",
        creator: "Darren",
        // creator_id: 3,
        p1_winner: false,
        time: new Date(),
        p1_score: 11,
        p2_score: 21,
        lat: 39.9042,
        long: 116.4074,
        is_active: "active"
      }, {
        id: 3,
        type: "Pool",
        creator: "Mark",
        // creator_id: 1,
        p1_winner: false,
        time: new Date(),
        p1_score: 3,
        p2_score: 8,
        lat: -37.8136,
        long: 144.9631,
        is_active: "complete"
      }, {
        id: 4,
        type: "Darts",
        creator: "Ike",
        // creator_id: 7,
        p1_winner: false,
        time: new Date(),
        p1_score: 6,
        p2_score: 21,
        lat: 46.7712,
        long: 23.6236,
        is_active: "active"
      }];
      return knex('game').insert(games);
    });
};
