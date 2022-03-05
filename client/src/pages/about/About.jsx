import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import { Link } from "react-router-dom";
import "./about.css";

function About() {
  return (
    <div className="about">
      <div className="aboutWrapper">
        <div className="aboutContent">
          <h2 className="aboutTitle">Why?</h2>
          <p className="aboutText">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
            assumenda, nam labore delectus ipsam voluptatum culpa doloremque
            repellendus accusamus, voluptate quaerat molestiae optio laboriosam
            ratione. Veritatis impedit debitis eveniet maiores.
          </p>
        </div>

        <div className="aboutContent">
          <h2 className="aboutTitle">What?</h2>
          <p className="aboutText">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
            assumenda, nam labore delectus ipsam voluptatum culpa doloremque
            repellendus accusamus, voluptate quaerat molestiae optio laboriosam
            ratione. Veritatis impedit debitis eveniet maiores.
          </p>
        </div>

        <div className="aboutContent">
          <h2 className="aboutTitle">Who?</h2>
          <p className="aboutText">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
            assumenda, nam labore delectus ipsam voluptatum culpa doloremque
            repellendus accusamus, voluptate quaerat molestiae optio laboriosam
            ratione. Veritatis impedit debitis eveniet maiores.
          </p>
        </div>

        <span className="aboutContact">
          <Link to="/contact" className="link">
            if you are interested you can contact me
          </Link>
        </span>
      </div>
      <Sidebar />
    </div>
  );
}

export default About;
