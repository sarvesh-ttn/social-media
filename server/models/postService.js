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
module.exports.likePost = async({likeId,postId})=>{
    try{
        console.log("service db query 1",likeId,postId);
        const fetchedPost = await Post.findById(postId);
        
        if(!fetchedPost.likes.includes(likeId)){
            await fetchedPost.updateOne({$push:{likes:likeId}})
            console.log("liked",fetchedPost);
            return fetchedPost
        }
        else{
            await fetchedPost.updateOne({$pull:{likes:likeId}});
            console.log(" disliked",fetchedPost);
           return fetchedPost
        }
    }
    catch(err){
        return err;
    }
}
// get a Post
module.exports.getPost = async(postId)=>{
    try{
        const fetchedPost = await Post.findById(postId)
        return fetchedPost
    }
    catch(err){
        return err;
    }
}
// comment on a Post 
module.exports.addComment = async({desc,comment_id,postId})=>{
    try{
        const fetchedPost = await Post.findById(postId)
        await fetchedPost.updateOne({$push:{comments:{desc,comment_id}}})
        return fetchedPost
    }
    catch(err){
        return err
    }
}