import React from "react";

const Practical = (props) => {
  const { employer, dateStarted, dateLeft, achievements } = props.practical;
  return (
    <div>
      <h1 className="display-5 inlineBlock">{employer}</h1>
      <small className="text-muted floatRight">
        {dateStarted}
        {" - "}
        {dateLeft}
      </small>

      <div>
        {achievements.map((achievement) => (
          <div>
            <i className="fas fa-angle-right fa-lg"></i> {achievement}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Practical;
