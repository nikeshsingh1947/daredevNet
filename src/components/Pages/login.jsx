import React from 'react';
import { Box, FormControl, FormLabel, Input, Button,Text } from '@chakra-ui/react';
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <Box style={{"width":"40%","margin":"auto","margin-top":"5%"}}>
      <h1>LogIn</h1>
      <FormControl>
        <FormLabel style={{"fontWeight":"bold"}}>Email</FormLabel>
        <Input type="email" placeholder="Enter your email" />
      </FormControl>
      <FormControl>
        <FormLabel style={{"fontWeight":"bold"}}>Password</FormLabel>
        <Input type="password" placeholder="Enter your password" />
      </FormControl>
      <Button colorScheme="blue">Login</Button>
      <Link  to="/signup"><Text fontWeight={"bold"} fontSize={"25px"} id="belwtxt" color={"blue"}>Don't have an account? Join The daredevils</Text></Link>
    </Box>
  );
};

export default Login;
