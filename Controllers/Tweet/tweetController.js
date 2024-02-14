const Tweet = require("../../Models/Tweets");
const { groupTweetsByParent } = require("../../helper");

const postTweet = async (req, res) => {
  if (!req.user) {
    return res
      .status(400)
      .json({ success: false, message: "User unauthorized" });
  }

  const { tweet } = req.body;
  if (!tweet) {
    return res
      .status(404)
      .json({ success: false, message: "tweet field is required" });
  }
  try {
    const Createdtweet = await Tweet.create({ tweet, user: req.user });
    await Createdtweet.populate("user");

    return res.status(200).json({
      success: true,
      data: Createdtweet,
      message: "tweet created",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, message: "Error occured" });
  }
};

const replyToTweet = async (req, res) => {
  const tweetId = req.params.id;
  const { tweet } = req.body;
  if (!req.user) {
    return res
      .status(400)
      .json({ success: false, message: "User unauthorized" });
  }
  if (!tweetId) {
    return res
      .status(404)
      .json({ success: false, message: "Parent Tweet Id missing" });
  }
  if (!tweet) {
    return res
      .status(404)
      .json({ success: false, message: "tweet field is required" });
  }
  try {
    const parentTweet = await Tweet.findOne({ _id: tweetId });
    if (!parentTweet) {
      return res
        .status(404)
        .json({ success: false, message: "Parent Tweet  not found" });
    }
    const replyTweet = await Tweet.create({
      tweet,
      user: req.user,
      parentTweet,
    });

    await replyTweet.populate("user parentTweet");
    return res.status(200).json({
      success: true,
      data: replyTweet,
      message: "Reply tweet created",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, message: "Error occured" });
  }
};

const getAllParentTweets = async (req, res) => {
  try {
    const allTweets = await Tweet.find().populate("user");

    const groupedTweets = groupTweetsByParent(allTweets);

    return res.status(200).json({
      success: true,
      data: groupedTweets,
      total: groupedTweets.length,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, message: "Error occured" });
  }
};

const deleteTweetById = async (req, res) => {
  try {
    const tweetId = req.params.id;
    const tweet = await Tweet.findOne({ _id: tweetId });

    if (!tweet) {
      return res
        .status(404)
        .json({ success: false, message: "Tweet not found" });
    }
    await Tweet.findByIdAndDelete({ _id: tweetId });
    return res.status(200).json({ success: true, data: tweet });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, message: "Error occured" });
  }
};

const getAllTweets = async (req, res) => {
  try {
    const tweets = await Tweet.find({}).populate("user");
    return res
      .status(200)
      .json({ success: true, data: tweets, total: tweets.length });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, message: "Error occured" });
  }
};

const deleteAllTweets = async (req, res) => {
  try {
    const tweets = await Tweet.deleteMany({});
    return res.status(200).json({
      success: true,
      total: tweets.deletedCount,
      message: `Deleted all tweets`,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, message: "Error occured" });
  }
};

const getTweetById = async (req, res) => {
  try {
    const tweetId = req.params.id;
    const tweet = await Tweet.findOne({ _id: tweetId });

    if (!tweet) {
      return res
        .status(404)
        .json({ success: false, message: "Tweet not found" });
    }
    return res.status(200).json({ success: true, data: tweet });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, message: "Error occured" });
  }
};

module.exports = {
  postTweet,
  deleteTweetById,
  getAllTweets,
  getAllParentTweets,
  getTweetById,
  deleteAllTweets,
  replyToTweet,
};
