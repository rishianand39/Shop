import mongoose from "mongoose";

const ProductSchema= new mongoose.Schema({
    title:{type:String, required:true},
    category:{type:[String], required:true},
    image:{type:[String], required:true},
    size:{type:String, required:false, enum:["S", "M", "L", "XL", "XXL"]},
    brand:{type:String, required:true},
    price:{type:Number, required:true},
    strike:{type:Number, required:true},
    stock:{type:Number, required:false, default:10},
    description:{type:String, required:true,minlength: 5, maxlength: 200},
    isNew:{type:Boolean, required:false, default:false},
    popularity:{type:Number, required:false, min:0,max:10, default:4},

},{
    timestamps:true,
    versionKey:false
});

export const ProductModel=mongoose.model('Product', ProductSchema);

