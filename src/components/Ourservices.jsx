import { Box, Text } from "@chakra-ui/react";
import React from "react";

import "./Ourservices.css";
export const Ourservices = () => {
  return (
    <Box id="mainOurservices">
      <div id="mainzigzag" style={{"margin-top":"50%"}} className="mainzig_model">
        <dvi className="floating-div_whatsnew">
          <h1>OUR SERVICES</h1>
        </dvi>
        {/* <div className="zigzag-container">
          <div className="zigzag-line" id="firstline"></div>
          <div className="zigzag-line" id="middleline"></div>
          <div className="zigzag-line" id="lastline"></div>
        </div>
        <div id="btncard">
          <RhombusButton text={"SEE MORE"} />
        </div> */}
      </div>
      <Box id="service_cardmain">
        <Box className="service_card">
          <Box className="servicecard_imagecontainer">
          <a href="https://ibb.co/ypdLSBR"><img src="https://i.ibb.co/MfZq65h/cycling.png" alt="cycling" border="0"/></a>
          </Box>
          <Text>CYCLING EVENTS</Text>
        </Box>
        <Box className="service_card">
          <Box className="servicecard_imagecontainer">
          <a href="https://imgbb.com/"><img src="https://i.ibb.co/p1mpvg9/running.png" alt="running" border="0"/></a>
          </Box>
          <Text>RUNNING EVENTS</Text>
        </Box>
        <Box className="service_card">
          <Box className="servicecard_imagecontainer">
          <a href="https://imgbb.com/"><img src="https://i.ibb.co/FHRFqvW/otherevents.png" alt="otherevents" border="0"/></a>
          </Box>
          <Text>OTHER EVENTS</Text>
        </Box>
      </Box>
    </Box>
  );
};
