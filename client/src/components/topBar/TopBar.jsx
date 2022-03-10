import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./topBar.css";

export default function TopBar() {
  const { user, dispatch } = useContext(Context);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  const PF = process.env.REACT_APP_PF;

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
          <li className="topbarListItem" onClick={handleLogout}>
            {user ? "LOGOUT" : ""}
          </li>
        </ul>
      </div>

      <div className="topbarRight">
        {user ? (
          <Link className="link" to="/settings">
            {user.profilePic ? (
              <img className="topbarRightImage" src={PF + user.profilePic} alt="" />
            ) : (
              <div className="topbarRightNoImage">Profile</div>
            )}
          </Link>
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
