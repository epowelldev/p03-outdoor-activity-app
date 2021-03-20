import LoginPic from "../../assets/loginPic.jpeg";
import { makeStyles } from '@material-ui/core/styles';
import Login from "../Login"
import { Box, Paper } from "@material-ui/core";



const useStyles=makeStyles({
    // ImgStyle:{
    //     backgroundImage:`url(${LoginPic})`,
    //     backgroundSize:"cover",
    //     backgroundPosition:"center",
    //     height:"100vh",
    //     width:"100vw",
       
    //     margin:"0",
      
    // }
});

const style ={
    backgroundImage:`url(${LoginPic})`,
    backgroundSize:"cover",
    backgroundPosition:"center",
    height:"100vh",
    width:"100vw",
    marginTop:"0",
}

function LoginPage(){
    const classes = useStyles();
    return(
        
        <div style={style} >
            <Login />
        </div>
        
    );
}
// className={classes.ImgStyle}
export default LoginPage;