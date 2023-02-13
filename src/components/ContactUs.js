import React from 'react'
import { Button, TextField, Typography,Box } from '@mui/material'
import { useFormik } from 'formik'
import * as Yup from "yup"
// * means everything



const ContactUs = () => {

    //formik is use to submit form's data
    const formik = useFormik({
        initialValues:{
            firstName:"",
            lastName:"",
            phone:"",
            message:""
        },
        // Yup is use for validation 
        validationSchema:Yup.object({
            firstName:Yup.string().required("This is required"),
            lastName:Yup.string().required("This is required"),
            phone:Yup.string().required("This is required"),
            message:Yup.string().required("This is required")
        }),
        onSubmit:(values)=>{console.log("form submitted",values)}
    })

  return (
    <>
    <Typography variant='h4' mt={6} mb={6}>Contact Us-</Typography>
    {/* handleSubmit will execute the onSubmit method in formik */}
    <Box component="form" onSubmit={formik.handleSubmit}> 

    {/* fullWidth will not work because we have set the width with the help of sx  */}
    {/* We need to add name attribute for validation purpose and formik will search firstname in initialValues and checks that initial value is empty then it will update it  */}
    <TextField label="First Name" 
    type="text" variant="outlined" 
    fullWidth sx={{width:"300px",m:1}} 
    name="firstName" 
    onChange={formik.handleChange}
    // If there is error in formik then we can access that error through object and if there is error in firstName then to show that error we need to convert it into boolean and to show that error we use helperText method 
    //now to show error when we touch/click the field,here value will be true,when we touch the field && we get actual error if field is empty then value will become true and we will get red color on the field and touched will only work if onBlue event is used
    error={formik.touched.firstName && Boolean(formik.errors.firstName)}
    onBlur={formik.handleBlur}
    //here helperText will show error when we click/touch the field  and it remains empty as well as if nothing is filled inside it and similarly for lastname,phone and message
    helperText={formik.touched.firstName && formik.errors.firstName}
    />

    <TextField label="Last Name" 
    type="text" 
    variant="outlined" 
    fullWidth 
    sx={{width:"300px",m:1}} 
    name="lastName" 
    onChange={formik.handleChange} 
    error={formik.touched.lastName && Boolean(formik.errors.lastName)}
    onBlur={formik.handleBlur}
    helperText={formik.touched.lastName && formik.errors.lastName}
    />

    <TextField label="Phone Number" 
    type="number" variant="outlined" 
    fullWidth 
    sx={{width:"300px",m:1}} 
    name="phone" 
    onChange={formik.handleChange}
    error={formik.touched.phone && Boolean(formik.errors.phone)}
    onBlur={formik.handleBlur}
    helperText={formik.touched.phone && formik.errors.phone}
    />

    {/* multiline helps us to write data in a multiple line in the textfield  */}
    <TextField label="Message" 
    type="text" 
    variant="outlined" 
    fullWidth 
    multiline 
    sx={{m:1}} rows={4} 
    name="message" 
    onChange={formik.handleChange}
    error={formik.touched.message && Boolean(formik.errors.message)}
    onBlur={formik.handleBlur}
    helperText={formik.touched.message && formik.errors.message}
    />
    <Button size='large' variant="contained" type="submit" sx={{m:1}}>Send</Button>
    
    </Box>
    </>
  )
}

export default ContactUs