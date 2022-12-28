import mongoose from "mongoose";

const CartSchema= new mongoose.Schema({
    userId:{type:String,required:true},
    productId:{type:String,required:true}, 
    quantity:{type:Number,required:true},
},{
    timestamps:true,
    versionKey:false
})

export const CartModel=mongoose.model('Cart', CartSchema);

