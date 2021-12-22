import  style  from './avatar.module.css'
import Pic from '../assets/dp.png'

const Avatar = (props) => {
    return (
        <div className={style.mainDiv}>
            <img className={style.avatarImage} src={props.pic? props.pic:Pic} alt="" />
        </div>
    )
}

export default Avatar
