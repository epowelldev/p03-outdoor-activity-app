/* eslint-disable import/no-anonymous-default-export */
import { Fragment } from "react";
import Navbar from "../layout/Navbar";
import { makeStyles } from '@material-ui/core/styles';
import HomePic from "../../assets/homePic.JPG";
import { Box } from "@material-ui/core";

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
    justifyContent:"space-around"
  },
  // ImgStyle:{
  //     backgroundImage:`url(${HomePic})`,
  //     backgroundSize:"cover",
  //     backgroundPosition:"center",
  //     height:"100vh",
  //     width:"100vw",
  //     display:"flex",
  //     flexDirection:"column",
  //     justifyContent:"start",
  //     marginTop:"0",
  //     marginLeft:"0",
  //     margin:"0",
  //     padding:"0",
      
    
  // }
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
      </Box>
    </Fragment>
    
  );
}