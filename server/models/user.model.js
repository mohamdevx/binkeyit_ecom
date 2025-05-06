import { verify } from "jsonwebtoken";
import mongoose from "mongoose";


const userSchema= new mongoose.Schema({
    name:{
        type:String,
        required:[true,"please enter your name"]
    },
    email:{
        type:String,
        required:[true,"provide email"],
    },
    avatar:{
        type:String,
        default:""
    },
    mobile:{
        type:Number,
        default:null
    },
    refreshy_token :{
        type:String,
        default:""
    },
    verify_email:{
        type:Boolean,
        default:false
    },
    last_login_date :{
        type:Date,
        default:""
    },
    status :{
        type: String,
       enum :["active","inactive","Suspended"],
       default:"active"
    },
    address_details:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Address"
        }
    ],
    shopping_card:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"cartProduct"
        }
    ],
    orderHistory :[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"order"
        }
    ],
    forgto_password:{
        type:String,
        default:null
    },
    forgot_passwrod_expiry:{
        type:Date,
        default:""
    },
    role :{
        type:String,
        enum:["ADMIN","USER"],
        default:"USER"
    },

},{
    timestamps:true
})

const UserModel=mongoose.model("User",userSchema);
export default UserModel;