import laptop from "../assets/laptop.png";

function Intro() {
  return (
    <section>
      <img className="laptop" src={laptop} alt="laptop" />
      <div className="intro">
        <h1>Rany Daioub</h1>
        <p>Cyber Automation Engineer, with experience in React</p>
      </div>
    </section>
  );
}

export default Intro;
