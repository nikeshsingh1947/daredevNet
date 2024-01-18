import { Box, Image } from "@chakra-ui/react";
import Daredelogo from "./images/thedaredevils logo.png"
import React from "react";
import "./Posterflip.css"
export const Posterflip=()=>{

    return(
        <Box id="poster_body">
       <div class="container">
  <div class="content" style={{"display":"flex","justifyContent":"space-between"}}>
    <div style={{"width":'50%',}}><h1 id="title_touchme">touch me!</h1></div>
    <div style={{"width":'50%'}}> <Image src={Daredelogo} /></div>
  </div>
  <div class="flap"></div>
</div>
        </Box>
    )
}