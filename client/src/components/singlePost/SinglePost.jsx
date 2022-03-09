import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import "./singlePost.css";

function SinglePost() {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState(null);

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get(`/post/${path}`);
      const { data } = res;
      setPost(data);
    };
    getPost();
  }, [path]);

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {post?.photo && (
          <img src={post?.photo} alt="" className="singlePostImg" />
        )}
        <h1 className="singlePostTitle">
          {post?.title}
          <div className="singlePostIcons">
            <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
            <i className="singlePostIcon fa-solid fa-trash-can"></i>
          </div>
        </h1>
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
        <p className="singlePostDescription">{post?.description}</p>
      </div>
    </div>
  );
}

export default SinglePost;
