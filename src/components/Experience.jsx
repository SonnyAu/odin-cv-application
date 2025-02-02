import { useState } from "react";
import "../styles/Experience.css";

export default function Experience({ experience, setExperience }) {
  const [isEditing, setIsEditing] = useState(false);
  /*const { company, position, responsibilities, startDate, endData } =
    experience;*/
  const experienceArr = experience;

  function handleClick() {
    if (isEditing) {
      setExperience((prev) => {
        return [...prev];
      });
    }
    setIsEditing((prev) => !prev);
  }
  function handleChange(e, field, index) {
    setExperience((prev) => {
      return prev.map((job, i) =>
        i === index ? { ...job, [field]: e.target.value } : job
      );
    });
  }
  return (
    <>
      {!isEditing ? (
        <div>
          <h1>Experience</h1>

          {experienceArr.map((job, index) => {
            return (
              <>
                <div key={index}>Company: {job.company}</div>
                <div key={index}>Position: {job.position}</div>
                <div key={index}>Responsibilties: {job.responsibilities}</div>
                <div key={index}>Start: {job.startDate}</div>
                <div key={index}>End: {job.endDate}</div>
                <hr />
              </>
            );
          })}
          <button onClick={handleClick}>Edit Experience</button>
        </div>
      ) : (
        <div>
          <h1>Experience</h1>

          {experienceArr.map((job, index) => {
            return (
              <div key={index} className="experience-edit">
                <input
                  type="text"
                  key={index}
                  value={job.company}
                  onChange={(e) => handleChange(e, "companny", index)}
                />
                <input
                  type="text"
                  key={index}
                  value={job.position}
                  onChange={(e) => handleChange(e, "position", index)}
                />
                <textarea
                  key={index}
                  value={job.responsibilities}
                  onChange={(e) => handleChange(e, "responsibilities", index)}
                ></textarea>
                <input
                  type="date"
                  key={index}
                  value={job.startDate}
                  onChange={(e) => handleChange(e, "startDate", index)}
                />
                <input
                  type="date"
                  key={index}
                  value={job.endDate}
                  onChange={(e) => handleChange(e, "endDate", index)}
                />
                <hr />
              </div>
            );
          })}

          <button onClick={handleClick}>Save Experience</button>
        </div>
      )}
    </>
  );
}
