import mongoose from "mongoose";

const addressSchema = new mongoose.Schema({
    address_line:{
        type:String,
        default:""
    },
    city :{
        type:String,
        default:""
    },
    state :{
        type:String,
        default:""
    },
    pincode :{
        type:Number,
       
    },
    country :{
        type:String,
        
    },
    mobile :{
        type:Number,
        default:null
    },
},{
    timestamps:true
})
const AddressModel = mongoose.model("address",addressSchema);
export default AddressModel;

//https://dbdiagram.io/d/667527b45a764b3c720d75da