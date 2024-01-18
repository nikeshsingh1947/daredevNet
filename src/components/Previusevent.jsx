import React from "react";
import"./Previusevent.css"
import HoverVideoPlayer from "./Hoverplayer";
import { Box } from "@chakra-ui/react";

export const Previusevent=()=>{
  const vidId=[{id:"jLKQwVxWipI"},{id:"zSr-qibAO3M"},{id:"teB-UhyfZgQ"},{id:"b98MQpO8YdQ"}]
    return(
        <Box>
            <h1 id="previus_heading">SOME OF OWER PREVIOUS EVENTS</h1>
        <Box id="vidmain">
            {vidId.map((e)=>( 
              <HoverVideoPlayer videoId={e.id}/>
           ))
            } 
            
        </Box>
        </Box>
    )
}