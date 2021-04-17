const User = require("../models/User");

const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.send(users);
  } catch (error) {
    console.error(error);
  }
};

const addUser = async (req, res) => {
  const { name, lastName, email, phone } = req.body;
  try {
    const newUser = new User({ name, lastName, email, phone });
    await newUser.save();
    res.send(newUser);
  } catch (error) {
    console.error(error);
  }
};

const editUser = async (req, res) => {
  const userID = req.params.id;
  try {
    const userModify = await User.findByIdAndUpdate(
      userID,
      { ...req.body },
      { new: true }
    );
    res.send(userModify);
  } catch (error) {
    console.error(error);
  }
};

const deleteUser = async (req, res) => {
  const userID = req.params.id;
  try {
    const userRemoved = await User.findByIdAndDelete(userID);
    res.send(userRemoved);
  } catch (error) {
    console.error(error);
  }
};

module.exports = { getUsers, addUser, editUser, deleteUser };
