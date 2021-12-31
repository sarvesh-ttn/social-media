import styles from './newsfeed.module.css'
import React ,{useEffect} from 'react'
import CreatePost from '../add-post/createPost'
import DummyPost from '../add-post/dummyPost'
import { useSelector,useDispatch } from 'react-redux'
import { getAllPosts } from '../../store/actions/getAllPosts'

const NewsFeed = () => {
    const loggedUserId =useSelector(store => store.profile.user._id);
    const allPosts = useSelector(store=>store.allPosts.posts);
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllPosts(loggedUserId))
    }, [dispatch,loggedUserId])

    return (
        <div className={styles.feed}>
            <CreatePost/>
            {allPosts.map(post=>{
                return (
                    <DummyPost data={post} key={post._id}/>
                )
            })}
        </div>
    )
}

export default NewsFeed
