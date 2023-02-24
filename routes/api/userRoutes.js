const router = require('express').Router();
const {
  getUsers,
  getUserById,
  createUser,
  updateUser, 
  deleteUser, 
  addNewFriend, 
  deleteFriend
} = require('../../controllers/userController');

// /api/users
router.route('/').get(getUsers).post(createUser);

// /api/users/:userId
router.route('/:userId').get(getSingleUser);

module.exports = router;