import { Link } from "react-router-dom";
import "./topBar.css";

export default function TopBar() {
  const user = false;
  return (
    <div className="topbar">
      <div className="topbarLeft">
        <i className="topbarIcon fa-brands fa-facebook-square"></i>
        <i className="topbarIcon fa-brands fa-twitter-square"></i>
        <i className="topbarIcon fa-brands fa-instagram-square"></i>
        <i className="topbarIcon fa-brands fa-linkedin"></i>
      </div>

      <div className="topbarCenter">
        <ul className="topbarList">
          <li className="topbarListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="topbarListItem">
            <Link className="link" to="/about">
              ABOUT
            </Link>
          </li>
          <li className="topbarListItem">
            <Link className="link" to="/contact">
              CONTACT
            </Link>
          </li>
          <li className="topbarListItem">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
          <li className="topbarListItem">
            <Link className="link" to="/">
              {user ? "LOGOUT" : ""}
            </Link>
          </li>
        </ul>
      </div>

      <div className="topbarRight">
        {user ? (
          <img
            className="topbarRightImage"
            src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?cs=srgb&dl=pexels-justin-shaifer-1222271.jpg&fm=jpg"
            alt="profile of this person"
          />
        ) : (
          <ul className="topbarList">
            <li className="topbarListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>

            <li className="topbarListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        <i className="topbarIconSearch fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
}
