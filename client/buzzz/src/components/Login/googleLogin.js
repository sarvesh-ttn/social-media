import React from 'react'
import styles from './googleLogin.module.css'
import axios from 'axios'

const GoogleLogin = () => {
   async function loginHandler(){
    const user = await axios({
        method:'GET',
        url:'http://localhost:5000/google',
    })
    console.log(user.data);
    }
    return (
        <div className={styles.wrapper}>
            <img src='./ttnlogo.jpg' alt='ttn-logo' />
            <p>Enter your details and Start</p>
            <p>your journey with us</p>
            <p>Don't Stop until you're proud</p>
            <button className={styles.button} onClick={loginHandler}>
                <a href="http://localhost:5000/google" className={styles.anchor}>Sign in with Google</a>
            </button>
        </div>
    )
}

export default GoogleLogin
