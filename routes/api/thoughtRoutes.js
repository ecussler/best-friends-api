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

// /api/thoughts
router.route('/')
    .get(allThoughts)
    .post(createThought);

// /api/thoughts/:thoughtId
router.route('/:thoughtId')
    .get(getThoughtById)
    .put(updateThought)
    .delete(deleteThought); 

router.route('/:thoughtId/reactions')
    .post(addReaction); 
    // .delete(deleteReaction); 

router.route('/:thoughtId/reactions/:reactionId')
    .delete(deleteReaction); 

module.exports = router;