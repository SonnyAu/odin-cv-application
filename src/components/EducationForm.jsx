import "../styles/EducationForm.css";

export default function EducationForm({ educationInfo, setEducationInfo }) {
  function handleSubmit(formData) {
    const data = Object.fromEntries(formData);
    setEducationInfo(data);
  }
  return (
    <div className="form-section">
      <h1 className="title">Education</h1>
      <form action={handleSubmit} className="education-form">
        <input type="text" placeholder="React University" name="school" />
        <input type="text" placeholder="B.S. Computer Science" name="major" />
        <div>
          <input type="date" name="schoolStart" />
          <input type="date" name="schoolEnd" />
        </div>

        <button type="submit">Submit Education</button>
      </form>
    </div>
  );
}
