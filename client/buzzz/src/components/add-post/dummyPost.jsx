import React from 'react'
import icon from '../../assets/avatar.jpg'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownAltIcon from '@material-ui/icons/ThumbDownAlt';
import CommentIcon from '@material-ui/icons/Comment';
import style from './dummypost.module.css'

const DummyPost = () => {
    return (
        <div>
            <div>
                <img src={icon} alt="" srcset="" style={{width:'20px'}}/>
                <span>Sarvesh Bhatt</span>
            </div>
            <div>
                <p>My first post</p>
            </div>
            <div className={style.postbuttons}>
                <span>
                <ThumbUpAltIcon />
                    
                    Like
                </span>
                <span>
                    <CommentIcon />
                        Comment
                </span>
              <span>
            <ThumbDownAltIcon />
                Dislike
              </span>
            </div>
        </div>
    )
}

export default DummyPost
