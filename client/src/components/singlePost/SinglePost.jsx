import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import { useNavigate } from "react-router-dom";
import "./singlePost.css";

function SinglePost() {
  // Navigate
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname.split("/")[2];

  // Info post
  const PF = process.env.REACT_APP_PF;
  const [post, setPost] = useState(null);
  const { user } = useContext(Context);

  // To update
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [updateMode, setUpdateMode] = useState(false);

  // Get info of page
  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get(`/api/post/${path}`);
      const { data } = res;
      setPost(data);
      const { title, description } = data;
      setTitle(title);
      setDescription(description);
    };
    getPost();
  }, [path]);

  // Delete post
  const handleDelete = async () => {
    try {
      await axios.delete(`/api/post/${path}`, {
        data: {
          username: user.username,
        },
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`/api/post/${path}`, {
        username: user.username,
        title,
        description,
      });
      setUpdateMode(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {post?.photo && (
          <img src={PF + post?.photo} alt="" className="singlePostImg" />
        )}
        {updateMode ? (
          <input
            type="text"
            className="singlePostTitle"
            value={title}
            autoFocus
            onChange={(e) => setTitle(e.target.value)}
          />
        ) : (
          <h1 className="singlePostTitle">
            {title}
            {post?.username === user?.username && (
              <div className="singlePostIcons">
                <i
                  className="singlePostIcon fa-solid fa-pen-to-square"
                  onClick={() => setUpdateMode(true)}
                ></i>
                <i
                  className="singlePostIcon fa-solid fa-trash-can"
                  onClick={handleDelete}
                ></i>
              </div>
            )}
          </h1>
        )}
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Autor:
            <Link to={`/?user=${post?.username}`} className="link">
              <b>{post?.username}</b>
            </Link>
          </span>
          <span className="singlePostDate">
            {new Date(post?.createdAt).toDateString()}
          </span>
        </div>
        {updateMode ? (
          <textarea
            className="singlePostDescription"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        ) : (
          <p className="singlePostDescription">{description}</p>
        )}
        {updateMode ? (
          <button onClick={handleUpdate} className="singlePostButton">
            Update
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default SinglePost;
