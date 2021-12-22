import Avatar from '../../../utils/avatar'
import style from './suggestions.module.css'


const Suggestions = () => {
    return (
        <div className={style.mainDiv}> 
        <h3>Suggestions</h3>
            <ul className={style.list}>
            <div className={style.listDiv}>
                <Avatar/>
                <span>Harsh Joshi</span>
                </div>
                <div className={style.listDiv}>
                <Avatar/>
                <span>Harsh Joshi</span>
                </div>
                <div className={style.listDiv}>
                <Avatar/>
                <span>Harsh Joshi</span>
                </div>
                <div className={style.listDiv}>
                <Avatar/>
                <span>Harsh Joshi</span>
                </div>
                <div className={style.listDiv}>
                <Avatar/>
                <span>Harsh Joshi</span>
                </div>
                
            </ul>
        </div>
    )
}

export default Suggestions
