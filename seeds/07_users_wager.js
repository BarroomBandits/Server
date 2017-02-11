
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "users_wager"; ALTER SEQUENCE users_wager_id_seq RESTART WITH 5')
    .then(function () {
      const users_wagers = [{
        id: 1,
        users_id: 2
      }, {
        id: 2,
        users_id: 5,
      }, {
        id: 3,
        users_id: 4,
      }, {
        id: 4,
        users_id: 1
      }];
      return knex('users_wager').insert(users_wagers);
    });
};
