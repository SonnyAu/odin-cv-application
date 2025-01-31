import React from "react";
import "../styles/PersonalInfo.css";

export default function PersonalInfoForm({ personalInfo, setPersonalInfo }) {
  function submitForm(formData) {
    const data = Object.fromEntries(formData);
    setPersonalInfo(data);
  }
  return (
    <div className="form-section">
      <h1 className="title">Personal Info</h1>
      <form className="personal-info" action={submitForm}>
        <input type="text" placeholder="First Name" name="firstName"></input>
        <input type="text" placeholder="Last Name" name="lastName"></input>
        <input
          type="email"
          placeholder="john.doe@gmail.com"
          name="email"
        ></input>
        <input type="tel" placeholder="123-456-7890" name="phoneNumber"></input>
        <button type="submit">Submit Personal Info</button>
      </form>
    </div>
  );
}
