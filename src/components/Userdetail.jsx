import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Box, Button, FormLabel, TextField } from '@mui/material'
import { toast, ToastContainer } from 'react-toastify'


const Userdetail = () => {
    const [input, setinput] = useState({});
    const id = useParams().id;
    let url = window.REACT_APP_URL
    useEffect(() => {
        const fetchHandle = async () => {
            await axios.get(url + `${id}`)
                .then((res) => res.data).then(data => setinput(data.users))
        };
        fetchHandle()
    }, [id]);
    const sendrequest = async () => {
        await axios.put(url + `${id}`, {
            name: String(input.name),
            dob: String(input.dob),
            image: String(input.image),
            age: Number(input.age),
            email: String(input.email),
            phone: Number(input.phone),
            company: String(input.company),
            city: String(input.city)
        }).then(res => res.data)
    }
    const handlesubmit = (e) => {
        e.preventDefault();
        sendrequest();
        toast.success("User Updated Successfully")
    }

    const handleinput = (e) => {
        setinput((prevstate) => ({
            ...prevstate,
            [e.target.name]: e.target.value
        }))
    }
    return (
        <div>
            {input && <form onSubmit={handlesubmit}>
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
                    <TextField value={input.name} onChange={handleinput} margin='normal' fullWidth variant='outlined' name='name' type={"Text"} placeholder='Enter name' />
                    <FormLabel>Dater of Birth</FormLabel>
                    <TextField value={input.dob} onChange={handleinput} margin='normal' fullWidth variant='outlined' name='dob' type={"Text"} placeholder='DD/MM/YYYY' />
                    <FormLabel>Image</FormLabel>
                    <TextField value={input.image} onChange={handleinput} margin='normal' fullWidth variant='outlined' name='image' type={"Text"} placeholder='Paste image link here' />
                    <FormLabel>Age</FormLabel>
                    <TextField value={input.age} onChange={handleinput} margin='normal' fullWidth variant='outlined' name='age' type={"Number"} placeholder='Enter age' />
                    <FormLabel>Email</FormLabel>
                    <TextField value={input.email} onChange={handleinput} margin='normal' fullWidth variant='outlined' name='email' type={'email'} placeholder='Enter email ' />
                    <FormLabel>Phone</FormLabel>
                    <TextField value={input.phone} onChange={handleinput} margin='normal' fullWidth variant='outlined' name='phone' type={"Number"} placeholder='Enter phone number' />
                    <FormLabel>Compnay</FormLabel>
                    <TextField value={input.company} onChange={handleinput} margin='normal' fullWidth variant='outlined' name='company' type={"Text"} placeholder='Enter company name' />
                    <FormLabel>City</FormLabel>
                    <TextField value={input.city} onChange={handleinput} margin='normal' fullWidth variant='outlined' name='city' type={"Text"} placeholder='Enter city name' />
                    <Button sx={{ margin: "20px 0" }} type="submit" variant="contained">Update User</Button>
                </Box >
            </form>}
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
        </div>
    )
}

export default Userdetail
