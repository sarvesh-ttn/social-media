import style from './contacts.module.css'
import icon from '../../../assets/avatar.jpg'

const MyContacts = () => {
    return (
        <div className={style.mainDiv}> 
        <h3>Suggestions</h3>
            <ul className={style.list}>
                <div className={style.listDiv}>
                <img src={icon} className={style.icon} alt="" srcset="" />
                <span>Sarvesh Bhatt</span>
                </div>
                <div className={style.listDiv}>
                <img src={icon} className={style.icon} alt="" srcset="" />
                <span>Amit Thakur</span>
                </div>
                <div className={style.listDiv}>
                <img src={icon} className={style.icon} alt="" srcset="" />
                <span>Chetan Singh</span>
                </div>
                <div className={style.listDiv}>
                <img src={icon} className={style.icon} alt="" srcset="" />
                <span>Deepak Loshali</span>
                </div>
                <div className={style.listDiv}>
                <img src={icon} className={style.icon} alt="" srcset="" />
                <span>Harsh Joshi</span>
                </div>
                
            </ul>
        </div>
    )
}

export default MyContacts
