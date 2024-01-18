import { Box, Text } from "@chakra-ui/react";
import React from "react";
import "./BackgroundText.css";
import { TextAnimation } from "./Whydare";


export const BackgroundText = () => {
  return (
    <Box id="bgText">
        <TextAnimation/>

      <Text id="txtwrt">

      <span className="bultsign">⊛</span>  We aim at providing you to progress in sales through branding and
        visibility.<br></br><span className="bultsign">⊛</span>  Special attention to your brand promotion needs will be our
        priority.<br></br><span className="bultsign">⊛</span>  Publicizing your brand on all online platforms using digital
        and social media marketing campaigns, Emails and broadcast messages to
        all our existing databases.<br></br> <span className="bultsign">⊛</span>  Promotion through online and offline
        platforms during events and tournaments etc.<br></br> <span className="bultsign">⊛</span>  Denoting your brand as a
        sponsor (with specific title) of the event and implement our workforce
        to make people follow or purchase your product. <br></br><span className="bultsign">⊛</span>  Promotion and presence
        of your brand logo in the concerned events.<br></br> <span className="bultsign">⊛</span>  Product display through
        special photography corner on the day of event for people to have
        pictures with your branding. <br></br><span className="bultsign">⊛</span>We would invite your team to display your
        product, talk about it and distribute samples (if any) <br></br><span className="bultsign">⊛</span>  We have a good
        reach among Sports Enthusiasts and have witnessed the strength of at
        least 2000 participants in the main event.<br></br><span className="bultsign">⊛</span>  Renowned Sports Enthusiasts
        and Social Media Influencers will help to promote the events and your
        brand activities
      </Text>
    </Box>
  );
};
