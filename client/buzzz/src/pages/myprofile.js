import HeaderBar from '../components/header/header-bar'
import ProfileDetailForm from '../components/Login/profiledetailform'
import Suggestions from '../components/sidebars/rightsidebar/Suggestions'
import CoverImage from '../utils/cover'
import DisplayImage from '../utils/displayimage'
import style from "./myprofile.module.css"

const MyProfile = () => {
    return (
        <div className={style.container}>
            <div className={style.header}>
            <HeaderBar />
            </div>
            <div className={style.wrapper}>
                <section className={style.profileSection}>
                    <CoverImage/>
                    <DisplayImage/>
                    <ProfileDetailForm/>
                </section>
                <section className={style.suggestionSection}>
                    <Suggestions/>
                </section>
            </div>
        </div>
    )
}

export default MyProfile
