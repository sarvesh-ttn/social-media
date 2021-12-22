import styles from './newsfeed.module.css'
import React from 'react'
import CreatePost from '../add-post/createPost'
import DummyPost from '../add-post/dummyPost'

const NewsFeed = () => {
    return (
        <div className={styles.feed}>
            <CreatePost/>
            <DummyPost/>
        </div>
    )
}

export default NewsFeed
