import React,{ useEffect,useRef } from 'react'
import { useSelector,useDispatch } from 'react-redux';
import icon from '../../assets/avatar.jpg'
import person from '../../assets/person.jpg'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownAltIcon from '@material-ui/icons/ThumbDownAlt';
import CommentIcon from '@material-ui/icons/Comment';
import style from './dummypost.module.css'
import Avatar from '../../utils/avatar';
import axios from "../../axios"
import { addComment } from '../../store/actions/postComment';


const DummyPost = ({data}) => {
    const inputRef = useRef();
     
    const {createdAt,desc,img,userId,_id,likes,comments,dislike} =data
    const loggedUser = useSelector(state => state.profile.user);
    const loggedUserId = loggedUser._id

    const dispatch     = useDispatch()
    // editing time
    const editedDate = new Date(createdAt).toLocaleTimeString();

    const likeHandler=async(loggedUserId)=>{
          await axios({
            method:"PUT",
            data:{
                postId:_id
            },
            url:`/post/like/${loggedUserId}`
        })
    }
    const dislikeHandler = async(loggedUserId)=>{
      const resp=  await axios({
            method:"PUT",
            data:{
                postId:_id
            },
            url:`/post/dislike/${loggedUserId}`
        })
        console.log(resp,'sds');
    }
    const inputHandler= async(e)=>{
        e.preventDefault(); 
        dispatch(addComment({description:inputRef.current.value,_id,loggedUserId}))
        inputRef.current.value=""
    }
    useEffect(()=>{
        
    },[likes])
    return (
        <div className={style.dummyPost} key={_id}>
            <div className={style.title}>
                <Avatar Image={loggedUser.profilePic} />
                <section className={style.postTitle}>
                <h4 >{userId.username}</h4>
                <h6>Created at {editedDate}</h6>
                </section>
            </div>
            <div className={style.desc}>
                <p className={style.postDesc}>{desc} </p>
                {img[0] &&
                 <img src={person} alt=""className={style.postImage} />}
            </div>
            <div className={style.desc}>
               <span>{likes?.length} likes</span>
               <span>{dislike?.length} dislikes</span>
            </div>
            <hr className={style.socialRuler}/>
            <div className={style.postbuttons}>
                <button className={style.socialbuttons} onClick={()=>{likeHandler(loggedUserId)}}>
                <ThumbUpAltIcon />  
                    Like
                </button>
              <button className={style.socialbuttons} onClick={()=>{dislikeHandler(loggedUserId)}}>
            <ThumbDownAltIcon />
                Dislike
              </button>
            </div>
            <hr />
            <div className={style.addComment}>
                <Avatar Image={loggedUser.profilePic} />
                <form action="" onSubmit={inputHandler}>
            <input type="text" name="" id="" ref={inputRef} className={style.commentText} placeholder='add a comment' />
            <button type='submit' className={style.addCommentButton}> Post</button>
                </form>
           
            </div>
            {comments.map(item=>{
                const {desc,username,profilePic,_id} = item;
                return(
            <div className={style.showComment} key={_id}>
            <Avatar Image={profilePic} />
                <section className={style.commentDetails}>
                <h5 className={style.commentTitle}>{username}</h5>
                <p className={style.showCommentText}>
                    {desc}
                </p>
                </section>
            </div>
                )
            })}
        </div>
    )
}

export default DummyPost
