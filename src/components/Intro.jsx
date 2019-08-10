import React from "react";
import content from "./content";

class Intro extends React.Component {
  render() {
    return <div className="Intro">{content.ABOUT}</div>;
  }
}

export default Intro;
