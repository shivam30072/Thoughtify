const Notification = require("../../Models/Notification");
const User = require("../../Models/User");

const getUserById = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findOne({ _id: userId }).populate("notifications");

    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }
    return res.status(200).json({ success: true, data: user });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, message: "Error occured" });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({}).populate("notifications");
    return res
      .status(200)
      .json({ success: true, data: users, total: users.length });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, message: "Error occured" });
  }
};

const deleteUserById = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findOne({ _id: userId });

    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }
    await User.findByIdAndDelete({ _id: userId });
    return res.status(200).json({ success: true, data: user });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, message: "Error occured" });
  }
};

const updateUser = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      { _id: req.user._id },
      req.body,
      { new: true }
    );

    if (!updatedUser) {
      return res
        .status(404)
        .json({ success: false, message: "user not found" });
    }

    return res
      .status(200)
      .json({ success: true, message: "user updated", data: updatedUser });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, message: "Error occured" });
  }
};

const addFollower = async (req, res) => {
  const followerUserId = req.params.id;

  try {
    const followedUser = await User.findOne({ _id: followerUserId });
    const user = await User.findOne({ _id: req.user._id });

    if (!followedUser) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    // if a person has public profile
    if (followedUser.public) {
      // Add the follower to the followed user's followers list if not already present

      const isAlreadyFollowing = followedUser.followers.some((follower) =>
        follower.equals(req.user._id)
      );

      if (!isAlreadyFollowing) {
        followedUser.followers.push(req.user);

        // Add the followed user to the follower's following list
        user.following.push(followedUser);

        await followedUser.save();
        await user.save();
        return res
          .status(200)
          .json({ success: true, data: [user, followedUser] });
      }
      return res
        .status(200)
        .json({ success: true, message: "user already followed" });
    }

    // if a user has private profile
    const notification = {
      type: "follow_request",
      sender: req.user._id,
      reciever: followedUser._id,
    };

    const existingNotification = await Notification.findOne(notification);

    if (!existingNotification) {
      const notificationCreated = await Notification.create(notification);

      followedUser.notifications.push(notificationCreated);
      await followedUser.save();

      return res.status(200).json({
        success: true,
        message: "Follow request sent to user",
        data: followedUser,
      });
    }

    return res.status(400).json({
      success: true,
      message: "Follow request already sent",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, message: "Error occured" });
  }
};

const removeFollower = async (req, res) => {
  const followerUserId = req.params.id;

  try {
    const followedUser = await User.findOne({ _id: followerUserId });
    const user = await User.findOne({ _id: req.user._id });

    if (!followedUser) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    const isFollowing = followedUser.followers.some((follower) =>
      follower.equals(req.user._id)
    );

    if (isFollowing) {
      const followerIndex = followedUser.followers.findIndex(
        (follower) => follower._id === req.user._id
      );

      followedUser.followers.splice(followerIndex, 1);

      const followingIndex = user.following.findIndex(
        (followed) => followed._id === followedUser._id
      );

      user.following.splice(followingIndex, 1);

      await followedUser.save();
      await user.save();
      return res
        .status(200)
        .json({ success: true, data: [user, followedUser] });
    }
    return res.status(200).json({ success: true, message: "user not found" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, message: "Error occured" });
  }
};

const acceptFollowRequest = async (req, res) => {
  const requestedUserId = req.params.id;

  try {
    const requestedUser = await User.findOne({ _id: requestedUserId });
    const user = await User.findOne({ _id: req.user._id });

    if (!requestedUser) {
      return res.status(404).json({
        success: false,
        message: "Requested User not found",
      });
    }

    const isAlreadyAFollower = user.followers.some((follower) =>
      follower.equals(requestedUserId)
    );

    if (!isAlreadyAFollower) {
      user.followers.push(requestedUser);

      requestedUser.following.push(req.user);

      await requestedUser.save();
      await user.save();
      return res
        .status(200)
        .json({ success: true, data: [user, requestedUser] });
    }
    return res
      .status(200)
      .json({ success: true, message: "user already followed" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, message: "Error occured" });
  }
};

module.exports = {
  getAllUsers,
  deleteUserById,
  getUserById,
  addFollower,
  removeFollower,
  updateUser,
  acceptFollowRequest,
};
