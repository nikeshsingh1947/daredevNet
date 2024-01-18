import { Box, Image } from "@chakra-ui/react";
import React from "react";
import "./About.css";
import Aboutimg1 from "../Assets/DSC_9968.jpg";
import Aboutimg2 from "../Assets/DSC_0876.jpg";
import Aboutimg3 from "../Assets/DSC_0819.jpg";
import Galimage1 from "../Assets/0813About.jpg";
import Galimage2 from "../Assets/DSC_9931.jpg";
import Galimage3 from "../Assets/MRP01058.jpg";
import Galimage4 from "../Assets/DSC_9953.jpg";
export const About = () => {
   
  const galimages=[{Imggalr:Galimage1},{Imggalr:Galimage2},{Imggalr:Galimage3},{Imggalr:Galimage4}]
  return (
    <Box id="main-about">

      <h1 style={{"color":"white"}}>About Us</h1>
      <Box className="sub-about">
        <Box className="about-para-container">The Daredevils is an expanding Sports Events Management Firm strives to boost endurance,strength and zeal for sports
        by promoting the desire for athletic activity and recreation.The firm at creating,managing and providing resources to the sports events. the Daredevils wishes to
        to set a platform for people to partticipate,have fun embracea healthy lifestyle by attending and intericting in events.
        </Box>
        <Box className="about-image-container"><Image src={Aboutimg1}/></Box>
      </Box>
      <h1 style={{"color":"white"}}>Our Mission</h1>
      <Box className="sub-about">
      <Box className="about-para-container">
      Our focus is to create an environment where people can enjoy getting fit and endeavor in the world of sports and
fitness. We provide a platform for all the sports and fitness enthusiasts to engage in sports activities/events that
promotes togetherness and make an individual, a group and a family a fit family. We envision to organize events
of a variety of sports so that people can experience restoration and the fun of fitness.
      </Box>
        <Box className="about-image-container"><Image src={Aboutimg2}/></Box>
      </Box>
      <h1 style={{"color":"white"}}>Our Vision</h1>
      <Box className="sub-about">
      <Box className="about-para-container">
      Our Vision
To be a world-class sports event organizing firm that works up to the customer’s satisfaction. To be diverse and
accurate in providing sports services where people can have fun and fitness both at the same time.
      </Box>
        <Box className="about-image-container"> <Image src={Aboutimg3}/></Box>
      </Box>
      <Box style={{"display":"flex", "justifyContent":"space-around"}}>
      {galimages.map((e)=>(
          <Box className="about-image-container" style={{"margin":"10px" ,"height":"150px" ,"width":"20%"}}><Image  src={e.Imggalr} /></Box>
      ))}
      
      </Box>
    </Box>
  );
};
