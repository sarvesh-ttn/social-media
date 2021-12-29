const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
userId:{
    type:String
},
likes:{
    type:Array,
    default:[]
},
dislike:{
    type:Array,
    default:[] 
},
 desc:{
     type:String,
     default:"",
     max:500
 },
img:{
    type:Array
},
isFlagged:{
    type:Boolean,
    default:false
},
isVerified:{
    type:Boolean,
    default:false,
},
comments:{
    type:Array
}
},
{
    timestamps:true
})
module.exports = mongoose.model("Post",PostSchema)