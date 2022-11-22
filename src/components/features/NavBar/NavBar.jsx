import { Link } from "react-scroll";
import Container from "@mui/material/Container";
import './NavBar.css'
import Home from "../../pages/Home/Home";
import { About } from "../../pages";
import Projects from "../Projects/Projects";
import Contact from "../../pages/Contact/Contact";
import { Button } from "@mui/material";
function NavBar() {
  const menuItems = [{
    id:1,
    name:'Home',
    titlt:<Home/>
  },
  {
    id:2,
    name:'About',
    titlt:<About/>
  },
  {
    id:3,
    name:'Projects',
    titlt:<Projects/>
  },
  {
    id:3,
    name:'Contact',
    titlt:<Contact/>
  },
]
return(
  <>
  <header>
    <nav>
    <ul>
      {menuItems.map((menu)=>(
        <li>
          <Link to={menu.name} smooth={true} offset={-80} duration={500}>
            <Button id="btn-nav" color="inherit">
            {menu.name}
            </Button>
            </Link>
          </li>
      ))}
    </ul>
    </nav>
  </header>
  <main id="main-navbar">

    {menuItems.map(menu=>(
          <Container className="content">
          <div className="content-header" id={menu.name}>{menu.titlt}</div>
        </Container>
    ))}

  </main>
  </>
)

  // const [anchorElNav, setAnchorElNav] = useState(null);
  // const [anchorElUser, setAnchorElUser] = useState(null);
  
  // const handleOpenNavMenu = (event) => {
  //   setAnchorElNav(event.currentTarget);
  // };
  // const handleCloseNavMenu = () => {
  //   setAnchorElNav(null);
  // };
  
  // const handleCloseUserMenu = () => {
  //   setAnchorElUser(null);
  // };
  
  // const pages = ["Home", "About", "Contact","Projects"];
  // return (
  //   <AppBar   style={{ background: "rgba(0, 0, 0, 0.000)" }} position="static">
  //     <Container maxWidth="xl">
  //       <Toolbar disableGutters>
  //         <Typography
  //           variant="h6"
  //           noWrap
  //           component="a"
  //           href="/"
  //           sx={{
  //             mr: 2,
  //             display: { xs: "none", md: "flex" },
  //             fontFamily: "monospace",
  //             fontWeight: 700,
  //             letterSpacing: ".3rem",
  //             color: "inherit",
  //             textDecoration: "none",
  //           }}
  //         ></Typography>

  //         <Box  sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
  //           <IconButton 
  //             size="large"
  //             aria-label="account of current user"
  //             aria-controls="menu-appbar"
  //             aria-haspopup="true"
  //             onClick={handleOpenNavMenu}
  //             color="inherit"
  //           >
  //             <MenuIcon />
  //           </IconButton>
  //           <Menu
  //             id="menu-appbar"
  //             anchorEl={anchorElNav}
  //             anchorOrigin={{
  //               vertical: "bottom",
  //               horizontal: "left",
  //             }}
  //             keepMounted
  //             transformOrigin={{
  //               vertical: "top",
  //               horizontal: "left",
  //             }}
  //             open={Boolean(anchorElNav)}
  //             onClose={handleCloseNavMenu}
  //             sx={{
  //               display: { xs: "block", md: "none" },
  //             }}
  //           >
  //             {pages.map((pagePath) => (
  //               <Link style={{ textDecoration: "none" }} to={pagePath}>
  //                 <ButtonFeatures style={{ textDecoration: "none"}}
  //                   btnTxt={pagePath}
  //                   className="navBarBtn"
  //                   variant="text"
  //                 >
  //                   {pagePath}
  //                 </ButtonFeatures>
  //               </Link>
  //             ))}
  //           </Menu>
  //         </Box>

  //         <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
  //           {pages.map((pagePath) => (
  //               <Link style={{ textDecoration: "none" }} to={pagePath}>
  //                 <ButtonFeatures style={{ textDecoration: "none"}}
  //                   btnTxt={pagePath}
  //                   className="navBarBtn"
  //                   variant="text"
  //                 >
  //                   {pagePath}
  //                 </ButtonFeatures>
  //               </Link>
  //             ))}
  //         </Box>
  //         <Box
  //           id="rotate-logo"
  //           component="img"
  //           alt="Eldad's protfolio."
  //           src={logo}
  //           sx={{
  //             height: 50,
  //             width: 50,
  //             maxHeight: { xs: 233, md: 167 },
  //             maxWidth: { xs: 350, md: 250 },
  //             animation: "spin 2s linear infinite",
  //             "@keyframes spin": {
  //               "0%": {
  //                 transform: "rotate(0deg)",
  //               },
  //               "100%": {
  //                 transform: "rotate(360deg)",
  //               },
  //             },
  //           }}
  //         />
  //         <Box sx={{ flexGrow: 0 }}>
  //           <Menu
  //             sx={{ mt: "45px" }}
  //             id="menu-appbar"
  //             anchorEl={anchorElUser}
  //             anchorOrigin={{
  //               vertical: "top",
  //               horizontal: "right",
  //             }}
  //             keepMounted
  //             transformOrigin={{
  //               vertical: "top",
  //               horizontal: "right",
  //             }}
  //             open={Boolean(anchorElUser)}
  //             onClose={handleCloseUserMenu}
  //           ></Menu>
  //         </Box>
  //       </Toolbar>
  //     </Container>
  //   </AppBar>
  // );
}

export default NavBar;
