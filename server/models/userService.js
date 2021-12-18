// const req = require('express/lib/request');
// const res = require('express/lib/response');
const userData = require('./User');

module.exports.getUser = async(id)=>{
        const user = await userData.findById(id)
        const {__v,createdAt,updatedAt, ...other} = user._doc
        return other;
}
module.exports.getAllUser = async()=>{
    const users = await userData.find();
    return users;
}
module.exports.addUser = async({loggedId,addUserId})=>{
    console.log('id',loggedId,'userId',addUserId);
    const user = await userData.findById(loggedId);
    const currentUser = await userData.findById(addUserId);
    // console.log(user,currentUser);
    try{
        if(!user.friends.includes(addUserId))
        {
        await user.updateOne({$push:{friends:addUserId}})
        await currentUser.updateOne({$push:{friends:loggedId}})
        return user;
    }
        else
    {
        const message ="Allready friends"
        return message
    }
    }catch(err){
        const message ="Not found"
        return message
    }
}