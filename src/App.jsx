import { useState } from "react";
import PersonalInfoForm from "./components/PersonalInfoForm";
import EducationForm from "./components/EducationForm";
import "./App.css";
import ExperienceForm from "./components/ExperienceForm";

function App() {
  const [personalInfo, setPersonalInfo] = useState();
  const [educationInfo, setEducationInfo] = useState();
  const [experience, setExperience] = useState([]);
  console.log(personalInfo);
  console.log(educationInfo);

  return (
    <>
      <PersonalInfoForm
        personalInfo={personalInfo}
        setPersonalInfo={setPersonalInfo}
      />
      <EducationForm
        educationInfo={educationInfo}
        setEducationInfo={setEducationInfo}
      />
      <ExperienceForm experience={experience} setExperience={setExperience} />
    </>
  );
}

export default App;
