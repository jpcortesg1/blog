import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./register.css";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/auth/register", {
        username,
        email,
        password,
      });

      res.data && window.location.replace("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="login">
      <span className="loginTitle">Register</span>
      <form className="loginForm" onSubmit={handleSubmit}>
        <label htmlFor="">Username:</label>
        <input
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          placeholder="Enter your username..."
        />

        <label htmlFor="">Email:</label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Enter your email..."
        />

        <label htmlFor="">Password:</label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Enter your password..."
        />

        <button className="loginButton">Register</button>
      </form>
      <button className="loginRegisterButton" type="submit">
        <Link className="link" to="/login">
          LOGIN
        </Link>
      </button>
    </div>
  );
}
