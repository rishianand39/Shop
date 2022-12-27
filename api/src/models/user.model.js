import mongoose from "mongoose";

const UserSchema= new mongoose.Schema({
    username:{type:String, required:true,unique:true},
    first_name:{type:String, required:true},
    last_name:{type:String, required:true},
    email:{type:String, required:true, unique:true},
    password:{type:String, required:true},
    otp:{type:Number, default:null,required:false},
    otp_expiry:{type:Number, default:null, required:false},
    verified:{type:Boolean, default:false, required:false},
    isAdmin:{type:Boolean, required:true,default:false,required:false}
},{
    timestamps:true,
    versionKey:false
});

export const UserModel=mongoose.model('User', UserSchema);