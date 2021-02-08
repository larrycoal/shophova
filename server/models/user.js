const mongoose = require('mongoose')
const bcrypt =require('bcrypt')
const SALT = 10
const jwt = require('jsonwebtoken')
const userSchema = mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:1,
        trim:true
    },
    password:{
        type:String,
        required:true,
        minLength:5
    },
    name:{
        type:String,
        required:true,
        maxlength:100
    },
    lastname:{
        type:String,
        required:true,
        maxlength:100
    },
    cart:{
        type:Array,
        default:[]
    },
    history:{
        type:Array,
        default:[]
    },
    role:{
        type:Number,
        default:0
    },
    token:{
        type:String
    }

})
userSchema.pre("save",function(next){
    var user = this
    if(this.isModified('password')){
        bcrypt.genSalt(SALT,(err,salt)=>{
            if(err) {
                return next(err)
            }
   
            bcrypt.hash(user.password,salt,(err,hash)=>{
                
               if(err) return next(err)
   
               user.password=hash
               next()
            })
       })
    }
    
})
userSchema.methods.comparePassword = function(inputPassword,cb){
    bcrypt.compare(inputPassword,this.password,(err,isMatch)=>{
        if (err) return cb(err)
        cb(null,isMatch)
    })
}

userSchema.methods.generateToken = function(cb){
    const user = this
    
   const token = jwt.sign(user._id.toHexString(),process.env.SECRET)

   user.token = token
   // changed User to user
   user.updateOne({_id:user._id},user,(err,num)=>{
    if(err) return cb(err);
       cb(null,user)
   })
}
userSchema.statics.findByToken = function(token,cb){
    const user = this
    jwt.verify(token,process.env.SECRET,(err,userId)=>{
        user.findOne({_id:userId,token:token},function(err,user){
            if (err) return cb(err)
            cb(null,user)
        })
    })
    
}

const User = mongoose.model("User",userSchema)

module.exports = {User}