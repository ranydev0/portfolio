import avatar from "../assets/avatar.png";
import Button from "./Button.jsx";

function Intro() {
  return (
    <section className="intro-container">
      <div className="avatar-container">
        <img className="avatar" src={avatar} alt="avatar" />
      </div>
      <div className="intro">
        <div>
          <h1>Rany Daioub</h1>
          <p>Senior Associate Cyber Automation Engineer</p>
        </div>
        <div className="intro-buttons">
          <Button>Download Resume</Button>
          <Button clicked>Contact Me</Button>
        </div>
      </div>
    </section>
  );
}

export default Intro;
