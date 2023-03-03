const jwt = require("jsonwebtoken");
const CustomApiError = require("../errors/custom-error");

const authenticationMiddleware = async (req, res, next) => {
  // console.log(req.headers);
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new CustomApiError("Authorization header not present", 401);
  }
  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { iat, username } = decoded;
    req.user = { iat, username };
    next();
  } catch (error) {
    throw new CustomApiError("Invalid token", 401);
  }
};

module.exports = authenticationMiddleware;
