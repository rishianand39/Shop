import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  try {
    const { token } = req.cookies;
    if (!token) {
      return res.status(400).json("Please login");
    }
    jwt.verify(token, process.env.JWT_SECRET, (err, decode) => {
      if (err) {
        return res.status(403).json(`${err.message} Please login again.`);
      }
      req.user = decode;
      next();
    });
  } catch (error) {
    return res.status(500).json(error.message);
  }
};
