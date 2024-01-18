import React from 'react';
import { useState } from "react";
import { Box, FormControl,Select, FormLabel, Input, Button,Text } from '@chakra-ui/react';
import { Link } from "react-router-dom";
import "./signup.css"
import { Postuser } from "../../Redux/AuthRedux/action";
import { useSelector,useDispatch } from 'react-redux';
const Signup = () => {
  const user=useSelector((store)=>store.userData.reg)
  // const navigate=useNavigate()
  const dispatch=useDispatch()
  const [input, setInput] = useState('')
    const [pass,setPass]=useState("");
    const [name,setName]=useState("");
    const [proffesion,setProfffesion]=useState("");
    const [blodgrp,setBlodgrp]=useState("");
    const [gender,setGender]=useState("");
    const [size,setSize]=useState("");
    const [address,setAddress]=useState("");
    const [city,setCity]=useState("");
    const [state,setState]=useState("");
    const [pincode,setPincode]=useState(0);
    const [mobile,setMobile]=useState(0);
    const handleInputChange = (e) => setName(e.target.value)
    const hnadleSubmit=()=>{
      dispatch(Postuser({name:name,
                        email:input,
                        proffesion:proffesion,
                        bloodgroup:blodgrp,
                        gender:gender,TshirtSize:size,
                        address:address,
                        city:city,
                        state:state,
                        pincode:pincode,
                        mobileNumber:mobile,
                        password:pass}))
      if(user.token===undefined){
         alert("something went wrong try again using diffrent Email")
      }
      else{
        //  navigate("/login",{replace:true})
        console.log(user)
      }
   }
  return (
    <Box id="main-iput-signup" style={{"width":"40%","margin":"auto","margin-top":"5%"}}>
      <h1>SIGN-UP</h1>
      <FormControl>
        <FormLabel style={{"fontWeight":"bold"}}>Name</FormLabel>
        <Input className='signup-input' onChange={handleInputChange} type="text" placeholder="Enter your name" />
      </FormControl>
      <FormControl>
        <FormLabel style={{"fontWeight":"bold"}}>Email</FormLabel>
        <Input className='signup-input'onChange={(e)=>setInput(e.target.value)} type="email" placeholder="Enter your email" />
      </FormControl>
      <FormControl>
        <FormLabel style={{"fontWeight":"bold"}}>Proffesion</FormLabel>
        <Input className='signup-input' onChange={(e)=>setProfffesion(e.target.value)}type="text" placeholder="Enter your proffesion ex : Doctor" />
      </FormControl>
      <FormControl>
      <FormLabel style={{"fontWeight":"bold"}}>Blood Group</FormLabel>
        <Select placeholder='select option' onChange={(e)=>setBlodgrp(e.target.value)}>
          <option value="A+">A+</option>
          <option value="A-">A-</option>
          <option value="B+">B+</option>
          <option value="B-">B-</option>
          <option value="AB+">AB+</option>
          <option value="AB-">AB-</option>
          <option value="O+">O+</option>
          <option value="O-">O-</option>
        </Select>
      </FormControl>
      <FormControl>
      <FormLabel style={{"fontWeight":"bold"}}>Gender</FormLabel>
        <Select placeholder='select option'  onChange={(e)=>setGender(e.target.value)}>
          <option value="male">male</option>
          <option value='female'>female</option>
          <option value='Other'>Other</option>
        </Select>
      </FormControl>
      <FormControl>
      <FormLabel style={{"fontWeight":"bold"}}>T-shirt Size</FormLabel>
        <Select placeholder='select T shirt Size' onChange={(e)=>setSize(e.target.value)}>
        <option value="S">Small</option>
        <option value="M">Medium</option>
        <option value="L">Large</option>
        <option value="XL">X-Large</option>
        <option value="XXL">XX-Large</option>
        </Select>
      </FormControl>
      <FormControl>
        <FormLabel style={{"fontWeight":"bold"}}>Address</FormLabel>
        <Input className='signup-input' type="text" onChange={(e)=>setAddress(e.target.value)} placeholder="Enter your full address" />
      </FormControl>
      <FormControl>
        <FormLabel style={{"fontWeight":"bold"}}>City</FormLabel>
        <Input className='signup-input' type="text" onChange={(e)=>setCity(e.target.value)} placeholder="Enter your city/town" />
      </FormControl>
      <FormControl>
      <FormLabel style={{"fontWeight":"bold"}}>State</FormLabel>
      <Select placeholder='Select option' onChange={(e)=>setState(e.target.value)}>
      <option value="Andhra Pradesh">Andhra Pradesh</option>
          <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
          <option value="Arunachal Pradesh">Arunachal Pradesh</option>
          <option value="Assam">Assam</option>
          <option value="Bihar">Bihar</option>
          <option value="Chandigarh">Chandigarh</option>
          <option value="Chhattisgarh">Chhattisgarh</option>
          <option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
          <option value="Daman and Diu">Daman and Diu</option>
          <option value="Delhi">Delhi</option>
          <option value="Lakshadweep">Lakshadweep</option>
          <option value="Puducherry">Puducherry</option>
          <option value="Goa">Goa</option>
          <option value="Gujarat">Gujarat</option>
          <option value="Haryana">Haryana</option>
          <option value="Himachal Pradesh">Himachal Pradesh</option>
          <option value="Jammu and Kashmir">Jammu and Kashmir</option>
          <option value="Jharkhand">Jharkhand</option>
          <option value="Karnataka">Karnataka</option>
          <option value="Kerala">Kerala</option>
          <option value="Madhya Pradesh">Madhya Pradesh</option>
          <option value="Maharashtra">Maharashtra</option>
          <option value="Manipur">Manipur</option>
          <option value="Meghalaya">Meghalaya</option>
          <option value="Mizoram">Mizoram</option>
          <option value="Nagaland">Nagaland</option>
          <option value="Odisha">Odisha</option>
          <option value="Punjab">Punjab</option>
          <option value="Rajasthan">Rajasthan</option>
          <option value="Sikkim">Sikkim</option>
          <option value="Tamil Nadu">Tamil Nadu</option>
          <option value="Telangana">Telangana</option>
          <option value="Tripura">Tripura</option>
          <option value="Uttar Pradesh">Uttar Pradesh</option>
          <option value="Uttarakhand">Uttarakhand</option>
          <option value="West Bengal">West Bengal</option>
      </Select>
      
      </FormControl>
      <FormControl>
        <FormLabel style={{"fontWeight":"bold"}}>Postal Code</FormLabel>
        <Input className='signup-input' type="number" onChange={(e)=>setPincode(e.target.value)} placeholder="Enter your 6 digit postal code" />
      </FormControl>
      <FormControl>
        <FormLabel style={{"fontWeight":"bold"}}>Mobile</FormLabel>
        <Input className='signup-input' type="number" onChange={(e)=>setMobile(e.target.value)} placeholder="Enter your 10 digit Mobile NUmber" />
      </FormControl>
      <FormControl>
        <FormLabel style={{"fontWeight":"bold"}}>Password</FormLabel>
        <Input className='signup-input' type="password" onChange={(e)=>setPass(e.target.value)} placeholder="Enter your password" />
      </FormControl> 
      <Button colorScheme="green" onClick={hnadleSubmit}>Signup</Button>
      <Link to="/login"><Text id="regtxt" color={"blue"}>already have an account?</Text></Link>
    </Box>
  );
};

export default Signup;
