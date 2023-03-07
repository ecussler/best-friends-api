const { User } = require('../models'); 

module.exports = {
    async getUsers(req, res) {
        await User.find()
        .then((users) => res.json(users))
        .catch((err) => res.status(500).json(err)); 
    }, 
    async getUserById(req, res) {
        await User.findOne({ _id: req.params.userId })
        .select('-__v')
        .populate('thoughts')
        .then((user) =>
          !user
            ? res.status(404).json({ message: 'No user with that ID' })
            : res.json(user)
        )
    }, 
    async createUser(req, res) {
        await User.create(req.body)
        .then((user) => res.json(user))
        .catch((err) => res.status(500).json(err))
    }, 
    async updateUser(req, res) {
        await User.findOneAndUpdate(
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
  async deleteUser(req, res) {
    await User.findOneAndRemove({ _id: req.params.userId })
    .then((user) => 
      !user
      ? res.status(404).json({ message: 'No user with this id!' })
      : res.json({ message: 'User has been deleted successfully.' })
    )
  },
  async addNewFriend(req, res) {
    await User.findOneAndUpdate(
        { _id: req.params.userId }, 
        { $addToSet: {friends: req.params.friendId } }, 
        { new: true }
    )
    // .then(console.log(friendId, userId))
    .then((user) => 
      !user
        ? res.status(404).json({ message: 'No user with this id!' })
        : res.json(user)
    )
  }, 
  async deleteFriend(req, res) {
    await User.findOneAndUpdate(
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