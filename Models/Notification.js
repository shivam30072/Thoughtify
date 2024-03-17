const mongoose = require("mongoose");

const NotificationSchema = mongoose.Schema(
  {
    type: { type: String, required: true },
    sender: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    reciever: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },

  { timestamps: true }
);

module.exports = mongoose.model("Notification", NotificationSchema);
