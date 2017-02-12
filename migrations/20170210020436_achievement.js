
exports.up = function(knex, Promise) {
  return knex.schema.createTable('achievement', function(table){
    table.increments();
    table.text('name').notNullable();
    table.integer('value').defaultTo(10);
    table.integer('experience').defaultTo(15);
    table.text('trophy_url').defaultTo('https://adnauseous.files.wordpress.com/2009/12/toilet-trophy.jpg');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('achievement');
};
