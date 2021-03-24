/* eslint-disable import/no-anonymous-default-export */
import { Fragment } from "react";
import Navbar from "../layout/Navbar";
import { makeStyles } from '@material-ui/core/styles';
import HomePic from "../../assets/homePic.jpg"
import { Box } from "@material-ui/core";
import HomeCard from "../homeCard";
import HomeSignupCard from "../HomeSignupCard";
import HomeEventsCard from "../HomeEventsCard";

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
    backgroundImage:`url(${HomePic})`,
    backgroundSize:"cover",
    backgroundPosition:"center",
  },
  contentStyle:{
    display:"flex",
    flexWrap:"wrap",
    // justifyContent:"space-around"
  }
});


export default () => {
  const classes = useStyles();

  return(
    <Fragment>
      <Box >
      
      <div className={classes.HeaderStyle}>
        
      <h1>Join Us Outside</h1>
      
      <Navbar/>
      
      </div>
      <div className={classes.contentStyle}>
      <HomeCard />
      <div style={{display:"flex",flexDirection:"column",marginTop:"1%"}}>
      <HomeSignupCard/>
      <HomeEventsCard/>
      </div>
      </div>
      </Box>
    </Fragment>
    
  );
}