const express = require("express");

const db = require("../data/helpers/recipeModel");

const router = express.Router();


// GET

router.get('/', (req, res) => {
  db.getRecipes()
    .then(recipes => {
      res.status(200).json(recipes);
    })
    .catch(error => {
      res.status(500).json({
        error: "There was an error retrieving the recipe data."
      });
    });
})

// POST

router.post("/", (req, res) => {
  const { recipe_name, dish_id, instructions } = req.body;
  const recipe = req.body

  if (!recipe_name || !instructions || !dish_id) {
    return res.status(400).json({
      errorMessage: "Please include a recipe name, instructions and dish_id."
    });
  } else {
    db.addRecipe(recipe)
      .then(recipe => {
        console.log(recipe);
         res.status(201).json({
          message: "Recipe added successfully.",
          recipe
        });
      })
      .catch(err => {
        res.status(500).json({
          error: "There was an error saving to the database."
        });
      });
  }
});

module.exports = router;