import { Box, Flex, Text, Link,Image } from "@chakra-ui/react";
import DareLogo from "./images/thedaredevils logo.png";
export const Footer = () => {
  return (
    <Box as="footer" bg="#2e1f37" color="white" py={6}>
      <Flex
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        align="center"
      >
        <Box flex="1">
          <Text fontSize="lg">Contact US</Text>
          <Link href="#">9953024724</Link><br></br>
          <Link href="#">deechowdhary@gmail.com</Link>
          {/* Add more links or content */}
        </Box>
        <Box flex="1">
          <Text fontSize="lg">Find Us On</Text>
          <Link href="#">Youtube</Link><br></br>
          <Link href="#">Facebook</Link><br></br>
          <Link href="#">Instagram</Link><br></br>
          <Link href="#">Twitter</Link>
          {/* Add more links or content */}
        </Box>
        <Box flex="1">
          <Text fontSize="lg">Our Services</Text>
          <Link href="#">Photography</Link><br></br>
          <Link href="#">Vediography</Link><br></br>
          <Link href="#">Drone Shoot</Link><br></br>
          <Link href="#">Event Management</Link><br></br>
          {/* Add more links or content */}
        </Box>
        <Box flex="1">
          <Text fontSize="lg"> <Box id='darelogo-container'><Image width={"150px"} height={"60px"} src={DareLogo}/></Box></Text>
          <Link href="#">© 2023 thedaredevils.com. All Rights Reserved. This site is not affiliated.this site is owned by the listed  platform owners        </Link>
      
          {/* Add more links or content */}
        </Box>
      </Flex>
    </Box>
  );
};
