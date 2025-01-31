import "../styles/ExperienceForm.css";

export default function ExperienceForm({ experience, setExperience }) {
  function handleSubmit(formData) {
    const data = Object.fromEntries(formData);
    setExperience((prev) => [...prev, data]);
  }
  return (
    <div className="form-section">
      <h1 className="title">Experience</h1>
      <form action={handleSubmit} className="experience-form">
        <input type="text" name="company" placeholder="Ex. Samsung" />
        <input type="text" name="position" placeholder="Software Engineer" />
        <textarea
          name="responsibilities"
          id="responsibilities"
          placeholder="Made Samsung's frontend"
        ></textarea>
        <div>
          <input type="date" name="start-date" />
          <input type="date" name="end-date" />
        </div>

        <button type="submit">Submit Experience</button>
      </form>
    </div>
  );
}
