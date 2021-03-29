import Signup from "../Signup";
import SignupPic from "../../assets/signupPic.jpeg";
import { Box, makeStyles } from "@material-ui/core";
import Navbar from "../layout/Navbar";

const useStyles=makeStyles({
    PicStyle:{
        backgroundImage:`url(${SignupPic})`,
        backgroundSize:"cover",
        backgroundPosition:"center",
        height:"100vh",
        width:"100vw",
        display:"flex",
        flexDirection:"column",
        justifyContent:"start",
        marginTop:"0",
        marginLeft:"0",
        margin:"0",
        padding:"0"
      
    }
});
function SignupPage(){
    const classes = useStyles();
    return(
        <Box className={classes.PicStyle}>
            <Navbar/>
            <Signup/>
        </Box>
    );

}

export default SignupPage;