import "./post.css";
import { Link } from "react-router-dom";

function Post({ post }) {
  const PF = process.env.REACT_APP_PF;

  return (
    <div className="post">
      {post.photo && (
        <Link to={`/post/${post._id}`} className="link">
          <img src={PF + post.photo} alt="" className="postImg" />
        </Link>
      )}
      <div className="postInfo">
        <div className="postCats">
          {post.categories.map((c) => (
            <span className="postCat">c.name</span>
          ))}
        </div>
        <Link to={`/post/${post._id}`} className="link">
          <span className="postTitle">{post.title}</span>
        </Link>
        <hr />
        <span className="postDate">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <p className="postDescription">{post.description}</p>
    </div>
  );
}

export default Post;
