
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "users_achievement"; ALTER SEQUENCE users_achievement_id_seq RESTART WITH 5')
    .then(function () {
      const users_achievements = [{
        id: 1,
        users_id: 1,
        achievement_id: 2
      }, {
        id: 2,
        users_id: 3,
        achievement_id: 3
      }, {
        id: 3,
        users_id: 2,
        achievement_id: 4
      }, {
        id: 4,
        users_id: 4,
        achievement_id: 4
      }];
      return knex('users_achievement').insert(users_achievements);
    });
};
