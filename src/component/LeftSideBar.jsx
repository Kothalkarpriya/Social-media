import "../assests/styles/leftsidebar.css";
import { Link } from "react-router-dom";
import {
  MdHome,
  MdExplore,
  MdOutlineBookmark,
  MdNotificationsActive,
} from "react-icons/md";
import { CgProfile } from "react-icons/cg";

export default function LeftSideBar() {
  return (
    <section className="left-side-container">
      <div className="left-side-first">
        <Link to="home" className="link">
          <MdHome className="icon"/>
          Home
        </Link>
        <Link to="explore" className="link">
          <MdExplore className="icon"/>
          Explore
        </Link>
        <Link to="/bookmarks" className="link">
          <MdOutlineBookmark className="icon"/>
          BookMarks
        </Link>
        <Link to="notification" className="link">
          <MdNotificationsActive className="icon"/>
          Notifications
        </Link>
        <Link to="/profile" className="link">
          <CgProfile className="icon"/>
          Profile
        </Link>
        <button className="btn">Create New Post</button>
      </div>
      <div className="left-side-second">
        {/* TOdo: Card for user Profile */}
        User
      </div>
    </section>
  );
}
