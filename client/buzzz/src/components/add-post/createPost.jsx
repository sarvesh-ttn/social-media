import React from 'react'
import PhotoSizeSelectActualIcon from '@material-ui/icons/PhotoSizeSelectActual';
import { useSelector } from 'react-redux';
import Pic from '../../assets/dp.png'
import style from './createPost.module.css'
import Avatar from "../../utils/avatar"

const CreatePost = () => {
    const image = useSelector(store => store.profile.user.profilePic);
    return (
        <div className={style.createPost}>
          <div className={style.wrapper}>
          <Avatar image={image} />
           
           <input type="text" name="" className={style.postInput} id="" placeholder='Create a post' />
       <button className={style.postButton}>
       <PhotoSizeSelectActualIcon className={style.photoIcon}/>photos/videos</button>
          </div>
          {/* <button className={style.shareButton}>
              Share
          </button> */}
          <input type="file"
       accept="image/png, image/jpeg"/>
           </div>
    )
}

export default CreatePost
