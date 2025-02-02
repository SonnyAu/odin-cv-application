import { useState } from "react";
import "../styles/PersonalInfo.css";

export default function PersonalInfo({ personalInfo, setPersonalInfo }) {
  const [isEditing, setIsEditing] = useState(false);
  const { firstName, lastName, email, phoneNumber } = personalInfo;

  function handleClick() {
    if (isEditing) {
      setPersonalInfo((prev) => {
        return { ...prev };
      });
    }
    setIsEditing((prev) => !prev);
  }
  function handleChange(e, field) {
    setPersonalInfo((prev) => {
      return { ...prev, [field]: e.target.value };
    });
  }
  return (
    <>
      {!isEditing ? (
        <div>
          <h1>Personal Info</h1>

          <p>{firstName + " " + lastName}</p>
          <p>{email}</p>
          <p>{phoneNumber}</p>
          <button onClick={handleClick}>Edit Personal Info</button>
        </div>
      ) : (
        <div>
          <h1>Personal Info</h1>

          <div>
            <input
              type="text"
              value={firstName}
              onChange={(e) => handleChange(e, "firstName")}
            />
            <input
              type="text"
              value={lastName}
              onChange={(e) => handleChange(e, "lastName")}
            />
          </div>
          <input
            type="text"
            value={email}
            onChange={(e) => handleChange(e, "email")}
          />
          <input
            type="tel"
            value={phoneNumber}
            onChange={(e) => handleChange(e, "phoneNumber")}
          />
          <button onClick={handleClick}>Save Personal Info</button>
        </div>
      )}
    </>
  );
}
