// NavbarComponent.js
import React from 'react';
import { Flex,  Box,Image } from '@chakra-ui/react';
import { Link } from "react-router-dom";

import DareLogo from "./images/thedaredevils logo.png";
import "./navbar.css";
const NavbarComponent = () => {
 
  return (
    <Flex bg="rgb(36,37,42)" p="4" id="main-nav-container">
      <Box id='darelogo-container'><Image width={"150px"} height={"60px"} src={DareLogo}/></Box>
      {/* <Spacer /> */}
      <Box className='navlink-container'  >
        <Box ><Link to={"/"} >Home</Link></Box>
        <Box><Link to={"/eventcalender"}>Event Celendar</Link></Box>
        <Box><Link to={"/about"}>About</Link></Box>
        <Box><Link to={"/signup"}>Login/Signup</Link></Box> 
        </Box>
      <Box>
        {/* Navigation links */}
      </Box>
    </Flex>
  );
};

export default NavbarComponent;
