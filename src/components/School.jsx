import React from "react";

const School = ({ school }) => (
  <div className="School">
    <div className="Name">{school.NAME}</div>
    <div className="Degree">{school.DEGREE}</div>
    <div className="Date">
      {school.START}
      {" - "}
      {school.END}
    </div>
    <ul>
      {school.CLASSES.map(val => {
        return <li>{val}</li>;
      })}
    </ul>
  </div>
);

export default School;
