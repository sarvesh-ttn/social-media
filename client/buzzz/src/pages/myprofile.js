import { useSelector } from 'react-redux'
import HeaderBar from '../components/header/header-bar'
import ProfileDetailForm from '../components/Login/profiledetailform'
import Suggestions from '../components/sidebars/rightsidebar/Suggestions'
import CoverImage from '../utils/cover'
import DisplayImage from '../utils/displayimage'
import style from "./myprofile.module.css"

const MyProfile = () => {
    const loggedUser = useSelector(state => state.profile.user); 
    return (
        <div className={style.container}>
            <div className={style.header}>
            <HeaderBar />
            </div>
            <div className={style.wrapper}>
                <section className={style.profileSection}>
                    <CoverImage Image={loggedUser.coverPic}/>
                    <DisplayImage Image={loggedUser.profilePic}/>
                    <ProfileDetailForm data={loggedUser}/>
                </section>
                <section className={style.suggestionSection}>
                    <Suggestions/>
                </section>
            </div>
        </div>
    )
}

export default MyProfile
