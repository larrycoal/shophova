let admin = (req,res,next)=>{
if(req.user.role === 0) return res.json({
    success:false,
    message:"You are not allowed to do that"
})
next()
}

module.exports= admin