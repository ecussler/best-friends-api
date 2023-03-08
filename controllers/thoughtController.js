const { Thought, User } = require('../models');

module.exports = {
    // GET all thoughts
    async allThoughts(req, res) {
        await Thought.find()
        .then((thought) => res.json(thought))
        .catch((err) => res.status(500).json(err)); 
    }, 
    // GET single thought by ID
    async getThoughtById(req, res) {
        await Thought.findOne({ _id: req.params.thoughtId })
        .select('-__v')
        .populate('reactions')
        .then((thought) =>
          !thought
            ? res.status(404).json({ message: 'No thought with that ID' })
            : res.json(thought)
        )
    }, 
    // POST new thought
    async createThought(req, res) {
        await Thought.create(req.body)
        .then((thought) => {
            return User.findOneAndUpdate(
                { _id: req.body.userId }, 
                { $addToSet: { thoughts: thought._id } }, 
                { new: true }
            )
        })
        .then((user) =>
          !user
            ? res.status(404).json({ message: 'Thought created, but not user with that ID found.' })
            : res.json('Created thought')
        )
        .catch((err) => res.status(500).json(err))
    }, 
    // PUT call to update thought by ID
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
  // DELETE thought by ID
  async deleteThought(req, res) {
    await Thought.findOneAndRemove({ _id: req.params.thoughtId })
    .then((thought) => {
      if (!thought) {
        return res.status(404).json({ message: 'No thought with that ID.' })
      }
      
      return User.findOneAndUpdate(
        { thoughts: req.params.thoughtId }, 
        { $pull: { thoughts: req.params.thoughtId } },
        { new: true }
      );
    })
    .then((user) => {
      if (!user) {
        return res.status(404).json({ message: 'No user with that thoughtId associated.'})
      }
      res.json({ message: 'Thought successfully deleted.'});
    });
  },
  // POST to create new reaction for a thought
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
  // DELETE reaction by ID and update the thought
  async deleteReaction(req, res) {
    await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId }, 
        { $pull: { reactions: req.params.reactionId } }, 
        { runValidators: true, new: true } 
    )
    .then((thought) => 
      !thought
        ? res.status(404).json({ message: 'No thought with this id!' })
        : res.json({ message: 'Reaction has been deleted successfully.' })
    )

  }
}
