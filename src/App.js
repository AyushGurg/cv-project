import Experience from "./Experience";
import Education from "./Education";

function App() {
  return (
    <>
      <div className="Header"> CV creator</div>
      <div className="EditMode">
        <div className="PersonalInformation">
          <form>
            <label>Personal Information</label>
            <input placeholder="First Name"></input>
            <input placeholder="Last Name"></input>
            <input placeholder="Title"></input>
            <input placeholder="Address"></input>
            <input placeholder="Phone Number"></input>
            <input placeholder="Email"></input>
            <input placeholder="Description"></input>
          </form>
        </div>
        <div className="Experience">
          <label>Experience</label>
          <Experience />
        </div>
        <div className="Education">
          <label>Education</label>
          <Education />
        </div>
      </div>
    </>
  );
}

export default App;
