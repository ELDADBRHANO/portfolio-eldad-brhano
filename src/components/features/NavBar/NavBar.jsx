import { Link } from "react-router-dom";
import ButtonFeatures from "../btn/Btn";
function NavBar() {
  const pages = ["Home", "About", "Contact"];
  return (
    <div className="nav-bar">
      <div className="bar-nav">
        {pages.map((pagePath) => (
          <Link  style={{textDecoration: 'none'}} to={pagePath}>
            <ButtonFeatures btnTxt={pagePath} className="navBarBtn" variant="text">{pagePath}</ButtonFeatures>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default NavBar;