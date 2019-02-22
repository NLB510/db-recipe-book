const db = require('../dbConfig');


module.exports = {
  get,
}



function get() {
  return db('dishes')
}


function addDish(dish) {
  return('dishes')
  .insert(dish)
  .then(ids => {
      return getById(ids[0]);
    });
}