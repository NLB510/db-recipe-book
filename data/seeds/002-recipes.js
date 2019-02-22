
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes')
  .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("recipes").insert([
        {
          id: 1,
          recipe_name: "Tex Tacos",
          dish_id: 1,
          instructions: "Testing instruction"
        },
        {
          id: 2,
          recipe_name: "Cheese Pizza",
          dish_id: 2,
          instructions: "Testing instruction"
        },
        {
          id: 3,
          recipe_name: "Baked Salmon",
          dish_id: 3,
          instructions: "Testing instruction"
        },
        {
          id: 4,
          recipe_name: "Seattle Tacos",
          dish_id: 1,
          instructions: "Testing instruction"
        },
        {
          id: 5,
          recipe_name: "Pepperoni Pizza",
          dish_id: 2,
          instructions: "Testing instruction"
        },
        {
          id: 6,
          recipe_name: "Pan Fried Salmon",
          dish_id: 3,
          instructions: "Testing instruction"
        }
      ]);
    });
};
