
exports.up = function(knex, Promise) {
  return knex.schema.createTable('game', function(table){
    table.increments();
    table.text('type').notNullable();
    table.boolean('p1_winner');
    table.dateTime('time').notNullable();
    table.integer('p1_score').notNullable();
    table.integer('p2_score').notNullable();
    table.float('lat');
    table.float('long');
    table.text('is_active').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('game');
};
