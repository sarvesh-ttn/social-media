import styles from './userprofile.module.css'
import icon  from '../../../assets/person.jpg'
import Avatar from '../../../utils/avatar'
const UserProfileCard = () => {
    return (
        <div className={styles.user}>
            <div className={styles.coverdiv}>
                <img src={icon} alt="" />
            </div>
            <div className={styles.icondiv}>
            <Avatar />
            </div>
            <div className={styles.userdetails}>
                <span>Sarvesh Bhatt</span>
                <span> TTN</span>
            </div>
        </div>
    )
}

export default UserProfileCard
