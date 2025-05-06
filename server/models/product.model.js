import mongoose from "mongoose";


const productScmema = new mongoose.Schema({
    name: {
        type :String,
    },
    image :{
        type:String,
        default :[]
    },
    category :[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"category"
        }
    ],
    subCategory:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"subCategory"
        }
    ],
    unit:{
        type:String,
        default:""
    },
    stock:{
        type:Number,
        default:null

    },
    price:{
        type:Number,
        default:null
    },
    discount:
    {
        type:Number,
        default:null
    },
    description:{
        type:String,
        default:""
    },
    more_details:{
        type:Object,
        default:{}
    },
    publish:{
        type:Boolean,
        default:true
    }
},{
    timestamps:true
})
const ProductModel = mongoose.model("product",productScmema);
export default ProductModel;

