import React from 'react'
import PhotoSizeSelectActualIcon from '@material-ui/icons/PhotoSizeSelectActual';
import Pic from '../../assets/user-logo.png'
import './createPost.css'

const CreatePost = () => {
    return (
        <div className='wrapper'>
           <div className="postBox">
           <img src={Pic} alt="" />
           </div>
            <div><input type="text" name="" className='postInput' id="" placeholder='Create a post' /></div>
            <div className='photoIconDiv'>
            <PhotoSizeSelectActualIcon className='photoIcon'/><span>photos/videos</span>
            </div>
           </div>
    )
}

export default CreatePost
