import React, { Fragment } from "react";
// https://stackoverflow.com/questions/42876063/how-to-access-parent-component-state-in-child-component
const EducationSection = (props) => {
  const display = <div>{console.log(props)}Test</div>;
  return display;
};

export default EducationSection;
