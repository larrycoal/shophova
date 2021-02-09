const mongoose = require('mongoose')

const brandSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:1,
        maxlength:100
    }
})


const Brand = mongoose.model("brand",brandSchema)

module.exports = {Brand}
