import jwt from 'jsonwebtoken';

const config = process.env;

const authenticate = (req, res, next) => {
  const token =
    req.body.token || req.query.token || req.headers["x-access-token"];

  if (!token) {
    return res.status(403).send("A token is required for authentication");
  }
  try {
    const decoded = jwt.verify(token, config.TOKEN_KEY);
    req.user = decoded;
  } catch (err) {
    return res.send({result: "failed", "error": "Invalid token is given"});
  }
  return next();
};

export default authenticate;