// all the routes related to user will be here

const {
  getAllUsers,
  deleteUserById,
  getUserById,
  addFollower,
  removeFollower,
  updateUser,
  acceptFollowRequest,
} = require("../../../Controllers/User/userController");
const authMiddleware = require("../../../Middleware/authMiddleware");

// url here is `/api/v1/user`
const router = require("express").Router();

router.get("/allUsers", getAllUsers);
router.get("/:id", getUserById);
router.delete("/:id", deleteUserById);
router.patch("/", authMiddleware, updateUser);
router.get("/addfollower/:id", authMiddleware, addFollower);
router.get("/removefollower/:id", authMiddleware, removeFollower);
router.get("/acceptreq/:id", authMiddleware, acceptFollowRequest);

module.exports = router;
