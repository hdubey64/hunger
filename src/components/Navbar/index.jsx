import * as React from "react";
import "./Navbar.css";
import Map from "./Assats/map-marker-alt.png";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";
import { FaUserAlt } from "react-icons/fa";
import Search from "./Assats/Search.png";
import { Link } from "react-router-dom";

const drawerWidth = 280;
const navItems = ["Home", "About", "Contact"];

function DrawerAppBar(props) {
   const { window } = props;
   const [mobileOpen, setMobileOpen] = React.useState(false);

   const handleDrawerToggle = () => {
      setMobileOpen((prevState) => !prevState);
   };

   const search = () => {
      handleDrawerToggle();
   };
   ///For small screen
   const drawer = (
      <Box sx={{ textAlign: "center", bgcolor: "#fff" }}>
         <List>
            <div className="navsearch">
               <input
                  type="text"
                  className="searchitems"
                  placeholder="search items"
               />
               <button onClick={search}>search</button>
            </div>

            <div onClick={handleDrawerToggle}>
               <br />
               <br />
               <Link to="/login">
                  <button className="btn2">
                     <PersonIcon /> Login
                  </button>
               </Link>
            </div>
         </List>
      </Box>
   );

   //For large screen
   const container =
      window !== undefined ? () => window().document.body : undefined;

   return (
      <Box sx={{ display: "flex" }}>
         <AppBar component="nav" sx={{ bgcolor: "#fff", color: "black" }}>
            <div className="navbar">
               <Link to="/">
                  <div className="navbar-left">
                     HUN
                     <span className="ger">GER</span>
                  </div>
               </Link>

               <div className="navbar-mid">
                  <span className="del">Deliver to: </span> <img src={Map} />{" "}
                  Current Location:
                  <span className="location"> XYZ, Indira Nagar, Lucknow</span>
               </div>
               <div className="navbar-right">
                  <span className="sear">
                     <img src={Search} /> Search Food
                  </span>
                  <span>
                     <Link to="/login">
                        {" "}
                        <button className="btn">
                           <FaUserAlt /> Login
                        </button>
                     </Link>
                  </span>
               </div>
               <div className="toggle">
                  <IconButton
                     edge="end"
                     color="inherit"
                     aria-label="menu"
                     onClick={handleDrawerToggle}
                     sx={{ mr: 2 }}
                  >
                     <MenuIcon />
                  </IconButton>
               </div>
            </div>
         </AppBar>
         <Box component="nav">
            <Drawer
               container={container}
               variant="temporary"
               open={mobileOpen}
               onClose={handleDrawerToggle}
               ModalProps={{
                  keepMounted: true, // Better open performance on mobile.
               }}
               sx={{
                  display: { xs: "block", sm: "none" },
                  "& .MuiDrawer-paper": {
                     boxSizing: "border-box",
                     width: drawerWidth,
                  },
               }}
            >
               {drawer}
            </Drawer>
         </Box>
      </Box>
   );
}

DrawerAppBar.propTypes = {
   /**
    * Injected by the documentation to work in an iframe.
    * You won't need it on your project.
    */
   window: PropTypes.func,
};

export default DrawerAppBar;
