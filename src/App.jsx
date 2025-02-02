import { useState } from "react";
import PersonalInfoForm from "./components/PersonalInfoForm";
import PersonalInfo from "./components/PersonalInfo";
import Experience from "./components/Experience";
import EducationForm from "./components/EducationForm";
import "./App.css";
import ExperienceForm from "./components/ExperienceForm";
import Education from "./components/Education";
function App() {
  const [personalInfo, setPersonalInfo] = useState();
  const [educationInfo, setEducationInfo] = useState();
  const [experience, setExperience] = useState([]);
  const [isFilled, setFilled] = useState(false);
  console.log(experience);

  function getCV() {
    console.log(personalInfo);
    console.log(educationInfo);
    console.log(experience);

    if (personalInfo && experience && educationInfo) {
      setFilled(true);
    }
    console.log(isFilled);
  }

  return (
    <div id="app">
      <section id="main-form">
        <PersonalInfoForm
          personalInfo={personalInfo}
          setPersonalInfo={setPersonalInfo}
        />
        <EducationForm
          educationInfo={educationInfo}
          setEducationInfo={setEducationInfo}
        />
        <ExperienceForm experience={experience} setExperience={setExperience} />
        <button type="submit" onClick={getCV} id="generate-btn">
          Get CV
        </button>
      </section>
      {isFilled && (
        <main>
          <PersonalInfo
            personalInfo={personalInfo}
            setPersonalInfo={setPersonalInfo}
          />
          <Education
            educationInfo={educationInfo}
            setEducationInfo={setEducationInfo}
          />
          <Experience experience={experience} setExperience={setExperience} />
        </main>
      )}
    </div>
  );
}

export default App;
