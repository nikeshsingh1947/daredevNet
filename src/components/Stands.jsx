import { Box,Button } from "@chakra-ui/react";
import React, { useState } from "react";
import"./Stands.css"

export const Stands=()=>{
    const hexagons = [{Photography:"We are having an In-house Professional Team for All kind of Photography and Videography which preserves all the Beautiful moments of every Event & and gives every participant to recall their beautiful memories through all the pictures and videos captured during and after the Event."},
    {Videography:"We are having an In-house Professional Team for All kind of Photography and Videography which preserves all the Beautiful moments of every Event & and gives every participant to recall their beautiful memories through all the pictures and videos captured during and after the Event."},
    {DroneShoot:"We are having an In-house Professional Team for All kind of Photography and Videography which preserves all the Beautiful moments of every Event & and gives every participant to recall their beautiful memories through all the pictures and videos captured during and after the Event."},
    {LiveTelecast:"To make the Event More Amazing and Pump up the Excitement Level and for more Engagement with the Participants and Audience, we have again an In-house Professional Social Media Event Broadcast Team who are expert in Broadcasting all kinds of Events starting from Sports Events to Cultural Events to All Corporate Events."},
    {DigitalMarketing:"We also run Digital Media Campaign through all the Social Media Platforms which Boost every event to it’s Next Level. To conduct this we are having a Professional In-house Team for the same."},
    {Merchandise:"We are having a good range of Vendors who are Expert in their own field and are well known for their timely delivery of High End Quality Merchandise."}];
const [topic,setTopics]=useState("PHOTOGRAPHY")
const [textbody,setTextBody]=useState("We are having an In-house Professional Team for All kind of Photography and Videography which preserves all the Beautiful moments of every Event & and gives every participant to recall their beautiful memories through all the pictures and videos captured during and after the Event.")
    const changetext1=()=>{
     setTopics("VIDEOGRAPHY")
     setTextBody(hexagons[0].Photography)
}
const changetext2=()=>{
    setTopics("PHOTOGRAPHY")
    setTextBody(hexagons[0].Photography)
}
const changetext3=()=>{
    setTopics("DRONE SHOOT")
    setTextBody(hexagons[0].Photography)
}
const changetext4=()=>{
    setTopics("LIVE TELECAST")
    setTextBody(hexagons[3].LiveTelecast)
}
const changetext5=()=>{
    setTopics("DIGITAL MARKETING")
    setTextBody(hexagons[4].DigitalMarketing)
}
const changetext6=()=>{
    setTopics("MERCHANDISE")
    setTextBody(hexagons[5].Merchandise)
}
    return(
        <Box id="main_stand">
            <Box id="head-cont">
            <div class="middle-heading">
                  <span class="container-stand">
                      <div class="text-heading" data-text="HOW WE STAND OUT FROM OTHERS">HOW WE STAND OUT FROM OTHERS</div>
                  </span>
            </div>
            </Box>
          <div className="hex">
               <div className="hex-container">
                    <div onClick={changetext1} className="dark-colr"><h2 className="hex-topic">Videography</h2></div>
                    <div onClick={changetext2} className="light-colr"><h2 className="hex-topic">Photography</h2></div>
                    <div onClick={changetext3} className="dark-colr"><h2 className="hex-topic">Drone Shoot</h2></div>
                    <div onClick={changetext4} className="light-colr"><h2 className="hex-topic">Live Telecast</h2></div>
                    <div onClick={changetext5} className="dark-colr"><h2 className="hex-topic">Digital Marketing</h2></div>
                    <div onClick={changetext6} className="light-colr"><h2 className="hex-topic">Merchandise</h2></div>
               </div>
          </div>
          
            <Box id="text-cont">
               <Box><h2 id="bl-top">{topic}</h2></Box>
                <Box id="stand_para"><h3 id="bl-H3">{textbody}</h3></Box>
            </Box>
        </Box>
    )
}