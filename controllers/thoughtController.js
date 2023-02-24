const { Thought, User } = require('../models');

module.exports = {
    async allThoughts(req, res) {
        await Thought.find()
        .then((thought) => res.json(thought))
        .catch((err) => res.status(500).json(err)); 
    }, 
    async getThoughtById(req, res) {
        await Thought.findOne({ _id: req.params.thoughtId })
        .select('-__v')
        .populate('thoughts')
        .then((thought) =>
          !thought
            ? res.status(404).json({ message: 'No thought with that ID' })
            : res.json(Thought)
        )
    }, 
    async createThought(req, res) {
        await Thought.create(req.body)
        .then((thought) => {
            return User.findOneAndUpdate(
                { _id: req.ody.userId }, 
                { $addToSet: { thoughts: thought._id } }, 
                { new: true }
            )
        })
        .then((user) =>
          !user
            ? res.status(404).json({ message: 'Thought created, but not user with that ID found.' })
            : res.json('Created video')
        )
        .catch((err) => res.status(500).json(err))
    }, 
    async updateThought(req, res) {
        await Thought.findOneAndUpdate(
            {_id: req.params.thoughtId }, 
            { $set: req.body }, 
            { runValidators: true, new: true }
        )
        .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No thought with this id!' })
          : res.json(thought)
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  async deleteThought(req, res) {
    await Thought.findOneAndRemove({ _id: req.params.thoughtId })
    .then((thought) => 
      !thought
      ? res.status(404).json({ message: 'No thought with this id!' })
      : res.json({ message: 'Thought has been deleted successfully.' })
    )
  },
  async addReaction(req, res) {
    await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId }, 
        { $addToSet: { reactions: req.body } }, 
        { runValidators: true, new: true } 
    )
    .then((thought) =>
      !thought
          ? res.status(404).json({ message: 'No thought with this id!' })
          : res.json(thought)
    )
    .catch((err) => {
     console.log(err);
    res.status(500).json(err);
    });
  }, 
  async deleteReaction(req, res) {
    await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId }, 
        { $pull: { reactions: { reactionId: req.params.reactionId } } }, 
        { runValidators: true, new: true } 
    )
    .then((thought) => 
      !thought
        ? res.status(404).json({ message: 'No thought with this id!' })
        : res.json({ message: 'Reaction has been deleted successfully.' })
    )

  }
}
