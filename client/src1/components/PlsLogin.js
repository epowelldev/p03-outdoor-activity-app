import { Button, makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";


const useSStyles=makeStyles({
    boxStyle:{
        display:"flex",
        flexDirection:"column",
        backgroundColor:"#5C6D37",
        color:"white",
        width:"55vw",
        height:"50vh",
        margin:"10%",
        borderRadius:"30px",
        marginLeft:"25vw",
        justifyContent:"space-around",
        alignItems:"center"
    },
    buttonStyle:{
        width:"20px",
        backgroundColor:"#B39180",
        color:"white",
        margin:"2%"
    }
})
function PlsLogin(){
    const classes = useSStyles();
return(
    <div className={classes.boxStyle}>
        <h1>Please Login or Create an account to post or join events!</h1>
        <div stlye={{display:"flex"}}>
        <Button variant="outlined" className={classes.buttonStyle} href="/Login">Login</Button>
        <Button variant="outlined" className={classes.buttonStyle} href="/Signup">Signup</Button>
        </div>
        <h3>Join the Community</h3>
    </div>
);
}

export default PlsLogin;