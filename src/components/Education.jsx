import React from "react";
import content from "./content";
import School from "./School";

const Education = () => (
  <div className="Schools">
    {content.SCHOOLS.map((school) => {
      return <School school={school} />;
    })}
  </div>
);

export default Education;
