import "../styles/EducationForm.css";

export default function EducationForm({ educationInfo, setEducationInfo }) {
  function handleSubmit(formData) {
    const data = Object.fromEntries(formData);
    setEducationInfo(data);
    console.log(educationInfo);
  }
  return (
    <form action={handleSubmit} className="education-form">
      <input type="text" placeholder="React University" name="school" />
      <input type="text" placeholder="B.S. Computer Science" name="major" />
      <input type="date" name="school-years" />
      <button type="submit">Submit Education</button>
    </form>
  );
}
