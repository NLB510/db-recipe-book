
exports.up = function(knex, Promise) {
  return knex.schema.createTable('dishes', function(tbl) {
    tbl.increments()

    tbl.string('dish_name', 100).notNullable()
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.droptTableIfExists('dishes');
};
