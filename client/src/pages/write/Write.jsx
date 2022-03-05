import "./write.css";

export default function Write() {
  return (
    <div className="write">
      <img
        src="https://images.pexels.com/photos/597200/pexels-photo-597200.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt=""
        className="writeImg"
      />{" "}
      <form action="" className="writeForm">
        {" "}
        <div className="writeFormGroup">
          {" "}
          <label htmlFor="fileInput">
            {" "}
            <i className="writeIcon fa-solid fa-plus"></i>{" "}
          </label>{" "}
          <input type="file" id="fileInput" style={{ display: "none" }} />{" "}
          <input
            type="text"
            id="title"
            className="writeInput"
            placeholder="title"
            autoFocus={true}
          />{" "}
        </div>{" "}
        <div className="writeFormGroup">
          {" "}
          <textarea
            placeholder="Tell your story"
            type="text"
            className="writeInput writeText"
          ></textarea>{" "}
        </div>{" "}
        <button className="writeSubmit">Publish</button>{" "}
      </form>{" "}
    </div>
  );
}
