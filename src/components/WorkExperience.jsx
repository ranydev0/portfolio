import Section from "./Section.jsx";
import WorkCard from "./WorkCard.jsx";
import TabButtons from "./TabButtons.jsx";
import { WORK_EXPERIENCE } from "../data.js";
import { useState } from "react";

function WorkExperience() {
  const [selectedDuration, setSelectedDuration] = useState(
    Object.keys(WORK_EXPERIENCE)[0]
  );

  function handleClick(duration) {
    setSelectedDuration(duration);
  }

  return (
    <Section title="Work Experience">
      <TabButtons
        labels={Object.keys(WORK_EXPERIENCE)}
        handleClick={handleClick}
        activeLabel={selectedDuration}
      />
      <WorkCard content={WORK_EXPERIENCE[selectedDuration]} />
    </Section>
  );
}

export default WorkExperience;
