import "./topBar.css";

export default function TopBar() {
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
          <li className="topbarListItem">HOME</li>
          <li className="topbarListItem">ABOUT</li>
          <li className="topbarListItem">CONTACT</li>
          <li className="topbarListItem">WRITE</li>
          <li className="topbarListItem">LOGOUT</li>
        </ul>
      </div>

      <div className="topbarRight">
        <img
          className="topbarRightImage"
          src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?cs=srgb&dl=pexels-justin-shaifer-1222271.jpg&fm=jpg"
          alt="profile of this person"
        />
        <i className="topbarIconSearch fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
}
