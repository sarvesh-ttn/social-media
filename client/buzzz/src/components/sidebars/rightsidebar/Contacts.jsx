import style from './contacts.module.css'
import icon from '../../../assets/avatar.jpg'
import Avatar from '../../../utils/avatar'

const MyContacts = () => {
    return (        
        <div className={style.mainDiv}> 
        <h3>Contacts</h3>
            <ul className={style.list}>
                
                <div className={style.listDiv}>
                <Avatar/>
                <span>Harsh Joshi</span>
                </div>
                <div className={style.listDiv}>
                <Avatar/>
                <span>Harsh Joshi</span>
                </div>
                <div className={style.listDiv}>
                <Avatar/>
                <span>Harsh Joshi</span>
                </div>
                <div className={style.listDiv}>
                <Avatar/>
                <span>Harsh Joshi</span>
                </div>
                <div className={style.listDiv}>
                <Avatar/>
                <span>Harsh Joshi</span>
                </div>
                
            </ul>
        </div>
    )
}

export default MyContacts
