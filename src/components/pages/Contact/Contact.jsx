import "./Contact.css";
import React, { useState } from "react";
import Maping from "../../../services/map-service";
function Contact() {
  const [ map, setMap]= useState([])
  return (
    <div className="contact">
      <h1>Contact</h1>
    </div>
  );
};

export default Contact;
