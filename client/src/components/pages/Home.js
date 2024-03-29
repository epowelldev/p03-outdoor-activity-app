/* eslint-disable import/no-anonymous-default-export */
import { Fragment } from "react";
import Navbar from "../layout/Navbar";
import { makeStyles } from '@material-ui/core/styles';
import { Box} from "@material-ui/core";
import HomeCard from "../homeCard";
import HomePagePic from "../../assets/homePagePic.jpg"
const useStyles=makeStyles({
  contentStyle:{
    marginLeft:"6%",
    marginTop:"12%",
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