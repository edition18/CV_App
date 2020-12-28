import General from "./components/General";
import Education from "./components/Education";
import Practical from "./components/Practical";
import React, { useState, Fragment } from "react";
import uniqid from "uniqid";

const App = () => {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("ed");
  const [email, setEmail] = useState("e@gmail.com");
  const [phone, setPhone] = useState("231431432");
  const [educations, setEducations] = useState([
    {
      school: "test school",
      dateStarted: "2011-12-12",
      dateLeft: "2013-12-12",
      major: "Tech",
    },
    {
      school: "test school 2",
      dateStarted: "2014-12-12",
      dateLeft: "2018-12-12",
      major: "Biz",
    },
  ]);
  const [practicals, setPracticals] = useState([
    {
      employer: "Mikrosoft",
      dateStarted: "2008-12-12",
      dateLeft: "2014-12-12",
      achievements: ["did this", "and that", "then this"],
    },
    {
      employer: "Epple",
      dateStarted: "2015-12-12",
      dateLeft: "2018-12-12",
      achievements: [
        "did the other thing",
        "and that other thing",
        "then this thing",
      ],
    },
  ]);

  function educationDetails(
    school = "",
    dateStarted = "",
    dateLeft = "",
    major = ""
  ) {
    this.school = school;
    this.dateStarted = dateStarted;
    this.dateLeft = dateLeft;
    this.major = major;
  }

  function practicalDetails(
    school = "",
    dateStarted = "",
    dateLeft = "",
    achievements = []
  ) {
    this.school = school;
    this.dateStarted = dateStarted;
    this.dateLeft = dateLeft;
    this.achievements = achievements;
  }

  // A section to add general information like name, email, phone number.
  const onSubmitTask = (e) => {
    e.preventDefault();
    console.log(e);
  };

  const handleGeneralChange = (e) => {
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

  const toggleFormActive = (e) => {
    e.target.innerHTML === "Show Form"
      ? (e.target.innerHTML = "Hide Form")
      : (e.target.innerHTML = "Show Form");
    document.getElementById("form").classList.contains("hideElement")
      ? document.getElementById("form").classList.remove("hideElement")
      : document.getElementById("form").classList.add("hideElement");
  };

  const educationSubsection = (id, education) => {
    const { school, dateStarted, dateLeft, major } = education; //destruct
    return (
      <Fragment key={uniqid()}>
        <div id={id}>
          <label>School</label>
          <input
            type="text"
            id={"school"}
            defaultValue={school}
            onChange={handleEducationChange}
          ></input>
          <label>Date Started</label>
          <input
            type="date"
            id={"dateStarted"}
            defaultValue={dateStarted}
          ></input>
          <label> Date Left</label>
          <input type="date" id={"dateLeft"} defaultValue={dateLeft}></input>
          <label>Major</label>
          <input type="text" id={"major"} defaultValue={major}></input>
          <button className="btn btn-warning" onClick={editEducation}>
            Edit Education
          </button>
          <button className="btn btn-danger" id={id} onClick={deleteEducation}>
            Delete Education
          </button>
          <br></br>

          <br></br>
        </div>
      </Fragment>
    );
  };

  const practicalSubsection = (id, practical) => {
    const { employer, dateStarted, dateLeft, achievements } = practical; //destruct
    return (
      <div key={uniqid()} id={id}>
        <label>Employer</label>
        <input type="text" id={"employer"} defaultValue={employer}></input>
        <label>Date Started</label>
        <input
          type="date"
          id={"dateStarted"}
          defaultValue={dateStarted}
        ></input>
        <label> Date Left</label>
        <input type="date" id={"dateLeft"} defaultValue={dateLeft}></input>
        <br></br>
        <label>Achievements</label>
        {achievements.map((achievement, index) => (
          <Fragment key={uniqid()}>
            <br></br>
            <input
              type="text"
              id={index}
              className="form-control achievements"
              defaultValue={achievement}
            ></input>
            <button
              className="btn btn-danger"
              id={index}
              onClick={deleteAchievement}
            >
              Delete Achievement
            </button>
          </Fragment>
        ))}
        <br></br>
        <button className="btn btn-success" onClick={addAchievement}>
          Add Achievement
        </button>
        <br></br>
      </div>
    );
  };
  const addAchievement = (e) => {
    const practicalIndex = Number(e.target.parentNode.id);
    const newAchievement = "";
    setPracticals(
      practicals.map((practical, index) =>
        index !== practicalIndex
          ? practical
          : (practical = {
              ...practical,
              achievements: [...practical.achievements, newAchievement],
            })
      )
    );
    console.log(practicals);
  };

  const addPractical = () => {
    const newPractical = new practicalDetails();
    setPracticals([...practicals, newPractical]);
    // since it was an array of educations, we need to set it as an array as well
  };

  const deleteAchievement = (e) => {
    let parentNodeIndex = Number(e.target.parentNode.id);
    let achievementIndex = Number(e.target.id);

    setPracticals(
      practicals.map((practical) =>
        practicals.indexOf(practical) !== parentNodeIndex
          ? practical
          : (practical = {
              ...practical,
              achievements: practical.achievements.filter(
                (achievement, index) => index !== achievementIndex
              ),
            })
      )
    );
  };

  const handleEducationChange = (e) => {
    const educationsIndex = Number(e.target.parentNode.id);
    const propName = e.target.id;
    console.log(educations);
    setEducations(
      educations.map((education, index) =>
        index !== educationsIndex
          ? education
          : (education = { ...education, school: e.target.value })
      )
    );
    console.log(educations);
  };

  const editEducation = (e) => {
    let index = Number(e.target.parentNode.id);
    const childNodes = e.target.parentNode.childNodes;
    const updatedEducation = new educationDetails();

    // new educationDetails()
    for (let i = 0; i < childNodes.length; i++) {
      if (childNodes[i].tagName === "INPUT") {
        updatedEducation[childNodes[i].id] = childNodes[i].value;
      }
    }

    setEducations(
      educations.map((education) =>
        educations.indexOf(education) === index ? updatedEducation : education
      )
    );
  };

  const deleteEducation = (e) => {
    setEducations(
      educations.filter(
        (education, index) => index !== Number(e.target.id)
        // strict equivalence, need to convert e.target.id to integer!
      )
    );
  };

  const addEducation = () => {
    const newEducation = new educationDetails("", "", "", "");
    setEducations([...educations, newEducation]);
    // since it was an array of educations, we need to set it as an array as well
  };

  const checkEducations = () => {
    console.log(educations);
  };

  const checkPracticals = () => {
    console.log(practicals);
  };

  const submitForm = (e) => {
    e.preventDefault();

    //educations
    //create a educationDetail for each index in educations
    for (let i = 0; i < educations.length; i++) {
      let newEducationArray = [];
      newEducationArray.push(new educationDetails());
    }

    const educationsChildNodes = document.getElementById("educations")
      .childNodes;
    for (let i = 0; i < educationsChildNodes.length; i++) {
      console.log(educationsChildNodes[i].parentNode);
      // educationsChildNodes[i].tagName ==! "INPUT" ? "" :
      // newEducationArray
    }

    // document.getElementById("educations").childNodes;

    // //
    // //practicals
    //create a educationDetail for each index in practicals
    // if id include " " , means its an achievement, populate to the right practical and achievement
    for (let i = 0; i < practicals.length; i++) {
      let newPracticalArray = [];
      newPracticalArray.push(new practicalDetails());
    }
    // document.getElementById("practicals").childNodes;
  };

  //defaultValue allows u to still write in the input field if you have no onChange attributes
  const form = (
    <Fragment>
      <button onClick={toggleFormActive}>Show Form</button>
      <form id="form" onSubmit={onSubmitTask}>
        {/* general section */}
        <h1>General Information</h1>
        <div className="formgroup">
          <label htmlFor="name">Name</label>
          <input
            required
            type="text"
            className="form-control"
            id="name"
            placeholder="type your name"
            onChange={handleGeneralChange}
            defaultValue={name}
          ></input>
        </div>
        <div className="formgroup">
          <label htmlFor="email">Email</label>
          <input
            required
            type="email"
            className="form-control"
            id="email"
            placeholder="type your email"
            onChange={handleGeneralChange}
            defaultValue={email}
          ></input>
        </div>
        <div className="formgroup">
          <label htmlFor="phone">Phone</label>
          <input
            required
            type="text"
            className="form-control"
            id="phone"
            placeholder="type your phone"
            onChange={handleGeneralChange}
            defaultValue={phone}
          ></input>
        </div>
        {/* educations section */}
        <br></br>
        <h1>Education</h1>
        <div id="educations">
          {educations
            ? educations.map((education, index) =>
                educationSubsection(index, education)
              )
            : ""}
        </div>
        <button className="btn btn-primary" onClick={addEducation}>
          Add New Education
        </button>
        <br></br>
        <button onClick={checkEducations}>Check Education</button>
        <br></br>
        <h1>Practical Experience</h1>
        <div id="practicals">
          {practicals
            ? practicals.map((practical, index) =>
                practicalSubsection(index, practical)
              )
            : ""}
          <button className="btn btn-primary" onClick={addPractical}>
            Add New Practical
          </button>
          <button onClick={checkPracticals}>Check Practicals</button>
        </div>

        <br></br>
        <br></br>
        <button type="submit" onClick={submitForm}>
          Submit Form
        </button>
      </form>
    </Fragment>
  );

  const toggle = (e) => {
    console.log(e.target.value);
    e.target.innerHTML = "new";
  };

  return (
    <div>
      {form}
      <button onClick={toggle}>Test</button>
      {submitted === false ? (
        ""
      ) : (
        <Fragment>
          <Education educations={educations} />
          <Practical practicals={practicals} />
          <General name={name} email={email} phone={phone} />
        </Fragment>
      )}
    </div>
  );
};

export default App;
