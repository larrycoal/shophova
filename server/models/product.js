const mongoose = require('mongoose')

const schema = mongoose.Schema

const productSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        maxlength:100,
    },
    description:{
        type:String,
        required:true,
        maxlength:100000,
    },
    price:{
        required:true,
        type:Number,
        maxlength:255,
    },
    brand:{
        type:schema.Types.ObjectId,
        ref:"brand",
        required:true
    },
    shipping:{
        required:true,
        type:Boolean
    },
    available:{
        required:true,
        type:Boolean
    },
    material:{
        type:schema.Types.ObjectId,
        ref:"Material",
        required:true
    },
    sold:{
        type:Number,
        maxlength:100,
        default:0
    },
    images:{
        type:Array,
        default:[]
    }
},{timestamps:true});

const Product = mongoose.model("Product",productSchema)

module.exports={Product}