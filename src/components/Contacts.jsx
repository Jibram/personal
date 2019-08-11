import React from "react";
import content from "./content";

class Contacts extends React.Component {
  render() {
    return (
      <div className="Contacts">
        {content.CONTACT.map(contact => {
          return (
            <a href={contact.HREF}>
              <img
                className="Contact"
                src={contact.SRC}
                alt={contact.ALT}
              />
            </a>
          );
        })}
      </div>
    );
  }
}

export default Contacts;
