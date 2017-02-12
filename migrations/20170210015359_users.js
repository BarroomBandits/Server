
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function(table){
    table.increments();
    table.text('users_name').notNullable();
    table.text('email').notNullable();
    table.text('password').notNullable();
    table.integer('purse').defaultTo(100);
    table.integer('experience').defaultTo(0);
    table.integer('level').defaultTo(1);
    table.text('avatar_url').defaultTo('http://theawesomer.com/photos/2010/06/060410_Facebook_profile_pic_2.jpg');
    table.integer('games_since_loss').defaultTo(0);
    table.integer('pong_games_played').defaultTo(0);
    table.integer('pong_games_won').defaultTo(0);
    table.integer('horse_games_played').defaultTo(0);
    table.integer('horse_games_won').defaultTo(0);
    table.integer('darts_games_played').defaultTo(0);
    table.integer('darts_games_won').defaultTo(0);
    table.integer('pool_games_played').defaultTo(0);
    table.integer('pool_games_won').defaultTo(0);
    table.integer('pro_games_played').defaultTo(0);
    table.integer('pro_games_won').defaultTo(0);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users');
};
