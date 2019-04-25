var express = require('express');
var router = express.Router();
const SqlRunner = require('../db/sql_runner');


router.get('/', function(req, res){
  SqlRunner.run('SELECT * FROM pizza').then(result => {
    res.status(200).json(result.rows);
  });
});

// router.delete('/:id', function(req, res){
//   SqlRunner.run("DELETE FROM pizzas WHERE id = $1", [req.params.id])
//     .then((result) => {
//       res.status(200).json(result);
//     });
// });
//
// router.delete('/title/:title', function(req, res){
//   console.log(req.params.);
//   SqlRunner.run("DELETE FROM books WHERE title = $1", [req.params.])
//   .then(result => {
//     SqlRunner.run("SELECT * FROM books ORDER BY title ASC").then(result => {
//       res.status(201).json(result.rows)
//     });
//   });
// });
//
// router.post("/", function(req, res) {
//   SqlRunner.run(
//     "INSERT INTO books () VALUES ($1, $2, $3)",
//     [req.body., req.body., req.body.]
//   ).then(result => {
//     SqlRunner.run("SELECT * FROM books ORDER BY title ASC").then(result => {
//       res.status(201).json(result.rows);
//     });
//   });
// });
//
router.put('/:id', function(req, res){
  SqlRunner.run(
    "UPDATE pizza SET name=$1, price=$2, image_url=$3, popularity=$4+1 WHERE id=$5",
    [req.body.name, req.body.price, req.body.image_url, req.body.popularity, req.params.id]
  ).then(result => {
    SqlRunner.run("SELECT * FROM pizza ORDER BY title ASC").then(result => {
      res.status(201).json(result.rows);
    });
  });
})




module.exports = router;
