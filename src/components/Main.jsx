import Intro from "./Intro.jsx";
import Section from "./Section.jsx";
import EducationCard from "./EducationCard.jsx";
import { EDUCATION } from "../data.js";

function Main() {
  return (
    <>
      <Intro />
      <Section title="Education">
        {EDUCATION.map((edu) => (
          <EducationCard
            key={edu.title}
            {...edu}
          />
        ))}
      </Section>
    </>
  );
}

export default Main;
