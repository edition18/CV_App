import General from "./components/General";
import Education from "./components/Education";
import Practical from "./components/Practical";
import React, { useState, Fragment } from "react";

const App = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [educations, setEducations] = useState([
    {
      school: "test school",
      dateStarted: "11/11/2002",
      dateLeft: "11/11/2010",
      major: "Tech",
    },
    {
      school: "test school 2",
      dateStarted: "11/11/2011",
      dateLeft: "11/11/2018",
      major: "Biz",
    },
  ]);

  const EducationDetails = (school, dateStarted, dateLeft, major) => {
    this.school = school;
    this.dateStarted = dateStarted;
    this.dateLeft = dateLeft;
    this.major = major;
  };

  // A section to add general information like name, email, phone number.
  const onSubmitTask = (e) => {
    e.preventDefault();
    console.log(e);
  };

  const handleChange = (e) => {
    switch (e.target.id) {
      case "name":
        setName(e.target.value);
        break;
      case "phone":
        setPhone(e.target.value);
        break;
      case "email":
        setEmail(e.target.value);
        break;
      default:
        alert("error no such ID");
        break;
    }
  };

  const toggleFormActive = () => {
    document.getElementById("form").classList.contains("hideElement")
      ? document.getElementById("form").classList.remove("hideElement")
      : document.getElementById("form").classList.add("hideElement");
  };

  const educationSubsection = (id, education) => {
    return <div>this is the {id} </div>;
  };

  const form = (
    <Fragment>
      <button onClick={toggleFormActive}>Show Form</button>
      <form id="form" onSubmit={onSubmitTask}>
        {/* general section */}
        <div className="formgroup">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="type your name"
            onChange={handleChange}
            value={name}
          ></input>
        </div>
        <div className="formgroup">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="type your email"
            onChange={handleChange}
            value={email}
          ></input>
        </div>
        <div className="formgroup">
          <label htmlFor="phone">Phone</label>
          <input
            type="text"
            className="form-control"
            id="phone"
            placeholder="type your phone"
            onChange={handleChange}
            value={phone}
          ></input>
        </div>
        {/* educations section */}
        {/* show a default */}
        <div className="educationSubform">
          {educations
            ? educations.map((education) =>
                educationSubsection(educations.indexOf(education), education)
              )
            : ""}
        </div>
        <button type="submit">Submit Form</button>
      </form>
    </Fragment>
  );

  return (
    <div>
      {form}

      <General />
      <Education />
      <Practical />
    </div>
  );
};

export default App;
