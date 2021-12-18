const posts = require('../models/postService')
// create a post
module.exports.createPost =async(req,res)=>{
    const {userId,desc,img} = req.body
    // console.log('controller says hi',userId,desc,img);
    try{
        // console.log('entered try block');
        const newPost = await posts.createPost({userId,desc,img})
        // console.log('new post',newPost);
        res.status(201).json(newPost);
        }
        catch(err){
            console.log(err);
            res.status(500).json(err)
        }
}
//  like/dislike a post
module.exports.likePost = async(req,res)=>{
    try{
        const likeId = req.body.likeId;
        const postId = req.params.id; 
        const likedPost = await posts.likePost({likeId,postId})
        res.status(201).json(likedPost)
    }
    catch(err){
        console.log(err);
        res.status(500).json(err)
    }

}
// get a post
module.exports.getPost = async(req,res)=>{
    try{
        const getPost = await posts.getPost(req.params.id)
        res.status(200).json(getPost)
    }
    catch(err){
        console.log(err);
        res.status(500).json(err)    
    }
}
// comment on a post 
module.exports.addComment = async(req,res)=>{
    try{
        const {desc,comment_id} = req.body,postId = req.params.id;
        const getPost = await posts.addComment({desc,comment_id,postId})
        res.status(201).json(getPost)
    }
    catch(err){
        console.log(err);
        res.status(500).json(err) 
    }
}
// get all posts