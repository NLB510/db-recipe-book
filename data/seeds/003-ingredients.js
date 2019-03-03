
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("ingredients").insert([
        { id: 1, ingredient_name: "Flour" },
        { id: 2, ingredient_name: "Salt" },
        { id: 3, ingredient_name: "Pepperoni" },
        { id: 4, ingredient_name: "Salmon" },
        { id: 5, ingredient_name: "Taco Shells" },
        { id: 6, ingredient_name: "Sauce" },
        { id: 7, ingredient_name: "Salsa" },
        { id: 8, ingredient_name: "Tomato" },
        { id: 9, ingredient_name: "Cheese" }
      ]);
    });
};
