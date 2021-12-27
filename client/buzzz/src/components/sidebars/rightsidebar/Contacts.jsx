import { useEffect } from 'react'
import {useDispatch,useSelector} from "react-redux"
import {getUsers} from "../../../store/actions/userActions"
import style from './contacts.module.css'
import Avatar from '../../../utils/avatar'

const MyContacts = () => {
    const response = useSelector(state=>state.allUsers.users);
    const {username,_id,profilePic} = response;
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getUsers())
    },[])
    return (        
        <div className={style.mainDiv}> 
        <h3>Contacts</h3>
            <ul className={style.list}>
                {/* { response.map((user)=>{ */}
    
                {/* return( */}
                <div className={style.listDiv} key={_id}>
                <Avatar props={profilePic}/>
                <span>{username}</span>
                </div>
                {/* )}) */}
                {/* }     */}
        </ul>
        </div>
    )
}

export default MyContacts
