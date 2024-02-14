const mongoose = require("mongoose");

const TweetSchema = mongoose.Schema(
  {
    tweet: {
      type: String,
      required: true,
      trim: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    pic: {
      type: String,
    },
    parentTweet: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Tweet",
      default: null,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Tweet", TweetSchema);
