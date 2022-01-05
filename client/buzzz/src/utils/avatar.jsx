import  style  from './avatar.module.css'
import Pic from '../assets/person.jpg'

const Avatar = (props) => {
    const pic = props.Image
    return (
        <div className={style.mainDiv}>
            <img className={style.avatarImage} src={pic? pic:Pic} alt="" />
        </div>
    )
}

export default Avatar
