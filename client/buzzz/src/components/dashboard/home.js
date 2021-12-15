import React from 'react'
import GoogleLogin from '../Login/googleLogin'
import styles from  './home.module.css'

const Home = () => {
    return (
        <div className={styles.loginWrapper}>
            <GoogleLogin/>
        </div>
    )
}

export default Home
