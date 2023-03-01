const router = require('express').Router();

const {
  allThoughts, 
  getThoughtById, 
  createThought,
  updateThought, 
  deleteThought, 
  addReaction, 
  deleteReaction,
} = require('../../controllers/thoughtController');

// /api/users
router.route('/')
    .get(allThoughts)
    .post(createThought);

// /api/users/:userId
router.route('/:thoughtId')
    .get(getThoughtById)
    .put(updateThought)
    .delete(deleteThought); 

router.route('/:thoughtId/reactions')
    .post(addReaction)
    .delete(deleteReaction); 

module.exports = router;