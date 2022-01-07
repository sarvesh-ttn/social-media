const posts = require('../models/postService')
// create a post
module.exports.createPost =async(req,res)=>{
    const {userId,desc,img} = req.body
    try{
        console.log(userId,desc,img,'from crreate post controller');
        const newPost = await posts.createPost({userId,desc,img})
        console.log(newPost,'createdPost');
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
        const postId = req.body.postId;
        const likedUsernameId = req.params.id; 
        const likedPost = await posts.likePost({likedUsernameId,postId})
        res.status(201).json(likedPost)
    }
    catch(err){
        console.log(err);
        res.status(500).json(err)
    }

}
// dislike a post
module.exports.dislikePost = async(req,res)=>{
    try{
        const postId = req.body.postId;
        const dislikedUsernameId = req.params.id; 
        const dislikedPost = await posts.dislikePost({dislikedUsernameId,postId})
        res.status(201).json(dislikedPost)
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
        const {desc,userId} = req.body
        const postId = req.params.id;
        const getPost = await posts.addComment({desc,userId,postId})
        res.status(201).json(getPost)
    }
    catch(err){
        console.log(err);
        res.status(500).json(err) 
    }
}
// get all posts
module.exports.getAllPosts = async(req,res)=>{
    try{
        let getAllPosts = await posts.getAllPosts(req.user)
        res.status(200).json(getAllPosts)
    }
    catch(err){
        console.log(err);
        res.status(500).json(err) 
    }
}