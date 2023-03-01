const express = require("express");

const router = express.Router();

const User = require("../model/userSchema");

const uploadMiddleWare = require('../middlewares/multer');


router.get("/api/get",async(req,res)=>{
    const data = await User.find().sort({
        createdAt:"descending"
    })//?
    res.send(data)

})
router.post("/api/save",uploadMiddleWare.single("photo"),async(req,res)=>{ // use to select single photo
    const photo = req.file.filename
    const {name,description,city} = req.body
    const data = await User.create({
        photo,
        name,
        description,
        city
    })
    res.send(data)
    // data.save()
    console.log(req)

    
})
module.exports=router