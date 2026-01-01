import Section from "./Section.jsx";
import { EDUCATION } from "../data.js";
import EducationCard from "./EducationCard.jsx";

function Education() {
  return (
    <Section title="Education">
      <div className="education-container">
        {EDUCATION.map((edu) => (
          <EducationCard key={edu.title} {...edu} />
        ))}
      </div>
    </Section>
  );
}

export default Education;
