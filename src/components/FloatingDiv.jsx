import React from 'react';
import './FloatingDiv.css'; // Make sure to create the CSS file for styling
import Type from './Type';
import { Box ,Text} from '@chakra-ui/react';
import RhombusButton from './TraiButton';

const FloatingDiv = () => {
    const handleButtonClick1 = () => {
          // Handle button click action here
          console.log("Button clicked!");
        };
    const handleButtonlcik2 =() =>{
        console.log("button clicked!")
    }
  return (
    <div className="floating-div">
      <div id="typer-iner">
     <strong color={"rgb(255,255,255)"} id='typewriter1'><Type/></strong>
     <Box><Text>THE DAREDEVILS is an expanding Sports Event Management Firm strive to boost endurance,strength and zeal for sports by promoting the desire for athletic activity and recreation.</Text></Box>
     <Box display={"flex"} margin={"auto"}justifyContent={"space-evenly"}><RhombusButton onClick={handleButtonClick1} text="CHECK EVENTS"/><RhombusButton onClick={handleButtonlcik2} text="ABOUT US"/></Box>
     </div>
    </div>
  );
};

export default FloatingDiv;
