const users = require('../models/userService');

module.exports.getUser =async(req,res)=>{
    try{
        const user = await users.getUser(req.params.id)
        res.status(200).json(user)
    }
    catch(err){
        console.log(err);
        res.status(500).json(err)
    }
}
module.exports.getAllUser = async(req,res)=>{
    try{
        const userList = await users.getAllUser();
        res.status(200).json(userList);
    }
    catch(err){
        console.log(err);
        res.status(500).json(err)
    }
}
module.exports.addUser = async(req,res)=>{
    // console.log(req.body.userId,req.params.id);
    try{
        const user = await users.addUser({addUserId:req.body.userId,loggedId:req.params.id})
        res.status(200).json(user)
    }
    catch(err){
        console.log(err);
        res.status(500).json(err)
    }
}