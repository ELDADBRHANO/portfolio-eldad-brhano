import "./Home.css";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import IronMan from "../../features/IronMan/IronMan";
import { Container } from "@mui/material";

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
      <Container className="ironClass">
      <IronMan/>
      </Container>
      </div>   
    </div>
  );
}
export default Home;