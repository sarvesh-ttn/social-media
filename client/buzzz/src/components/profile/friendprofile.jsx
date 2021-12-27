import { useEffect } from 'react'
import {useDispatch,useSelector} from "react-redux"
import { useParams } from "react-router-dom";
import CoverImage from "../../utils/cover";
import DisplayImage from "../../utils/displayimage";
import style from "./friendprofile.module.css";
import Icon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';

const FriendProfile = () => {
  const response = useSelector()
  const dispatch = useDispatch()
  const { userId } = useParams();
  useEffect(()=>{
      dispatch(getUsers(userId))
  },[])
  return (
    <div className={style.wrapper}>
      <div className={style.profileCover}>
        <CoverImage />
      </div>
      <div className={style.profileImage}>
        <DisplayImage />
      </div>
      <div className={style.profileDetail}>
        <h1>Marcus Aurelius</h1>
        <h4>Ethan Hunt</h4>
        <p>Working at To The New</p>
      </div>
      <div className={style.addFriendButton}>    
      <Button
          variant="contained"
          color="primary"
          endIcon={<Icon></Icon>}
        >
          Add Friend
        </Button>
      </div>
    </div>
  );
};

export default FriendProfile;
