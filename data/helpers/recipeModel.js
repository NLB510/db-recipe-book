const db = require("../dbConfig");



module.exports =  {
  getRecipes,
}



function getRecipes() {
  return db
  .select('dishes.dish_name as Dish', 'recipes.recipe_name as Recipe')
  .from('recipes')
  .innerJoin('dishes', 'dishes.id', 'recipes.dish_id')
}