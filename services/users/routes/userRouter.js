const express = require("express")
const User = require("../models/user")
const auth = require("../authenticate")
const passporto = require("passport")

const router = express.Router()

router.get("/", async(req,res)=>{
    res.send(await User.find({}))
})

router.post("/register", async(req,res)=>{
    delete req.body.role;
    var newUser = new User(req.body)
    try {
        newUser = await User.register(newUser, req.body.password)
    } catch (error) {
        res.statusCode= 500
        res.send(err)
    }
    var token = auth.getToken({_id: newUser._id});
    res.statusCode = 200
    res.json({
        status: "new user registered",
        user: newUser,
        token: token,
        success: true
    })
})

router.post("/login", passport.authenticate("local", (req,res) =>{
    var token = auth.getToken({_id: req.user._id})
    res.statusCode = 200;
    res.json({
        status: "login ok",
        user: req.user,
        token: token,
        success: true
    })
}))

router.post("/refresh", auth.verifyUser, (req,res)=>{
    var token= auth.getToken({_id: req.user._id})
    res.statusCode = 200;
    res.json({
        status: "new token generated",
        user: req.user,
        token: token,
        success: true
    })
})


module.exports= router