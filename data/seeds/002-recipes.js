
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes')
  .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("recipes").insert([
        {
          id: 1,
          dish_name: "Tex Tacos",
          dish_id: 1,
          instructions: "Testing instruction"
        },
        {
          id: 2,
          dish_name: "Cheese Pizza",
          dish_id: 2,
          instructions: "Testing instruction"
        },
        {
          id: 3,
          dish_name: "Baked Salmon",
          dish_id: 3,
          instructions: "Testing instruction"
        },
        {
          id: 4,
          dish_name: "Seattle Tacos",
          dish_id: 1,
          instructions: "Testing instruction"
        },
        {
          id: 5,
          dish_name: "Pepperoni Pizza",
          dish_id: 2,
          instructions: "Testing instruction"
        },
        {
          id: 6,
          dish_name: "Pan Fried Salmon",
          dish_id: 3,
          instructions: "Testing instruction"
        }
      ]);
    });
};
