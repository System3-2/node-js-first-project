const CustomApiError = require("../errors/custom-error");

const login = async (req, res) => {
  const { username, password } = req.body;
  console.log(username, password);

  if (!username || !password) {
    // check for username
    throw new CustomApiError("Please provide username and password", 400);
  }
  res.send("Fake login resgister/signup");
};

const dashboard = async (req, res) => {
  const luckyNumber = Math.floor(Math.random() * 100);
  res
    .status(200)
    .json({
      msg: `Hello john doe!`,
      secret: `here is your lucky number ${luckyNumber}`,
    });
};

module.exports = {
  login,
  dashboard,
};
