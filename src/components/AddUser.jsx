import React, { useState } from 'react'
import { Box, Button, FormLabel, TextField } from '@mui/material'
import axios from 'axios'
import { useNavigate } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify'

const AddUser = () => {
  const history = useNavigate();
  const [input, setinput] = useState({
    name: '',
    dob: null,
    image: '',
    age: null,
    email: '',
    phone: null,
    company: '',
    city: ''

  });

  const handleinput = (e) => {
    setinput((prevstate) => ({
      ...prevstate,
      [e.target.name]: e.target.value
    }))


  }
  const sendrequest = async () => {
    axios.post("http://localhost:4000/users", {
      name: String(input.name),
      dob: String(input.dob),
      image: String(input.image),
      age: Number(input.age),
      email: String(input.email),
      phone: Number(input.phone),
      company: String(input.company),
      city: String(input.city)
    })
  }
  const handlesubmit = (e) => {
    e.preventDefault();
    if (input.name === "" && input.dob === null && input.image === "" &&
      input.age === null && input.email === "" && input.phone === null &&
      input.city === "" && input.company === "") {
      toast.error("Please enter the all values")
    } else {
      // console.log(input);
      sendrequest()
      toast.success("User Updated successfullly");
    }
  }
  return (
    <form onSubmit={handlesubmit}>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent={"center"}
        maxWidth={700}
        alignContent={"center"}
        alignSelf="center"
        marginLeft={"auto"}
        marginRight="auto"
        marginTop={10}
      >
        <FormLabel>Name</FormLabel>
        <TextField value={input.name} onChange={handleinput} margin='normal' fullWidth variant='outlined' name='name' type={"Text"} placeholder='Enter name' autoComplete='off' />
        <FormLabel>Dater of Birth</FormLabel>
        <TextField value={input.dob} onChange={handleinput} margin='normal' fullWidth variant='outlined' name='dob' type={"Text"} placeholder='DD/MM/YYYY' autoComplete='off' />
        <FormLabel>Image</FormLabel>
        <TextField value={input.image} onChange={handleinput} margin='normal' fullWidth variant='outlined' name='image' type={"Text"} placeholder='Paste image link here' autoComplete='off' />
        <FormLabel>Age</FormLabel>
        <TextField value={input.age} onChange={handleinput} margin='normal' fullWidth variant='outlined' name='age' type={"Number"} placeholder='Enter age' autoComplete='off' />
        <FormLabel>Email</FormLabel>
        <TextField value={input.email} onChange={handleinput} margin='normal' fullWidth variant='outlined' name='email' type={'email'} placeholder='Enter email ' autoComplete='off' />
        <FormLabel>Phone</FormLabel>
        <TextField value={input.phone} onChange={handleinput} margin='normal' fullWidth variant='outlined' name='phone' type={"Number"} placeholder='Enter phone number' autoComplete='off' />
        <FormLabel>Compnay</FormLabel>
        <TextField value={input.company} onChange={handleinput} margin='normal' fullWidth variant='outlined' name='company' type={"Text"} placeholder='Enter company name' autoComplete='off' />
        <FormLabel>City</FormLabel>
        <TextField value={input.city} onChange={handleinput} margin='normal' fullWidth variant='outlined' name='city' type={"Text"} placeholder='Enter city name' autoComplete='off' />
        <Button sx={{ margin: "20px 0" }} type="submit" variant="contained">Submit</Button>
      </Box >
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </form>


  )
}

export default AddUser
