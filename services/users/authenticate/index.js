const passport = require("passport")
const User = require("../models/user")
const JwtStrategy = require("passport-jwt").Strategy
const ExtractJwt = require("passport.jwt").ExtractJwt
const LocalStrategy = require("passport-local").Strategy
const jwt = require("jsonwebtoken")

passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())
passport.use(new LocalStrategy(User.authenticate()))

var options = {
    jwtFromRequest: 
    ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: "1itopinonavevanonipoti1"
}

module.exports = {
    getToken: (user)=>{
        return jwt.sign(user, options.secretOrKey, {expiresIn: 3600})
    },
    verifyUser: passport.authenticate("jwt", {session:false}),
    jwtPassport:
    passport.use(new JwtStrategy(options, (jwt_payload, done)=>{
        user.findById(jwt_payload, (err, user) =>{
            if(err)
            return done(err, false)
            else if(user)
            return done(null, user)
            elsereturn(null, false)
        })
    }))
}