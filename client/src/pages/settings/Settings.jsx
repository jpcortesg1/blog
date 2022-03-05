import Sidebar from "../../components/sidebar/Sidebar";
import "./settings.css";

export default function Settings() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update You Account</span>
          <span className="settingsDeleteTitle">Delete You Account</span>
        </div>
        <form action="" className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img
              src="https://images.pexels.com/photos/11229378/pexels-photo-11229378.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt=""
            />
            <label htmlFor="fileInput">
              <i class="settingsPPIcon fa-solid fa-square-pen"></i>
            </label>
            <input type="file" id="fileInput" style={{ display: "none" }} />
          </div>
          <label htmlFor="">Username:</label>
          <input type="text" placeholder="Juan" />
          <label htmlFor="">Email:</label>
          <input type="email" placeholder="juan@mail.com" />
          <label htmlFor="">Password:</label>
          <input type="password" />
          <button className="settingsSubmit">Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}
