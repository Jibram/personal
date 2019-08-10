import React from "react";

const Experience = ({ exp }) => (
  <div className="Experience">
    <div className="Role"> {exp.ROLE} </div>
    <div className="Company"> {exp.COMPANY} </div>
    <div className="Location"> {exp.LOCATION} </div>
    <div className="Date">
      {exp.START} {" - "} {exp.END}
    </div>
    <ul>
      {exp.INFO.map(bullet => {
        return <li className="Bullet">{bullet}</li>;
      })}
    </ul>
  </div>
);

export default Experience;
