import { Box } from "@chakra-ui/react";
import React from "react";
import RhombusButton from "./TraiButton";
import "./Ourmodel.css"
export const Ourmodel=()=>{

    return(
        <Box id="ourmodalmain">
             <div id="mainzigzag" style={{"margin-top":"10%"}} className="mainzig_model">
    <dvi className="floating-div_whatsnew" ><h1>OUR MODEL</h1></dvi>   
    {/* <div className="zigzag-container">  
    <div className="zigzag-line" id='firstline'></div>
    <div className="zigzag-line" id="middleline"></div>
    <div className="zigzag-line" id='lastline' ></div>
  </div>
  <div id='btncard'><RhombusButton text={"SEE MORE"} /></div> */}
  </div>
   <Box id="imagecontainer_model">
   <a href="https://ibb.co/b5B7R9Y"><img src="https://i.ibb.co/TM8rq3J/ourmodel-final.png" alt="ourmodel-final" border="0"/></a>
   </Box>
  
        </Box>
    )
}