const express=require("express");
const {ObjectID}=require("mongodb");
const gameSchema=require("./gameSchema");
const router=express.Router()

router.get("/", async(req,res)=>{
    let filter= req.query
    const games = await gameSchema.find({})

    res.send(games)
})

router.get("/:id", async(req,res)=>{
    const games = await gameSchema.findById(req.params.id, {})
    console.log(games)
    res.send(games)
})

router.post("/", async(req,res)=>{
    try {
        const newGame = new gameSchema(req.body)
        const {_id}= await newGame.save()
        res.send(_id)
    } catch (error) {
        res.send(error)        
    }
})

router.put("/:id", async(req,res)=>{
    try {
        const game = await gameSchema.findByIdAndUpdate(req.params.id, req.body)
        res.send(game)

    } catch (error) {
        console.log(error)
    }
})

router.delete("/:id", async(req,res) =>{
    try {
        const game = await gameSchema.findByIdAndDelete(req.params.id)
        res.send(game)

    } catch (error) {
        
        res.send(error)
    }
})


module.exports= router