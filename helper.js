const groupTweetsByParent = (tweets) => {
  const groupedTweets = [];

  const topLevelTweets = tweets.filter((tweet) => !tweet.parentTweet);

  const findReplies = (parentTweetId) => {
    const replies = tweets.filter(
      (tweet) => String(tweet.parentTweet) === String(parentTweetId)
    );
    if (replies.length > 0) {
      const repliesWithNestedReplies = replies.map((reply) => {
        return {
          tweet: reply,
          replies: findReplies(reply._id),
        };
      });
      return repliesWithNestedReplies;
    }
    return [];
  };

  topLevelTweets.forEach((tweet) => {
    const tweetWithReplies = {
      tweet: tweet,
      replies: findReplies(tweet._id),
    };
    groupedTweets.push(tweetWithReplies);
  });

  return groupedTweets;
};

module.exports = { groupTweetsByParent };
