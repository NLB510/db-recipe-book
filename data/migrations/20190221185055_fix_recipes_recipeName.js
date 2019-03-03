
exports.up = function(knex, Promise) {
  return knex.schema.hasTable("recipes").then(function(exists) {
    if (exists) {
      return knex.schema.table("recipes", function(tbl) {
        tbl.renameColumn("dish_name", "recipe_name");
      });
    }
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table("recipes", function(tbl) {
    tbl.renameColumn("recipe_name", "dish_name");
  });
};
