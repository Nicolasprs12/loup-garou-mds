const mongoose = require("mongoose");

const gameSchema = new mongoose.Schema({
  host: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },

  id_users: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],

  composition: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Character",
    },
  ],

  private: {
    type: Boolean,
    required: true,
  },

  password: {
    type: String,
  },
});


gameSchema.methods.compareUsers = function (user, cb) {
  console.log('user test: ', user)
  // TODO: renvoie true ou false si user est trouvé
  cb(null, true)
};

const Game = mongoose.model("Game", gameSchema);

module.exports = Game;
