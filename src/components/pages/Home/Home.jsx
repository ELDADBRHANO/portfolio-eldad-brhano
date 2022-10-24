import "./Home.css";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import eldad from '../../../images/ironman.png'
import { Box } from "@mui/material";

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
      <div >
        <Box className="ironManFlying"
            id="ironMan"
            component="img"
            alt="Eldad's protfolio."
            src={eldad}
            sx={{
              height: 500,
              width: 200,
              maxHeight: { xs: 233, md: 167 },
              maxWidth: { xs: 350, md: 250 },
            }}
          />
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
