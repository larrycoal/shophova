require("dotenv").config();
const express = require("express");
const bodyPaser = require("body-parser");
const cookieParser = require("cookie-parser");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect(process.env.DATABASE);

const app = express();
const port = process.env.PORT || 3001;

app.use(bodyPaser.urlencoded({ extended: true }));
app.use(bodyPaser.json());
app.use(cookieParser());
//=======================
// models
//=======================

const { User } = require("./models/user");


//MIDDLEWARES

const auth = require("./middleware/auth")

//=======================
// USERS
//=======================
app.get("/api/user/auth",auth,(req,res)=>{
    res.status(200).json({
        isAdmin:req.user.role === 0? false:true,
        isAuth:true,
        name:req.user.name,
        lastname:req.user.lastname,
        email:req.user.email,
        cart:req.user.cart,
        history:req.user.history
    })
})
app.post("/api/user/register", (req, res) => {
  const user = new User(req.body);
  user.save((err, doc) => {
    if (err) return res.json({ success: false, err });

    res.status(200).json({
        success:true
    });
  });
});
app.post("/api/user/login", (req, res) => {
  User.findOne({ email: req.body.email }, (err, user) => {
    if (!user)
      return res.json({
        success: false,
        message: "auth failed username dose not exist",
      });

    user.comparePassword(req.body.password, (err, isMatch) => {
      if (!isMatch) return res.json({success:false,message:"wrong password"});
      user.generateToken((err, user) => {
        if (err) return res.status(400).send(err);
        res.cookie("w_auth", user.token).status(200).send({success:true,token:user.token});
      });
    });
    
  });
});
app.get("/api/user/logout",auth,(req,res)=>{
   User.findOneAndUpdate({_id:req.user._id},{token:''},(err,user)=>{
       if(err)return  res.json({success:false,err})
      return res.status(200).json({
           success:true
       })
   })
})

app.listen(port, () => {
  console.log(`listening on ${port}`);
});
