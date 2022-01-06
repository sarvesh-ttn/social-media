import React,{useRef,useEffect,useState} from 'react'
import PhotoSizeSelectActualIcon from '@material-ui/icons/PhotoSizeSelectActual';
import { useSelector,useDispatch } from 'react-redux';
import style from './createPost.module.css'
import Avatar from "../../utils/avatar"
import { createPost } from '../../store/actions/createPost';

const CreatePost = () => {
    const [fileInputState, setFileInputState] = useState('');
    const [selectedFile, setSelectedFile] = useState();
    const [inputText,setInputText] = useState('')

    const loggedUser = useSelector(store => store.profile.user);
    const {_id,profilePic} =loggedUser
    const dispatch = useDispatch()
    const inputRef = useRef();

    const fileInputHandler = (e) => {
            const file = e.target.files[0];
            setInputText(inputRef.current.value)
            setSelectedFile(file);
            setFileInputState(e.target.value);
    };
    const inputHandler= async(e)=>{
        e.preventDefault(); 
        const reader = new FileReader();

        if(selectedFile){
            reader.readAsDataURL(selectedFile);
            reader.onloadend = () => {
                dispatch(createPost({description:inputText,_id,image:reader.result}))
            };
            reader.onerror = () => {
                console.error('AHHHHHHHH!!');
            };
            inputRef.current.value=""
            setInputText('')
            setSelectedFile('')
            setFileInputState('');
            return;
        }
            inputRef.current.value=""
            setSelectedFile('')
            setInputText('')
        dispatch(createPost({description:inputRef.current.value,_id,image:null}))
    }
    return (
        <div className={style.createPost}>   
          <form action="" className={style.inputTextForm} onSubmit={inputHandler}>
          <Avatar Image={profilePic}  />
            <input type="text" name="" id="" ref={inputRef} className={style.postInput} placeholder='Create a post' />
            <input type="file" className={style.postImage} onChange={fileInputHandler}
             value={fileInputState}/>
            <button type='submit' className={style.shareButton}> Post</button>
                </form>
           </div>
    )
}

export default CreatePost
