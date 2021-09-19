import React from "react";
import Experience from "./Experience.jsx";
import content from "./content";

const Experiences = () => (
  <div className="Experiences">
    {content.EXPERIENCES.map((experience) => {
      return <Experience exp={experience} />;
    })}
  </div>
);

export default Experiences;
