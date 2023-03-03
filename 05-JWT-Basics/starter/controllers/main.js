const CustomApiError = require("../errors/custom-error");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const login = async (req, res) => {
  const { username, password } = req.body;
  console.log(username, password);

  if (!username || !password) {
    // check for username
    throw new CustomApiError("Please provide username and password", 400);
  }
  const id = new Date().getTime;
  const token = jwt.sign({ id, username }, process.env.JWT_SECRET);

  res.status(200).json({ msg: "user created", token });
};

const dashboard = async (req, res) => {
  const {username, iat} = (req.user);
  const luckNumber = Math.floor(Math.random() * 100);
  res.status(200).json({
    msg: `Hello ${username}, your lucky number is ${luckNumber}`,
  });
};

module.exports = {
  login,
  dashboard,
};
