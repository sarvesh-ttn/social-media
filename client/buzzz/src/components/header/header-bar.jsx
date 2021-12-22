import "./header-bar.css";
import { Search, Person, Chat, Notifications } from "@material-ui/icons";
import { Link } from "react-router-dom";
import Avatar from "../../utils/avatar"
import Icon from "../../assets/person.jpg"
// import { useContext } from "react";
// import { AuthContext } from "../../context/AuthContext";

export default function HeaderBar() {
//   const { user } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link to="/" style={{ textDecoration: "none" }}>
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
            <Person />
            <span className="topbarIconBadge">5</span>
          </div>
        <Link to="/">
          <Avatar pic={Icon}/>
        </Link>
        </div>
      </div>
    </div>
  );
}