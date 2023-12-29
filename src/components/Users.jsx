import React, { useState, useEffect } from 'react'
import axios from 'axios'
import User from "./User"
import '../App.css'
import { Grid, TextField } from '@mui/material';
import { Box } from '@mui/system';
const URL = window.REACT_APP_URL;

const fetchusers = async () => {
    return await axios.get(URL).then(res => res.data);
}
const Users = () => {
    const [users, setusers] = useState([]);
    const [text, settext] = useState("");
    useEffect(() => {
        fetchusers().then(data => setusers(data.users));
    }, [])

    console.log(users);
    return (
        <>
            <Grid container direction={"column"} alignItems={"center"} justify="center" >
                <TextField

                    id="outlined-password-input"
                    label="Search user here"
                    type="text"
                    autoComplete="current-password"
                    value={text}
                    onChange={(e) => settext(e.target.value)}
                    style={{ marginTop: "2%" }}
                />
            </Grid>
            <div className='user-card'>


                {
                    users.filter((user) => {
                        if (text === "") {
                            return user
                        } else if (user.name.toLowerCase().includes(text.toLowerCase())) {
                            return user;
                        }
                    }).map((user, index) => {
                        return (
                            <div className="user-card" key={index}>
                                <User user={user} />
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Users
