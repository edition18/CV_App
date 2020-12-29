import React from "react";

const Education = (props) => {
  const { school, dateLeft, dateStarted, major } = props.education;
  return (
    <div>
      <h1 className="display-5 inlineBlock">
        {school}
        {" - "}
        {major}
      </h1>
      <small className="text-muted floatRight">
        {dateStarted}
        {" - "}
        {dateLeft}
      </small>
    </div>
  );
};

export default Education;
