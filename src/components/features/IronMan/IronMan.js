import React    from "react";
import template from "./IronMan.jsx";

class IronMan extends React.Component {
  render() {
    return template.call(this);
  }
}

export default IronMan;
