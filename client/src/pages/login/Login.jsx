import { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Context } from "./../../context/Context";
import { useNavigate } from "react-router-dom";
import "./login.css";

export default function Login() {
  const userRef = useRef();
  const passRef = useRef();
  const [error, setError] = useState(false);
  const { dispatch, isFetching } = useContext(Context);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    setError(false);
    try {
      const res = await axios.post("/api/auth/login", {
        username: userRef.current.value,
        password: passRef.current.value,
      });
      const { data } = res;
      dispatch({ type: "LOGIN_SUCCESS", payload: data });
      navigate("/");
    } catch (error) {
      dispatch({ type: "LOGIN_FAILURE" });
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 5000);
    }
  };

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
        <button type="submit" className="loginButton" disabled={isFetching}>
          Login
        </button>
        {error && (
          <span className="loginError">There is a problem logging in</span>
        )}
      </form>
      <button className="loginRegisterButton" disabled={isFetching}>
        <Link className="link" to="/register">
          REGISTER
        </Link>
      </button>
    </div>
  );
}
