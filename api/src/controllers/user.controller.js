import express from "express";
const router = express.Router();
import dotenv from "dotenv"
dotenv.config();
import { UserModel } from "../models/user.model.js";
import  {sendMail} from "../utils/sendmail.js";
import {generateOtp} from "../utils/generateOtp.js";
import { sendToken } from "../utils/sendToken.js";
import { verifyToken } from "../middlewares/verifyToken.js";

// signup
router.post("/signup", async (req, res) => {

  let otp=generateOtp();
  let otpExpireTime=(Date.now() + ((60 * 1000) * process.env.OTP_EXPIRE)) 
  try {
    const newUser = new UserModel({
      username: req.body.username,
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      password: req.body.password,
      otp:otp,
      otp_expiry:otpExpireTime,
      isAdmin: req.body.isAdmin,
    });
    let user=await newUser.save();
      // sendemail
      // await sendMail(req.body.email,"verify your account", `Your OTP is ${otp}. It will expire in ${process.env.OTP_EXPIRE} min. Please verify your OTP`);
      // sendtoken
      // sendToken(res, user, `Otp is sent on your email and it will expire in ${process.env.OTP_EXPIRE} min. Please verify your OTP.`);
    // return res.status(200).json(`Otp is sent on your email and it will expire in ${process.env.OTP_EXPIRE} min. Please verify your OTP.`)
    return res.status(200).json("Account created successfully")
  } catch (error) {
    return res.status(500).json(error.message);
  }
});

// signin
router.post("/signin", async (req, res) => {
  if (req.body.username?.trim() == "" || req.body.username == undefined) {
    return res.status(400).json("username cannot be empty");
  } else if (
    req.body.password?.trim() == "" ||
    req.body.password == undefined
  ) {
    return res.status(400).json("Password cannot be empty");
  }
  try {
    const user = await UserModel.findOne({
      username: req.body.username,
    });
    if (!user) {
      return res.status(404).json("Wrong username or password");
    } 
    if (req.body.password !== user.password) {
      return res.status(404).json("Wrong username or password");
    } 

    // sendMail
    // let otp=generateOtp();
    // let otpExpireTime=(Date.now() + ((60 * 1000) * process.env.OTP_EXPIRE)) 
    // user.otp=otp;
    // user.otp_expiry=otpExpireTime;

    // await user.save();
    // await sendMail(user.email, "SignIn Attempt", `Your OTP is ${otp} and it will be expired in next ${process.env.OTP_EXPIRE} min. If it is not done by you please contact us or change your password.`)
    //  sendToken(res, user, `OTP sent to your email and it will be expired in next ${process.env.OTP_EXPIRE} min. Please verify`)

    return res.status(200).json(user)
  } catch (error) {
    return res.status(400).json(error.message);
  }
});

// delete
router.delete("/remove", async (req, res) => {
  if (req.body.username?.trim() == "" || req.body.username == undefined) {
    return res.status(400).json("username cannot be empty");
  } else if (
    req.body.password?.trim() == "" ||
    req.body.password == undefined
  ) {
    return res.status(400).json("Password cannot be empty");
  }
  const user = await UserModel.findOne({
    username: req.body.username,
  });
  try {
    if (user) {
      if (req.body.password === user.password) {
        await UserModel.findByIdAndDelete(user._id);
        return res.status(200).json("Your account got deleted.");
      } else {
        return res
          .status(404)
          .json("Need correct username or password to remove the account");
      }
    } else {
      return res.status(404).json("username or password is wrong");
    }
  } catch (error) {
    return res.status(500).json(error.message);
  }
});

// update
router.patch("/update", async (req, res) => {
  let username = req.query.username;
  const user = await UserModel.findOne({ username: username });
  if (!user) {
    return res.status(400).json("Username is not valid");
  }

  try {
    await UserModel.findOneAndUpdate(
      { username: username },
      {
        $set: req.body,
      }
    );

    return res.status(200).json(`Account is successfully updated`);
  } catch (error) {
    return res.status(500).json(error.message);
  }
});

// Account verification
router.post("/verify-account", verifyToken ,async(req, res) => {
  let enteredOtp=Number(req.body.otp);
  
  if(!enteredOtp){
    return res.status(400).json("Please enter your otp.")
  }
  try {
    let user =await UserModel.findById(req.user.id)
    if(Date.now()>Number(user.otp_expiry)){
      return res.status(400).json("OTP has been expired. Please login in order to verify your account.")
    }else if(enteredOtp!==Number(user.otp)){
      return res.status(400).json("Incorrect OTP.")
    }
    user.verified=true;
    user.otp=null;
    user.otp_expiry=null;

    await user.save();
    
    return res.status(200).json("Account verified.")
  } catch (error) {
    return res.status(400).json(error.message)
  }
})

// OTP verification
router.post("/verify-otp",verifyToken ,async(req,res)=>{

  let enteredOtp=Number(req.body.otp);
  
  if(!enteredOtp){
    return res.status(400).json("Please enter your otp.")
  }
  try {
    let user=await UserModel.findById(req.user.id);
    if(Date.now()>Number(user.otp_expiry)){
      return res.status(400).json("OTP has been expired. Please login again.")
    }else if(enteredOtp!==Number(user.otp)){
      return res.status(400).json("Incorrect OTP.")
    }
    
    user.otp=null;
    user.otp_expiry=null;
    user=await user.save();

    let {otp, otp_expiry, password, ...responseData}=user._doc
    return res.status(200).json(responseData)
  } catch (error) {
    return res.status(400).json(error.message)
  }
})


export default router;
