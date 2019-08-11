import React from "react";
import content from "./content";

class Skills extends React.Component {
  render() {
    return (
      <div className="Skills">
        <div className="Skill">
          <div className="Type">{"Languages"}</div>
          <ul className="List">
            {content.SKILLS.LANGUAGES.map(skill => {
              return <li>{skill}</li>;
            })}
          </ul>
        </div>
        <div className="Skill">
          <div className="Type">{"Technologies"}</div>
          <ul className="List">
            {content.SKILLS.TECHNOLOGIES.map(skill => {
              return <li>{skill}</li>;
            })}
          </ul>
        </div>
        <div className="Skill">
          <div className="Type">{"Spoken Languages"}</div>
          <ul className="List">
            {content.SKILLS.MISC.map(skill => {
              return <li>{skill}</li>;
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default Skills;
