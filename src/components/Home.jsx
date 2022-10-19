import React from 'react'
import { Typography } from '@mui/material'
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
const Home = () => {
  return (
    <>

      <Typography color={"#256D85"} align={"center"} variant="h3" component="h2" mt={"15%"}>
        Welcome to the User store app {" "}<PeopleOutlineIcon fontSize='large' />
      </Typography>
      <Typography color={"#256D85"} align={"center"} variant="p" component="p" mt={2}>
        In this webiste you can do CURD operation on users
      </Typography>
      <Typography color={"#256D85"} align={"center"} variant="p" component="p" mt={2} >
        To add user go to Add user<br />
        To see all users go to ALl users
      </Typography>
    </>


  )
}

export default Home
