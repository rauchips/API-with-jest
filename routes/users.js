var express = require('express');
var router = express.Router();
var users = require('../database')

/* GET users listing. */
router.get('/', (req, res) => {
  res.json(users)
})

/* GET a specific user. */
router.get('/:id', (req, res) => {
  const foundUser = users.find(user => user.id === Number(req.params.id))
  res.json(foundUser)
})

module.exports = router;
