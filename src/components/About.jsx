import React from 'react'
import { Typography } from '@mui/material'
const About = () => {
  return (
    <>
      <Typography color={"#256D85"} align={"center"} variant="h4" component="h2" mt={10}>
        <p>This app is designed and devloped by Prasad Magi</p>
      </Typography>
      <Typography color={"#256D85"} align={"center"} variant="h6" component="h6" mt={10}>
        <p>Tech Stack which are used for this projects are - </p>
        <p>
          <li>Reactjs for Frontend</li>
          <li>Material-UI as UI framework</li>
          <li>Node-js and Express-js for Backend</li>
          <li>Mongodb Atlas for Databse</li>
        </p>

      </Typography>
    </>
  )
}

export default About
