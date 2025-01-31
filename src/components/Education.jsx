import "../styles/Education.css";

export default function Education({ educationInfo, setEducationInfo }) {
  const { school, major, schoolStart, schoolEnd } = educationInfo;
  return (
    <>
      <h1>{school}</h1>
    </>
  );
}
