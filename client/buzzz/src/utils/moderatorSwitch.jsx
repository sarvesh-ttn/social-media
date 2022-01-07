
import Switch from '@material-ui/core/Switch';
import { useSelector,useDispatch } from 'react-redux'
import { useState,useEffect } from 'react';

const ModeratorSwitch = () => {
    const loggedUser =useSelector(store => store.profile.user);
    const [adminBtn,setAdminBtn] = useState()
    
    const handleSwitchChange=()=>{

    }
    useEffect(()=>{
        setAdminBtn(loggedUser.isAdmin)
    },[])
    return (
        <div>
            {adminBtn? <Switch disabled/>:
             <Switch
             color="primary"
             onChange={handleSwitchChange}
      />}
        </div>
    )
}

export default ModeratorSwitch
