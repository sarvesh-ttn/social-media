import React from 'react'
import PhotoSizeSelectActualIcon from '@material-ui/icons/PhotoSizeSelectActual';
import Pic from '../../assets/dp.png'
import style from './createPost.module.css'
import Avatar from "../../utils/avatar"

const CreatePost = () => {
    return (
        <div className={style.createPost}>
          <div className={style.wrapper}>
          <Avatar />
           
           <input type="text" name="" className={style.postInput} id="" placeholder='Create a post' />
       <button className={style.postButton}>
       <PhotoSizeSelectActualIcon className={style.photoIcon}/>photos/videos</button>
          </div>
          <button className={style.shareButton}>
              Share
          </button>
           </div>
    )
}

export default CreatePost
