import React from "react";

const School = ({ school }) => (
  <div className="School">
    <div className="Left">
      <img className="Logo" src={school.LOGO} />
    </div>
    <div className="Right">
      <div className="Name">{school.NAME}</div>
      <div className="Degree">{school.DEGREE}</div>
      <div className="Extra">{school.EXTRA}</div>
      <div className="Date">
        {school.START}
        {" - "}
        {school.END}
      </div>
      <ul>
        {school.CLASSES.map((val) => {
          return <li>{val}</li>;
        })}
      </ul>
    </div>
  </div>
);

export default School;
