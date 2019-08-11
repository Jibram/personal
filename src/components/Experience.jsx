import React from "react";

const Experience = ({ exp }) => (
  <div className="Experience">
    <div className="Left">
      <img className="Logo" src={exp.LOGO} />
    </div>
    <div className="Right">
      <div className="Role"> {exp.ROLE} </div>
      <div className="Company">
        {" "}
        <a className="Hyperlink" href={exp.LINK}>{exp.COMPANY}</a>{" "}
      </div>
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
  </div>
);

export default Experience;
