import LoginPic from "../../assets/loginPic.jpeg";
import { makeStyles } from '@material-ui/core/styles';
import Login from "../Login"
import { Box, Paper } from "@material-ui/core";



const useStyles=makeStyles({
    ImgStyle:{
        backgroundImage:`url(${LoginPic})`,
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

// const style ={
//     backgroundImage:`url(${LoginPic})`,
//     backgroundSize:"cover",
//     backgroundPosition:"center",
//     height:"100vh",
//     width:"100vw",
//     marginTop:"0",
// }

function LoginPage(){
    const classes = useStyles();
    return(
        
        <Box className={classes.ImgStyle} >
            <Box>
                <Login />
            </Box>
        </Box>
        
    );
}
// className={classes.ImgStyle}
export default LoginPage;