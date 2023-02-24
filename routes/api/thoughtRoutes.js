const router = require('express').Router();
const {
  allThoughts, 
  getThoughtbId, 
  createThought,
  updateThought, 
  deleteThought, 
  addReaction, 
  deleteReaction,
} = require('../../controllers/thoughtController');

// /api/users
router.route('/').get(getUsers).post(createUser);

// /api/users/:userId
router.route('/:userId').get(getSingleUser);

module.exports = router;