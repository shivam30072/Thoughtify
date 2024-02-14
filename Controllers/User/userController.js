const User = require("../../Models/User");

const getUserById = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findOne({ _id: userId });

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
    const users = await User.find({});
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

module.exports = { getAllUsers, deleteUserById, getUserById };
