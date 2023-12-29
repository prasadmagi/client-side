import React from 'react'
import '../App.css'
import { Card, CardMedia, CardContent, Typography, CardActions, Button, Box } from '@mui/material'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
const User = (props) => {

  const history = useNavigate();
  const { _id, name, dob, image, age, email, phone, company, city } = props.user;
  let url = window.REACT_APP_URL
  const deletehandler = async () => {
    const msg = window.confirm("Please confirm?");

    if (msg === true) {
      await axios.delete(url + `${_id}`)
        .then(res => res.data).then(() => history("/users"))
      toast.success("User Deleted Successfully");


    } else {
      toast.warn("Operation Denied");
    }
  }

  return (
    <div>

      <Card style={{ backgroundColor: "#DFF6FF" }} className='card' sx={{ maxWidth: 345, boxShadow: 4 }}  >

        <CardMedia
          component="img"
          height={200}
          image={image}
          alt={name}
        />
        <CardContent>
          <Typography style={{ fontWeight: 600 }} gutterBottom variant="h6">
            Name:- {name}
          </Typography>
          <Typography gutterBottom component="p">
            <b>Dob:</b> {dob}
          </Typography>
          <Typography gutterBottom component="p">
            <b>Age:</b> {age} year
          </Typography>
          <Typography gutterBottom component="p">
            <b>Email:</b> {email}
          </Typography>
          <Typography gutterBottom component="p">
            <b>Phone:</b> {phone}
          </Typography>
          <Typography gutterBottom component="p">
            <b>Company:</b> {company}
          </Typography>
          <Typography gutterBottom component="p">
            <b>City:</b> {city}
          </Typography>
        </CardContent>

        <CardActions sx={{ justifyContent: 'space-around' }}>
          <Button LinkComponent={Link} to={`/users/${_id}`} size="small" variant="contained">Update</Button>
          <Button onClick={deletehandler} size="small" variant="contained">Delete</Button>
        </CardActions>



      </Card>
      <ToastContainer
        position="top-center"
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

export default User
