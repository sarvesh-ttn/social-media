import "./header-bar.css";
import { Search, Person,} from "@material-ui/icons";
import { Link } from "react-router-dom";
import Avatar from "../../utils/avatar"
import SimpleDialogDemo from "./friendRequestDialog";
import Icon from "../../assets/person.jpg"
import {useSelector} from "react-redux"

export default function HeaderBar() {
 
  const image = useSelector(store => store.profile.user.profilePic);
  const url = process.env.REACT_APP_API_ENDPOINT;
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link to="/home" style={{ textDecoration: "none" }}>
          <div className="logo"></div>
        </Link>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input
            placeholder="Search for friend"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <SimpleDialogDemo />
          </div>
        <Link to="/myprofile">
          <Avatar image={image}/>
        </Link>
        </div>
      </div>
    </div>
  );
}