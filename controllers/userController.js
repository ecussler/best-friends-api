const { User } = require('../models'); 

module.exports = {
    getUsers(req, res) {
        User.find()
        .then((users) => res.json(users))
        .catch((err) => res.status(500).json(err)); 
    }, 
    getUserById(req, res) {
        User.findOne({ _id: req.params.userId })
        .select('-__v')
        .populate('thoughts')
        .then((user) =>
          !user
            ? res.status(404).json({ message: 'No user with that ID' })
            : res.json(user)
        )
    }, 
    createUser(req, res) {
        User.create(req.body)
        .then((user) => res.json(user))
        .catch((err) => res.status(500).json(err))
    }, 
    updateUser(req, res) {
        User.findOneAndUpdate(
            {_id: req.params.userId }, 
            { $set: req.body }, 
            { runValidators: true, new: true }
        )
        .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user with this id!' })
          : res.json(user)
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  deleteUser(req, res) {
    User.findOneAndRemove({ _id: req.params.userId })
    .then((user) => 
      !user
      ? res.status(404).json({ message: 'No user with this id!' })
      : res.json({ message: 'User has been deleted successfully.' })
    )
  },
  addNewFriend(req, res) {
    User.findOneAndUpdate(
        { _id: req.params.userId }, 
        { $addToSet: {friends: req.body } }, 
        { runValidators: true, new: true }
    )
    .then((user) => 
      !user
        ? res.status(404).json({ message: 'No user with this id!' })
        : res.json(user)
    )
  }, 
  deleteFriend(req, res) {
    User.findOneAndUpdate(
        { _id: req.params.userId }, 
        { $pull: {friends: { userId: req.params.userId } } }, 
        { runValidators: true, new: true }
    )
    .then((user) => 
      !user
        ? res.status(404).json({ message: 'No user with this id!' })
        : res.json({ message: 'Friend has been deleted successfully.' })
    )
  },
};