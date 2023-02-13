import React from 'react'
import {Grid,Typography,Button} from "@mui/material"
import { Box} from '@mui/system'
import Cake from "./cake.png"


const HeroSection = () => {
  return (
    <>
    {/* default direction of browser is row and if we want we can write it(for being explicit) or not(not compulsory to write)  */}
    {/* alignItems moves the position of content/item vertically columnwise */}
    <Grid container direction="row" alignItems="center">
        <Grid item xs={12} sm={6} order={{xs:2,sm:1}}>
        <Typography variant="h3">A bliss in every bite</Typography>
        <Typography variant="h5">We offer tasty cakes and sweets for you</Typography>
        <Button size="large" variant="contained" sx={{borderRadius:5}}>Call Us</Button>
        </Grid>


    {/* here we are making Grid container as well as item(img is item of this Grid) so that we can change the position of image */}
    {/* justifyContent moves the position of content/item horizontally columnwise */}
        <Grid container item xs={12} sm={6} justifyContent="center" order={{xs:1,sm:2}}>
        <Box component="img" src={Cake} ></Box>
        </Grid>
    </Grid>
    </>
  )
}

export default HeroSection