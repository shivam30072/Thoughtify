const router = require("express").Router();
const {
  postTweet,
  getAllTweets,
  deleteTweetById,
  getTweetById,
  deleteAllTweets,
  replyToTweet,
  getAllParentTweets,
  likeTweetById,
  dislikeTweetById,
  getAllTweetsOfUser,
  updateTweetById,
} = require("../../../Controllers/Tweet/tweetController");
const authMiddleware = require("../../../Middleware/authMiddleware");

router.post("/", authMiddleware, postTweet);
router.get("/allTweets", getAllTweets);
router.get("/allTweets/parent", getAllParentTweets);
router.get("/allTweets/user", authMiddleware, getAllTweetsOfUser);
router.delete("/delete/:id", authMiddleware, deleteTweetById);
router.get("/:id", getTweetById); // this needs auth middleware
router.delete("/deleteAll", deleteAllTweets);
router.post("/reply/:id", authMiddleware, replyToTweet);
router.patch("/like/:id", authMiddleware, likeTweetById);
router.patch("/dislike/:id", authMiddleware, dislikeTweetById);
router.patch("/update/:id", authMiddleware, updateTweetById);

module.exports = router;
