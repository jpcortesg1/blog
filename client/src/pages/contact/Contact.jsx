import Sidebar from "../../components/sidebar/Sidebar";
import "./contact.css";

export default function Contact() {
  return (
    <div className="contact">
      <div className="contactWrapper">
        <div className="contactIntroduction">
          <h2 className="contactTitle">Contact me if</h2>
          <p className="contactText">
            Contact me if you have any concerns, doubts, suggestions or just if
            you want to know more or need something from me.
          </p>
        </div>

        <form action="" className="contatcForm">
          <div className="contactFormGroup">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              className="contactInput"
              autoComplete="off"
              placeholder="Write your name..."
            />
          </div>

          <div className="contactFormGroup">
            <label htmlFor="email">Emanil</label>
            <input
              id="email"
              type="email"
              className="contactInput"
              autoComplete="off"
              placeholder="Write your email..."
            />
          </div>

          <div className="contactFormGroup">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              type="description"
              className="contactInput contactTextarea"
              autoComplete="off"
              placeholder="Write your description..."
            />
          </div>

          <button className="contactButton">Contact Me</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}
