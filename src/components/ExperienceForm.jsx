import "../styles/ExperienceForm.css";

export default function ExperienceForm({ experience, setExperience }) {
  function handleSubmit(formData) {
    const data = Object.fromEntries(formData);
    setExperience((prev) => [...prev, data]);
  }
  return (
    <form action={handleSubmit} className="experience-form">
      <input type="text" />
      <input type="text" />
      <textarea name="responsibilities" id="responsibilities"></textarea>
      <input type="text" />
      <input type="text" />
      <button type="submit">Submit Experience</button>
    </form>
  );
}
