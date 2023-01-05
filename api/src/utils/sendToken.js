import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const sendToken = (res, user, message) => {
  const token = jwt.sign(
    { id: user._id, username: user.username, isAdmin: user.isAdmin },
    process.env.JWT_SECRET,
    { expiresIn: `${process.env.JWT_TOKEN_EXPIRE}d` }
  );

  const options = {
    httpOnly: true,
    expires: new Date(Date.now() + ((((60 * 1000) * 60) * 24) * process.env.COOKIE_EXPIRE)), // in days
  };
 
  //  res.cookie("token", token, options)
};
