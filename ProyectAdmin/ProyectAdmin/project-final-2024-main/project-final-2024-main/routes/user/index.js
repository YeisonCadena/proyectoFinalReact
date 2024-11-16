const express = require("express");
const router = express.Router();
const {
  register,
  login,
  update,
  trash,
} = require("../../controllers/user/user");
const { verifiedToken } = require("../../utils/JWTToken");

router.post("/register", verifiedToken("administrador"), async (req, res) => {
  return register(req, res);
});

router.post("/login", async (req, res) => {
  return login(req, res);
});

router.get(
  "/update/:userId",
  verifiedToken("administrador"),
  async (req, res) => {
    return update(req, res);
  }
);

router.get(
  "/delete/:userId",
  verifiedToken("administrador"),
  async (req, res) => {
    return trash(req, res);
  }
);

module.exports = router;
