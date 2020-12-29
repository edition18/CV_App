import React, { useState, Fragment } from "react";

const General = (props) => {
  const { name, email, phone } = props;
  return (
    <div>
      <h1 className="display-4 inlineBlock">{name}</h1>
      <div className="floatRight">
        <div>{phone}</div>
        <div>{email}</div>
      </div>
    </div>
  );
};

export default General;
