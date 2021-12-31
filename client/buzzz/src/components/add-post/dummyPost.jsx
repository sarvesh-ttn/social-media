import React from 'react'
import icon from '../../assets/avatar.jpg'
import person from '../../assets/person.jpg'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownAltIcon from '@material-ui/icons/ThumbDownAlt';
import CommentIcon from '@material-ui/icons/Comment';
import style from './dummypost.module.css'
import Avatar from '../../utils/avatar';

const DummyPost = ({data}) => {
   
    const {createdAt,desc,img,userId,_id} =data
    const editedDate = new Date(createdAt).toLocaleTimeString();
    return (
        <div className={style.dummyPost}>
            <div className={style.title}>
                <Avatar />
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
            <hr className={style.socialRuler}/>
            <div className={style.postbuttons}>
                <button className={style.socialbuttons} onClick={()=>{console.log(_id)}}>
                <ThumbUpAltIcon />  
                    Like
                </button>
                <button className={style.socialbuttons}>
                    <CommentIcon />
                        Comment
                </button>
              <button className={style.socialbuttons}>
            <ThumbDownAltIcon />
                Dislike
              </button>
            </div>
            <hr />
            <div className={style.addComment}>
                <Avatar />
            <input type="text" name="" id="" className={style.commentText} placeholder='add a comment' />
            </div>
            <div className={style.showComment}>
            <Avatar />
                <section className={style.commentDetails}>
                <h5 className={style.commentTitle}>Sarvesh Bhatt</h5>
                <p className={style.showCommentText}>
                    Nice Picture
                </p>
                </section>
            </div>
            <div className={style.showComment}>
            <Avatar />
                <section className={style.commentDetails}>
                <h5 className={style.commentTitle}>Sarvesh Bhatt</h5>
                <p className={style.showCommentText}>
                    Looking Smart
                </p>
                </section>
            </div>
        </div>
    )
}

export default DummyPost
