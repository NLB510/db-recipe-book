const express = require("express");

const db = require("../data/helpers/dishModel");

const router = express.Router();

router.get('/', (req, res) => {
  db.get()
    .then(dishes => {
      res.status(200).json(dishes);
    })
    .catch(error => {
      res.status(500).json({
        error: "There was an error retrieving the dish data."
      });
    });
})


module.exports = router;