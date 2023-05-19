import Experience from "./Experience";
import Education from "./Education";
import { useState } from 'react';

function App() {
  
    const [message, setMessage] = useState('');
  
    const handleChange = (event) => {
      setMessage(event.target.value);
    };

  return (
    <>
      <div className="Header"> CV creator</div>
      <div className="EditMode">
        <div className="PersonalInformation">
          <form>
            <label>Personal Information</label>
            <input placeholder="First Name" id="FirstName" onChange={handleChange}></input>
            <input placeholder="Last Name"></input>
            <input placeholder="Title"></input>
            <input placeholder="Address"></input>
            <input placeholder="Phone Number"></input>
            <input placeholder="Email"></input>
            <input placeholder="Description"></input>
            <h2>{message}</h2>
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
