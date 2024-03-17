const Notification = require("../../Models/Notification");

const getAllNotifications = async (req, res) => {
  try {
    const notifications = await Notification.find({});
    return res.status(200).json({
      success: true,
      data: notifications,
      total: notifications.length,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, message: "Error occured" });
  }
};

module.exports = {
  getAllNotifications,
};
