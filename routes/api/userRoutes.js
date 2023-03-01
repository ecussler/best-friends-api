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
router.route('/')
    .get(getUsers)
    .post(createUser);

// /api/users/:userId
router.route('/:userId')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser);

// /api/users/:userId/friends/friendId
router.route('/:userId/friends/:friendId')
    .post(addNewFriend)
    .delete(deleteFriend);


module.exports = router;