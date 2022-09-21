import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
function NavBar() {
  const pages = ["Home", "About", "Contact"];
  return (
    <div className="nav-bar">
      <div id="bar-nav">
        {pages.map((pagePath) => (
          <Link style={{textDecoration: 'none'}} to={pagePath}>
            <Button className="navBarBtn" variant="text">{pagePath}</Button >
          </Link>
        ))}
      </div>
    </div>
  );
}

export default NavBar;