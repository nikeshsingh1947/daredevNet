import { Box } from "@chakra-ui/react";
import React from "react";
import FlipCard from "./Flipcard";
import "./WhatsNew.css"
export const WhatsNew=()=>{
    const obj=[
        {image:"https://images.unsplash.com/photo-1533107862482-0e6974b06ec4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGN5Y2xpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
        textfront:"caption for card",
        Title:" TItLe ?",
        para:"Being a virtual event, you can choose the time you wish to go for a ride and finish your daily tasks. "},

        {image:"https://tourde100.com/wp-content/uploads/landing_pageTourde_new/images/keyimg1.png",
        textfront:"caption for card",  
        Title:"TItle ?",
        para:"When you ride, cycling works out all of the key muscle groups while also being enjoyable for you. Compared to other physical sports, the adrenaline you feel from driving down ."}]

    return(
        <Box  id="Flipcard-holdder" >
           {obj.map((e)=>( 
              <FlipCard image={e.image}caption={e.textfront} title={e.Title} para={e.para} /> 
           ))
            }    
        </Box>
    )
}