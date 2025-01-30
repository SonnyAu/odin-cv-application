import { useState } from "react";
import PersonalInfo from "./components/PersonalInfo";
import "./App.css";
function submitForm(formData) {
  console.log(formData.get("firstName"));
}

function App() {
  return (
    <>
      <form action={submitForm}>
        <input type="text" placeholder="First Name" name="firstName"></input>
        <button type="submit">Submit Info</button>
      </form>
    </>
  );
}

export default App;
