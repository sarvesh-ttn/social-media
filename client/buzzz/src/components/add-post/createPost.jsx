import React,{useRef,useEffect} from 'react'
import PhotoSizeSelectActualIcon from '@material-ui/icons/PhotoSizeSelectActual';
import { useSelector,useDispatch } from 'react-redux';
import style from './createPost.module.css'
import Avatar from "../../utils/avatar"
import { createPost } from '../../store/actions/createPost';

const CreatePost = () => {
    const loggedUser = useSelector(store => store.profile.user);
    const {_id,profilePic} =loggedUser
    const dispatch = useDispatch()
    const inputRef = useRef();
    const inputHandler= async(e)=>{
        e.preventDefault(); 
        dispatch(createPost({description:inputRef.current.value,_id}))
        inputRef.current.value=""
    }
    return (
        <div className={style.createPost}>
          <div className={style.wrapper}>
          <Avatar Image={profilePic} />
           
          <form action="" className={style.inputTextForm} onSubmit={inputHandler}>
            <input type="text" name="" id="" ref={inputRef} className={style.postInput} placeholder='Create a post' />
            <button type='submit' className={style.shareButton}> Post</button>
                </form>
       
          </div>
      
           </div>
    )
}

export default CreatePost
