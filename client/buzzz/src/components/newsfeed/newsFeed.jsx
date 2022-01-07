import styles from './newsfeed.module.css'
import React ,{useEffect,useState} from 'react'
import CreatePost from '../add-post/createPost'
import DummyPost from '../add-post/dummyPost'
import { useSelector,useDispatch } from 'react-redux'
import { getAllPosts } from '../../store/actions/getAllPosts'
import ModeratorSwitch from '../../utils/moderatorSwitch'

const NewsFeed = () => {
    const loggedUserId =useSelector(store => store.profile.user._id);
    const allPosts = useSelector(store=>store.allPosts.posts);
    
    const [postData,setPostData] = useState([]);
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllPosts(loggedUserId))
        setPostData(allPosts);
        console.log(postData,'postdata');
    }, [dispatch,postData])

    return (
        <div className={styles.feed}>
            <CreatePost/>
            <div className={styles.adminBtn}>
            <span> Moderator
            </span>
                <span>
            <ModeratorSwitch/>
                </span>
            </div>
            {allPosts.map(post=>{
                return (
                    <DummyPost data={post} key={post._id}/>
                )
            })}
        </div>
    )
}

export default NewsFeed
