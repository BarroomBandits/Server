let knex = require('./knex.js');

module.exports = {

  checkIfProfileExists: function(profile) {
    return knex('users').select().where('users_name', profile.username).first()
  }

  // storeNewProfile: function(newProfile) {
  //   return knex.insert({
  //     email: newProfile.email,
  //     password: newProfile.password,
  //     first_name: newProfile.first_name,
  //     last_name: newProfile.last_name
  //   }).into('profile').returning('id').then((id)=>{return id;});
  // }


}
