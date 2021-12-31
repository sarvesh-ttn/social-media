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
module.exports.likePost = async({likedUsername,postId})=>{
    try{
        const fetchedPost = await Post.findById(postId);
       
        
        if(!fetchedPost.likes.includes(likedUsername)){
            console.log('inside if');
           const newPost= await fetchedPost.updateOne({$push:{likes:likedUsername}})
            console.log(newPost,'from ll');
            return newPost;
        }
        else{
            console.log('inside else');
            await fetchedPost.updateOne({$pull:{likes:likedUsername}});
        
           
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
        console.log('user',user);
        // const loggedUser      = await userData.findById(id)
        // const {username,profilePic} = loggedUser
        // let loggedUserPosts = await Post.find({userId:id}).lean();
        const ll = await Post.find({ userId: { $in: [user._id, ...user.friends] } }).populate('userId');
        console.log(ll,'jk');
        // const updatedLoggedUserPosts = loggedUserPosts.map(item=>({...item,name:username,pic:profilePic}))
        // const friendPosts  = await Promise.all(loggedUser.friends.map(async(friendId)=>{
        //     const friend = await userData.find({_id:friendId});
        //     const {username,profilePic} = friend[0];
        //     let friendPost = await Post.find({userId:friendId}).lean();
        //     if(friendPost.length!==0){
        //         friendPost.
        //     }
        //     else return {};
        // }))
       
        
        return ll
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