import React from "react";
import content from "./content";

class Intro extends React.Component {
  render() {
    return <div className="Intro">
      <p className='About'>
        {content.ABOUT}
      </p>
    </div>;
  }
}

export default Intro;