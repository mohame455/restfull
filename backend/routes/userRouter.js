const express = require("express");
const {
  getUsers,
  addUser,
  editUser,
  deleteUser,
} = require("../controllers/userController");
const router = express.Router();

router.get("/users", getUsers);
router.post("/add_user", addUser);
router.put("/users/:id", editUser);
router.delete("/users/:id", deleteUser);

module.exports = router;
