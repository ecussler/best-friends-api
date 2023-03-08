const { User } = require('../models'); 

module.exports = {
    // GET all users
    async getUsers(req, res) {
        await User.find()
        .then((users) => res.json(users))
        .catch((err) => res.status(500).json(err)); 
    }, 
    // GET user by ID
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
    // POST new user
    async createUser(req, res) {
        await User.create(req.body)
        .then((user) => res.json(user))
        .catch((err) => res.status(500).json(err))
    }, 
    // PUT update user by ID
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
  // DELETE user by ID
  async deleteUser(req, res) {
    await User.findOneAndRemove({ _id: req.params.userId })
    .then((user) => 
      !user
      ? res.status(404).json({ message: 'No user with this id!' })
      : res.json({ message: 'User has been deleted successfully.' })
    )
  },
  // ADD new friends and update user
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
  // DELETE friend by ID and update user
  async deleteFriend(req, res) {
    await User.findOneAndUpdate(
        { _id: req.params.userId }, 
        { $pull: {friends: req.params.friendId } }, 
        { new: true }
    )
    .then((user) => 
      !user
        ? res.status(404).json({ message: 'No user with this id!' })
        : res.json({ message: 'Friend has been deleted successfully.' })
    )
  },
};