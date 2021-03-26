/* eslint-disable import/no-anonymous-default-export */
import { Fragment } from "react";
import Navbar from "../layout/Navbar";
import { makeStyles } from '@material-ui/core/styles';
import HomePic from "../../assets/homePic.jpg"
import { Box, Paper } from "@material-ui/core";
import HomeCard from "../homeCard";
import HomeSignupCard from "../HomeSignupCard";
import HomeEventsCard from "../HomeEventsCard";
import HomePagePic from "../../assets/homePagePic.jpg"
const useStyles=makeStyles({
  HeaderStyle:{
    backgroundColor:"#5C6D37", 
    color:"white",
    fontFamily:"Sans-serif",
    marginLeft:"0",
    width:"100%", 
    padding:"2%",
    marginTop:"3%",
    display:"flex",
    justifyContent:"space-around",
    
    flexShrink:"1",
    backgroundImage:`url(${HomePic})`,
    backgroundSize:"cover",
    alignContentSm:"center",
    backgroundPosition:"center",
  
  },
  contentStyle:{
    display:"flex",
    flexDirection:"column",
    alignContent:"space-around",
    justifyContent:"space-around",
    zIndex:"1",
    height:"85vh"
  },
  bg:{
    backgroundColor:"#5C6D37",
    height:"100vh",
    width:"100vw",
    backgroundImage:`url(${HomePagePic})`,
    backgroundSize:"cover",
    backgroundPosition:"center",
    zIndex:"0"
  }
});


export default () => {
  const classes = useStyles();

  return(
    <Fragment>
      <Box className={classes.bg}>
        <Navbar/>
        <Box className={classes.contentStyle}>
          <HomeCard />
          <div style={{display:"flex",flexDirection:"row",marginTop:"1%",}}>
          <HomeSignupCard/>
          <HomeEventsCard/>
          </div>
        </Box>
      </Box>
    </Fragment>
  );
}