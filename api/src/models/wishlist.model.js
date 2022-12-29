import mongoose from "mongoose";

const WishlistSchema= new mongoose.Schema({
    userId:{type:String,required:true},
    productId:{type:String,required:true}, 
},{
    timestamps:true,
    versionKey:false
})

export const WishlistModel=mongoose.model('Wishlist', WishlistSchema);

