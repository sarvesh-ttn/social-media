import styles from './sidebar.module.css'
import MyContacts from './Contacts'
import Suggestions from './Suggestions'
import UserProfileCard from '../leftsidebar/userprofile'

const SideBarContainer = () => {
    return (
        <div className={styles.sidebar}>
            <MyContacts />
            <Suggestions />
        </div>
    )
}

export default SideBarContainer