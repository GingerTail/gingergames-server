const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
var mongoose = require("mongoose");
const gamesRouter=require("./services/gameList")
const passport=require("passport")

const connectionString = `mongodb+srv://gingerAdmin:Password.123@gingergames-2fpe3.mongodb.net/test?retryWrites=true&w=majority`

const server = express();
server.set("port",process.env.PORT || 3450)
server.use(cors())
server.use(passport.initialize())
server.use(bodyParser.json())

server.use("/games", gamesRouter)


const connection = mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName:"gingerdb"
})
connection.then(db =>{
    console.log("database connected")
})
    server.listen(server.get("port"), () =>{
        console.log("SERVER IS RUNNING ON " + server.get("port"))
    })

