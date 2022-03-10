import { useContext, useState } from "react";
import axios from "axios";
import { Context } from "./../../context/Context";
import { useNavigate } from "react-router-dom";
import "./write.css";

export default function Write() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);
  const { user } = useContext(Context);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      title,
      description,
      username: user.username,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;
      try {
        await axios.post("/upload", data);
      } catch (error) {
        console.error(error);
      }
    }
    try {
      const res = await axios.post("/post", newPost);
      navigate("/post/" + res.data._id);
    } catch (error) {
      console.log("error");
    }
  };

  return (
    <div className="write">
      {file && (
        <img src={URL.createObjectURL(file)} alt="" className="writeImg" />
      )}
      <form action="" className="writeForm" onSubmit={handleSubmit}>
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fa-solid fa-plus"></i>
          </label>
          <input
            onChange={(e) => setFile(e.target.files[0])}
            type="file"
            id="fileInput"
            style={{ display: "none" }}
          />
          <input
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            id="title"
            className="writeInput"
            placeholder="title"
            autoFocus={true}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Tell your story"
            type="text"
            className="writeInput writeText"
          ></textarea>
        </div>
        <button className="writeSubmit">Publish</button>
      </form>
    </div>
  );
}
