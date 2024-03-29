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
//-----> models
//=======================

const { User } = require("./models/user");
const { Material } = require("./models/material");
const { Brand } = require("./models/brands");
const { Product } = require("./models/product");
//MIDDLEWARES

const auth = require("./middleware/auth");
const admin = require("./middleware/admin");

//=======================
//----->  USERS
//=======================
app.get("/api/user/auth", auth, (req, res) => {
  res.status(200).json({
    isAdmin: req.user.role === 0 ? false : true,
    isAuth: true,
    name: req.user.name,
    lastname: req.user.lastname,
    email: req.user.email,
    cart: req.user.cart,
    history: req.user.history,
  });
});
app.post("/api/user/register", (req, res) => {
  const user = new User(req.body);
  user.save((err, doc) => {
    if (err) {
      return res.json({ success: false, err })};
    res.status(200).json({
      success: true,
      doc,
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
      if (!isMatch)
        return res.json({ success: false, message: "wrong password" });
      user.generateToken((err, user) => {
        if (err) return res.status(400).send(err);
        res
          .cookie("w_auth", user.token)
          .status(200)
          .send({ success: true, token: user.token, user });
      });
    });
  });
});
app.get("/api/user/logout", auth, (req, res) => {
  User.findOneAndUpdate({ _id: req.user._id }, { token: "" }, (err, user) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({
      success: true,
    });
  });
});


//=======================
//----->    Product
//=======================



app.get("/api/product/asset",(req,res)=>{
     let sort = req.query.sortBy ? req.query.sortBy:"_id"
     let order = req.query.order ? req.query.order : "ASC"
     let limit =req.query.limit ?  parseInt(req.query.limit):100

     Product.find({"_id":{$in:items}}).
     populate("brand").
     populate("material").
     sort([sort,order]).
     limit(limit).
     exec((err,doc)=>{
         res.status(200).send(doc)
     })
})
app.get("/api/product/asset_by_id",(req,res)=>{
    let type = req.query.type
    let items = req.query.id
    if(type === "multiple"){
        let ids = req.query.id.split(',')
        items = ids.map((item)=>{
           return mongoose.Types.ObjectId(item)
        })    
    }
    Product.find().
        populate("brand").
        populate("material").
        exec((err,doc)=>{
            res.status(200).send(doc)
        })

})
app.post("/api/product/asset", auth, admin, (req, res) => {
  const product = new Product(req.body);
  product.save((err, doc) => {
    if (err) return res.status(400).send({ success: false, err });
    res.status(200).send({ doc });
  });
});

//=======================
//----->    Materials
//=======================
app.get("/api/product/materials", auth, admin, (req, res) => {
  Material.find({}, (err, doc) => {
    if (err) return res.json({ success: false, err });
    res.status(200).json({ doc });
  });
});

app.post("/api/product/material", auth, admin, (req, res) => {
  const material = new Material(req.body);
  material.save((err, doc) => {
    if (err) return res.json({ success: false, err });
    res.status(200).json({ doc });
  });
});
//=======================
//----->   Brands
//=======================
app.post("/api/product/brands", auth, admin, (req, res) => {
  const brand = new Brand(req.body);
  brand.save((err, doc) => {
    if (err) return res.json({ success: false, err });
  });
});

app.get("/api/product/brands",(req,res)=>{
  Brand.find({},(err,doc)=>{
    if(err){
      res.status(400)
    }
    res.status(200).json(doc)
  })
})

app.listen(port, () => {
  console.log(`listening on ${port}`);
});
