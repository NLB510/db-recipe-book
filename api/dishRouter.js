const express = require("express");

const db = require("../data/helpers/dishModel");

const router = express.Router();



// GET
router.get('/', (req, res) => {
  db.getDishes()
    .then(dishes => {
      res.status(200).json(dishes);
    })
    .catch(error => {
      res.status(500).json({
        error: "There was an error retrieving the dish data."
      });
    });
})


router.get("/:id", (req, res) => {
  const {id} = req.params;
  
  db.getDish(id)
    .then(dishIngredients => {
      res.status(200).json(dishIngredients);
    })
    .catch(error => {
      res.status(500).json({
        error: "There was an error retrieving the dish data."
      });
    });
});

// POST

router.post("/", (req, res) => {
  const { dish_name } = req.body;
  const dish = req.body;

  if (!dish_name) {
    res.status(400).json({
      errorMessage: "Please include a dish name"
    });
  } else {
    db.addDish(dish)
    .then(dish => {
      console.log(dish)
      return res.status(201).json({
        message: "Dish added successfully.",
        dish
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