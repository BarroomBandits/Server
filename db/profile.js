let knex = require('./knex.js');

module.exports = {

  checkIfProfileExists: function(profile) {
    return knex('users').select().where('users_name', profile.users_name).first()
  }
}
