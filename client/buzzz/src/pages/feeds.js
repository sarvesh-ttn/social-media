import styles from './feeds.module.css'
import CreatePost from '../components/add-post/createPost';
import Header from '../components/header/header-bar';
import SideBarContainer from '../components/sidebars/rightsidebar/SideBarContainer';
import DummyPost from '../components/add-post/dummyPost';

const Feeds = () => {
    return (
        <div>
            <Header />
            <div className={styles.wrapper}>
            <CreatePost/>
            <DummyPost/>
            {/* <SideBarContainer/> */}
            </div>
        </div>
    )
}

export default Feeds
