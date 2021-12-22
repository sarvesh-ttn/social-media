import style from './cover.module.css'
import Image from "../assets/person.jpg"

const CoverImage = (props) => {
    return (
        <div className={style.coverImageDiv}>
        <img src={props.Image?props.Image:Image} className={style.coverImage} alt="" />
        </div>
    )
}

export default CoverImage
