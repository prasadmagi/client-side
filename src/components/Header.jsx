import React, { useState } from 'react'
import { AppBar, Toolbar, Typography, Tabs, Tab } from '@mui/material';
import PeopleAltSharpIcon from '@mui/icons-material/PeopleAltSharp';
import HomeIcon from '@mui/icons-material/Home';

import { NavLink } from 'react-router-dom'
const Header = () => {
    const [value, setvalue] = useState(0);
    return (
        <div>
            <AppBar sx={{ backgroundColor: "06283D" }} position='sticky'>
                <Toolbar>
                    <Typography><HomeIcon /></Typography>
                    <Tabs
                        sx={{ ml: "auto" }}
                        textColor="DFF6FF"
                        indicatorColor="primary"
                        value={value}
                        onChange={(e, val) => setvalue(val)}
                    >
                        <Tab LinkComponent={NavLink} to="/add" label="Add User" />
                        <Tab LinkComponent={NavLink} to="/users" label="All Users" />
                        <Tab LinkComponent={NavLink} to="/about" label="About" />
                    </Tabs>
                </Toolbar>

            </AppBar>
        </div>
    )
}

export default Header
