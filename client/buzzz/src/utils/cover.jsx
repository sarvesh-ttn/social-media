import style from './cover.module.css'
import Image from "../assets/person.jpg"

const CoverImage = (props) => {
    return (
        <div className={style.coverImageDiv}>
        <img src={props.Image} className={style.coverImage} alt="Empty Background" />
        </div>
    )
}

export default CoverImage
