const ObjectId = require('mongoose').Types.ObjectId;
const userData = require('./User');
const Post = require('./Post')

// create a Post
module.exports.createPost = async(userId,desc,img)=>{
    const createdUser = new Post(userId,desc,img)
    try{
       const savedPost = await createdUser.save()
        return savedPost
    }
    catch(err){
        console.log(err);
        return err;
    }
}
// like-dislike a Post
module.exports.likePost = async({likedUsernameId,postId})=>{
    try{
        const fetchedPost = await Post.findById(postId);
        
        if(!fetchedPost.likes.includes(likedUsernameId)){
           const newPost= await fetchedPost.updateOne({$push:{likes:likedUsernameId}})
         
            return newPost;
        }
        else{  
            await fetchedPost.updateOne({$pull:{likes:likedUsernameId}});
            return fetchedPost
        }
    }
    catch(err){
        return err;
    }
}
// dislike a post
module.exports.dislikePost = async({dislikedUsernameId,postId})=>{
    try{
        const fetchedPost = await Post.findById(postId);
        
        if(!fetchedPost.dislike.includes(dislikedUsernameId)){
          if(!fetchedPost.likes.includes(dislikedUsernameId)){
              const newPost= await fetchedPost.updateOne({$push:{dislike:dislikedUsernameId}})
               return newPost;
          }
          else{
            const newPost= await fetchedPost.updateOne({$push:{dislike:dislikedUsernameId},$pull:{likes:dislikedUsernameId}})
               return newPost;
          }
        }
        else{  
            await fetchedPost.updateOne({$pull:{dislike:dislikedUsernameId}});
            return fetchedPost
        }
    }
    catch(err){
        return err;
    }
}
// get a Post
module.exports.getPost = async(id)=>{
    try{
        const fetchedPost = await Post.find({userId:id})
        return fetchedPost
    }
    catch(err){
        return err;
    }
}
// get all Posts
module.exports.getAllPosts = async(user)=>{
    try{
        const allPosts = await Post.find({ userId: { $in: [user._id, ...user.friends] } }).populate('userId');     
        return allPosts;
    }
    
    catch(err){
        return err;
    }
}

// comment on a Post 
module.exports.addComment = async({desc,userId,postId})=>{
    try{
        const fetchedPost = await Post.findById(postId)
        const commentUser = await userData.findById(userId)
        const {username,profilePic} = commentUser
        await fetchedPost.updateOne({$push:{comments:{desc,userId,username,profilePic}}})
        return fetchedPost
    }
    catch(err){
        return err
    }
}