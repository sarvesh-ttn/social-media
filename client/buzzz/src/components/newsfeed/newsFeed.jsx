import styles from "./newsfeed.module.css";
import React, { useEffect, useState } from "react";
import CreatePost from "../add-post/createPost";
import DummyPost from "../add-post/dummyPost";
import { useSelector, useDispatch } from "react-redux";
import { getAllPosts } from "../../store/actions/getAllPosts";
import { getUser } from "../../store/actions/getUserAction";
import ModeratorSwitch from "../../utils/moderatorSwitch";

const NewsFeed = () => {
  const loggedUser = useSelector((store) => store.profile.user);
  const loggedUserId = loggedUser._id;
  const allPosts = useSelector((store) => store.allPosts.posts);
  const [postData,setPostData] = useState()
  const [isAdmin, setIsAdmin] = useState(loggedUser.isAdmin);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPosts(loggedUserId));
    setPostData(allPosts)
    // console.log(postData,'pd');
    // filterPosts()
  }, [dispatch]);
// const filterPosts =async()=>{
//     ss= postData.filter(item=>item.isFlagged===true)
//     console.log(ss,'pp');
// }
  return (
    <div className={styles.feed}>
      <CreatePost />
      
      {isAdmin && <div className={styles.adminBtn}>
        <span> Moderator</span>
        <span><ModeratorSwitch /></span>
      </div>}
      {isAdmin && allPosts.map((post) => {
        return <DummyPost data={post} key={post._id} />;
      })}
      {/* {isAdmin && postData.map((post)=>{
          return <DummyPost data={post} key={post._id} />
      }) } */}
    </div>
  );
};

export default NewsFeed;
