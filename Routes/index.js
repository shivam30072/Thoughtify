// this is the root file for api
// URL here is '/api'
const jwt = require("jsonwebtoken");
const passport = require("passport");
const router = require("express").Router();

router.get("/", (req, res) => {
  return res.status(200).json({ message: "APIs running successfully" });
});

router.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["email", "profile"] })
);
router.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    session: false,
    failureRedirect: "http://localhost:3000/",
  }),
  (req, res) => {
    const token = jwt.sign({ user: req.user }, process.env.JWT_SECRET, {
      expiresIn: "2d",
    });
    console.log("token", token);
    res.redirect(`http://localhost:3000/?token=${token}`);
  }
);

router.use("/api", require("./api"));

module.exports = router;
