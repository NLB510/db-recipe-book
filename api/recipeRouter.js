const express = require("express");

const db = require("../data/helpers/recipeModel");

const router = express.Router();


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


module.exports = router;