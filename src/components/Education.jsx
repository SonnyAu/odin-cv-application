import "../styles/Education.css";
import { useState } from "react";
export default function Education({ educationInfo, setEducationInfo }) {
  const { school, major, schoolStart, schoolEnd } = educationInfo;
  const [isEditing, setIsEditing] = useState(false);
  function handleClick() {
    if (isEditing) {
      setEducationInfo((prev) => {
        return { ...prev };
      });
    }
    setIsEditing((prev) => !prev);
  }

  function handleChange(e, field) {
    setEducationInfo((prev) => {
      return { ...prev, [field]: e.target.value };
    });
  }
  return (
    <>
      {!isEditing ? (
        <div className="education-cv">
          <h1>Education</h1>
          <div>{`${school}: ${major}`}</div>
          <div>Attended: {`${schoolStart} - ${schoolEnd}`}</div>
          <button onClick={handleClick}>Edit Education</button>
        </div>
      ) : (
        <div className="education-cv">
          <h1>Education</h1>
          <input
            type="text"
            value={school}
            onChange={(e) => handleChange(e, "school")}
          />
          <input
            type="text"
            value={major}
            onChange={(e) => handleChange(e, "major")}
          />
          <div>Attended:</div>
          <input
            type="date"
            value={schoolStart}
            onChange={(e) => handleChange(e, "schoolStart")}
          />
          <input
            type="date"
            value={schoolEnd}
            onChange={(e) => handleChange(e, "schoolEnd")}
          />
          <button onClick={handleClick}>Save Education</button>
        </div>
      )}
    </>
  );
}
