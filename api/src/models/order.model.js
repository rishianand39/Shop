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
    razorpay:{
        orderId:{type:String,required:true},
        paymentId:{type:String,required:true},
        signature:{type:String,required:true},
    },
},{
    timestamps:true,
    versionKey:false
})

export const OrderModel= mongoose.model("Order",OrderSchema)

