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
  contentStyle:{
    marginLeft:"6%",
    marginTop:"15%"
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
          <HomeCard/>
        </Box>
      </Box>
    </Fragment>
  );
}