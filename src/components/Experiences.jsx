import React from "react";
import Experience from "./Experience.jsx";
import content from "./content";

class Experiences extends React.Component {
  render() {
    return (
      <div className="Experiences">
        {content.EXPERIENCES.map(experience => {
          return <Experience exp={experience} />;
        })}
      </div>
    );
  }
}

export default Experiences;
