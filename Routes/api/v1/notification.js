const {
  getAllNotifications,
} = require("../../../Controllers/Notification/notification");

const router = require("express").Router();

router.get("/getAll", getAllNotifications);

module.exports = router;
