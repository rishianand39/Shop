import mongoose from "mongoose"

const OrderSchema= new mongoose.Schema({
    userId:{type:String,required:true},
    products:[
        {
            productId:{type:String,required:true},
            quantity:{type:Number,default:1,}
        }
    ],
    amount:{type:Number,required:true},
    address:{type:String,required:true},
    status:{type:String,default:"pending"}
},{
    timestamps:true,
    versionKey:false
})

export const OrderModel= mongoose.model("Order",OrderSchema)

