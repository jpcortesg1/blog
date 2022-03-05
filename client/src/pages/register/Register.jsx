import { Link } from "react-router-dom";
import "./register.css";

export default function Login() {
  return (
    <div className="login">
      <span className="loginTitle">Register</span>
      <form action="" className="loginForm">
        <label htmlFor="">Username:</label>
        <input type="text" placeholder="Enter your username..." />
        <label htmlFor="">Email:</label>
        <input type="email" placeholder="Enter your email..." />
        <label htmlFor="">Password:</label>
        <input type="email" placeholder="Enter your password..." />
        <button className="loginButton">Register</button>
      </form>
      <button className="loginRegisterButton">
        <Link className="link" to="/login">
          LOGIN
        </Link>
      </button>
    </div>
  );
}
