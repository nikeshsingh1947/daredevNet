import { Box } from "@chakra-ui/react";
import React from "react";
import SliderComponent from "../SliderComponent";
import { BackgroundText } from '../BackgroundText';
import { Footer } from '../Footer';
import { WhatsNew } from '../WhatsNew';
import ZigzagLine from '../Zigzagline';
import { Whatwedo } from '../Whatwedo';
import { Ourmodel } from '../OurModel';
import { Ourservices } from '../Ourservices';
import { Stands } from '../Stands';
import { Previusevent } from '../Previusevent';
import { Ourpartner } from '../Ourpartners';
import { Funfactbird } from "../Funfactcard";
import { Posterflip } from "../PosterFlip";



export const Home=()=>{

    return(
      <Box>
      {/* <FloatButton/> */}
      <SliderComponent/>
      <ZigzagLine/>
      <WhatsNew/>
      <Funfactbird/>
      <Whatwedo/>
      <Ourmodel/>
      <Posterflip/>
      <Ourservices/>
      <Stands/>
      <BackgroundText/>
      <Previusevent/>
      <Ourpartner/>
      <Footer/>
      </Box>
    )
}