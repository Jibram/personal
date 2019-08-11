import React from "react";
import Contacts from "./Contacts";
import content from './content'

class Landing extends React.Component {
  render() {
    return (
        <div className="Landing">
          <div className="Greeting">
            <img className="Me" src={content.ME.PHOTO} />
            <div className="Name">
              Jibram Jimenez-Loza
            </div>
          </div>
          <Contacts />
        </div>
    );
  }
}

export default Landing;
