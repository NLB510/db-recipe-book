const db = require("../dbConfig");



module.exports = {
  getRecipes,
  addRecipe
};



function getRecipes() {
  return db
  .select('dishes.dish_name as Dish', 'recipes.recipe_name as Recipe')
  .from('recipes')
  .innerJoin('dishes', 'dishes.id', 'recipes.dish_id')
}

function getById(id) {
  return db("recipes")
    .where({ id })
    .first();
}

function addRecipe(recipe) {
  return db("recipes")
    .insert(recipe)
    .then(ids => {
      return getById(ids[0]);
    });
}