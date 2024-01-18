// EventCalendar.js
import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";
import "./Eventcalender.css";
import EventImage1 from "./Assets/DSC_0761 - Copy - Copy.jpg";
import EventImage2 from "./Assets/DSC_0819.jpg";
import EventImage3 from "./Assets/DSC_0889.jpg";
import EventImage4 from "./Assets/DSC_1143.jpg";
const EventCalendar = () => {
  const Eventdata = [
    {image:EventImage1, title: "DELHI-PANIPAT-DELHI Endurance Ride", participants: "200+", sponsor: "MAX HEALTHCARE", categories: "50KM,100KM,150KM & 200KM" },
    {image:EventImage2, title: "EURONIC'S INDEPENDENCE Ride", participants: "200+", sponsor: "EURONICS", categories: "50KM" },
    { image:EventImage3,title: "HELIPAD Canal Rider's Group Jersey lounch Ride", participants: "100+", sponsor: "HELIPAD CANAL RIDERS", categories: "50KM & 100KM" },
    { image:EventImage4,title: "PEDAL OUT STROKES Cyclothone", participants: "250+", sponsor: "FORTIS HOSPITAL", categories: "50KM" },
    
  ];

  return (
    <Box>
      <Box>
        <Text> UPCOMING EVENTS</Text>
        <Box></Box>
      </Box>
      <Box>
        <Text>PREVIOUS EVENTS</Text>
        <Box className="event-container">
        {Eventdata.map((e)=>(
          
            <Box className="event-card-box">
              <Box><Image src={e.image}/></Box>
              <Text style={{"fontWeight":"bold"}}>{e.title}</Text><Text><span style={{"fontWeight":"bold"}}>Participants:</span> <span className={"ans-blue"}>{e.participants}</span></Text><Text><span style={{"fontWeight":"bold"}}>Sponsor:</span> <span >{e.sponsor}</span></Text><Text><span style={{"fontWeight":"bold"}} >Categories:</span> <span >{e.categories}</span></Text></Box>
          
        ))}
        </Box>
      </Box>
    </Box>
  );
};

export default EventCalendar
