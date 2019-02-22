const db = require("../dbConfig");

module.exports = {
  getDishes,
  addDish,
  getById,
  getDish
};

function getDishes() {
  return db("dishes");
}

function getDish(id) {
  return db
    .select("ingredients.ingredient_name AS DishIngredients")
    .from("dishes")
    .innerJoin(
      "recipe_ingredients",
      "dishes.id",
      "recipe_ingredients.recipe_id "
    )
    .innerJoin(
      "ingredients",
      "recipe_ingredients.ingredient_id",
      "ingredients.id"
    )
    .where({ 'dishes.id': id });
}

function getById(id) {
  return db("dishes")
    .where({ id })
    .first();
}

function addDish(dish) {
  return db("dishes")
    .insert(dish)
    .then(ids => {
      return getById(ids[0]);
    });
}
