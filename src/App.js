// Default breakpoints
// Each breakpoint (a key) matches with a fixed screen width (a value):

// xs, extra-small: 0px
// sm, small: 600px
// md, medium: 900px
// lg, large: 1200px
// xl, extra-large: 1536px
// These values can be customized.
import './App.css';
import {createTheme, ThemeProvider, Typography} from "@mui/material" 
// or we can import like this 
// import Typography from '@mui/material';
import { green, purple } from '@mui/material/colors';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import { Container } from '@mui/system';
import CakeSection from './components/CakeSection';
import ContactUs from './components/ContactUs';


// create Theme 
// import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: "#864313",
    },
  },
});


function App() {
  return (
    <>
    {/* <><h1>hello world</h1></> */}

    {/* Typography : 
    Typography
    Use typography to present your design and content as clearly and efficiently as possible.
    */}

    {/* sx is used as inline css in MUI where CSS property is writtern in object format,to write custom CSS we use sx  and sx can be used in any component as well as  i Typography but is preferred not to use sx in Tyopgraphy because other props/css properties can be directly used in Typography*/}
    {/* variant value ranges from h1 to h7 where h1 is biggest and h7 is smallest */}
    {/* <Typography variant='h7' sx={{backgroundColor:"rebeccapurple"}}>This is Home Page</Typography> */}

    {/* or we can directly use css property as props like this */}
    {/* <Typography variant='h1' backgroundColor="green">This is Home page</Typography> */}
    

    {/* Appbar used  */}
    {/* <Navbar /> */}

    {/* using createTheme  */}
    <ThemeProvider theme={theme}>
      <Navbar />

      {/* Grid  */}
      {/* <HeroSection /> */}
      {/* we are using HeroSection inside container so that we can get margin from body  */}
      <Container>
        <HeroSection />
        <CakeSection />
        <ContactUs />
      </Container>
    </ThemeProvider>
    </>
  );
}

export default App;
