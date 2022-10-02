import "./Home.css";
import React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="home">
      <div className="typing-div">
        <div className="wrapper">
        <h1 className="typing-hello">
          Hello,
        </h1>
        <h1 id="tit2" className="typing">
          I'm Eldad,
        </h1>
        <h1 className="typing-developer">Full Stack Developer.</h1>
      </div>
      </div>
      
      <Link style={{ textDecoration: "none" }} to="/Contact">
        <Button style={{ color: "white" }} className="contact-btn">
          Contact
        </Button>
      </Link>
    </div>
  );
}
export default Home;

// <div className="eldad-present">
// <h1 className="pop-outin">Hello, I'm Eldad, Full Stack Developer.</h1>

// </div>
