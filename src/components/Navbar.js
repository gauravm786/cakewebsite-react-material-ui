import React from 'react'
import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import LoginIcon from '@mui/icons-material/Login';
// import LogoutIcon from '@mui/icons-material/Logout';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';

const Navbar = () => {
  return (
<>
{/* go to MUI and then click or search for AppBar and then go to the bottom of the page and click on <AppBar />,where we will know which props can be used with particular component  */}
{/* whenever we use AppBar we must use Toolbar inside it  */}
    <AppBar position='fixed'>
        <Toolbar >
            {/* flexGrow takes certain space for the element in which it is used and moves remaining element to the right */}
            <Typography variant='h6' flexGrow={1}>Blissful bytes</Typography>

        <Button variant="text" color='inherit' startIcon={<LoginIcon />}>Login</Button>
        <Button variant='text' color='inherit' endIcon={<LogoutRoundedIcon />}>Logout</Button>
        </Toolbar>
    </AppBar>
</>    
  )
}

export default Navbar