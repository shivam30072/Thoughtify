const router = require("express").Router();
const {
  postTweet,
  getAllTweets,
  deleteTweetById,
  getTweetById,
  deleteAllTweets,
  replyToTweet,
  getAllParentTweets,
} = require("../../../Controllers/Tweet/tweetController");
const authMiddleware = require("../../../Middleware/authMiddleware");

router.post("/", authMiddleware, postTweet);
router.get("/allTweets", getAllTweets);
router.get("/allTweets/parent", getAllParentTweets);
router.delete("/delete/:id", authMiddleware, deleteTweetById);
router.get("/:id", getTweetById); // this needs auth middleware
router.delete("/deleteAll", deleteAllTweets);
router.post("/reply/:id", authMiddleware, replyToTweet);

module.exports = router;
