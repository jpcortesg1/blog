import "./post.css";

function Post() {
  return (
    <div className="post">
      <img
        src="https://images.pexels.com/photos/1899567/pexels-photo-1899567.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt=""
        className="postImg"
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Body</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor sit.</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDescription">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed nostrum rem minus perspiciatis, vitae rerum at quisquam dolor praesentium provident magnam, voluptatum quia dolores? Porro facilis nihil ducimus expedita voluptatem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde cupiditate tenetur in reprehenderit rerum ab dignissimos. Tempore provident aperiam tempora quaerat omnis, natus, quae, consequuntur modi officiis dolorum iure exercitationem.
        </p>
    </div>
  );
}

export default Post;
