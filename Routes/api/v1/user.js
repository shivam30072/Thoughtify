// all the routes related to user will be here

const {
  getAllUsers,
  deleteUserById,
  getUserById,
} = require("../../../Controllers/User/userController");

// url here is `/api/v1/user`
const router = require("express").Router();

router.get("/allUsers", getAllUsers);
router.get("/:id", getUserById);
router.delete("/:id", deleteUserById);

module.exports = router;
