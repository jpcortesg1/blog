import { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Context } from "./../../context/Context";
import "./login.css";

export default function Login() {
  const userRef = useRef();
  const passRef = useRef();
  const { user, dispatch, isFetching } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", {
        username: userRef.current.value,
        password: passRef.current.value,
      });
      const { data } = res;
      dispatch({ type: "LOGIN_SUCCESS", payload: data });
    } catch (error) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };

  console.log(isFetching);
  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form action="" className="loginForm" onSubmit={handleSubmit}>
        <label htmlFor="">Username:</label>
        <input ref={userRef} type="text" placeholder="Enter your username..." />
        <label htmlFor="">Password:</label>
        <input
          ref={passRef}
          type="password"
          placeholder="Enter your password..."
        />
        <button type="submit" className="loginButton">
          Login
        </button>
      </form>
      <button className="loginRegisterButton">
        <Link className="link" to="/register">
          REGISTER
        </Link>
      </button>
    </div>
  );
}
