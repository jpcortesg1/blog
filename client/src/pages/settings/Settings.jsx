import Sidebar from "../../components/sidebar/Sidebar";
import { Context } from "../../context/Context";
import { useContext, useState } from "react";
import axios from "axios";
import "./settings.css";

export default function Settings() {
  const { user, dispatch } = useContext(Context);
  const [username, setUsername] = useState(user?.username || "");
  const [email, setEmail] = useState(user?.email || "");
  const [password, setPassword] = useState("");
  const [file, setFile] = useState(null);
  const PF = process.env.REACT_APP_PF;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newUser = {
        userId: user._id,
        username,
        email,
      };
      if (file) {
        const data = new FormData();
        const filename = Date.now() + file.name;
        data.append("name", filename);
        data.append("file", file);
        newUser.profilePic = filename;
        try {
          await axios.post("/upload", data);
        } catch (error) {
          console.error(error);
        }
      }
      if (password !== "") newUser.password = password;
      const res = await axios.put(`/user/${user._id}`, newUser);
      const { data } = res;
      dispatch({ type: "UPDATE_USER", payload: data });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update You Account</span>
          <span className="settingsDeleteTitle">Delete You Account</span>
        </div>
        <form action="" className="settingsForm" onSubmit={handleSubmit}>
          <label>Profile Picture</label>
          <div className="settingsPP">
            {file ? (
              <img src={URL.createObjectURL(file)} alt="" />
            ) : (
              <img src={PF + user.profilePic} alt="" />
            )}
            <label htmlFor="fileInput">
              <i className="settingsPPIcon fa-solid fa-square-pen"></i>
            </label>
            <input
              type="file"
              id="fileInput"
              style={{ display: "none" }}
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>

          <label htmlFor="">Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <label htmlFor="">Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="">Password:</label>
          <input
            type="password"
            placeholder="Write your new password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="settingsSubmit" type="submit">
            Update
          </button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}
