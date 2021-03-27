import { Box, Button, makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import PlsPic from "../assets/homePic.jpg"

const useSStyles=makeStyles({
    boxStyle:{
        backgroundImage:`url(${PlsPic})`,
        backgroundSize:"cover",
        backgroundPosition:"center",
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
    btnStyle:{
        minWidth: 200,
        transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
        background:"#5C6D37",
        margin:"1%",
        '&:hover': {
          background:"#5C6D37",
          transform: 'scale(1.1)',
        },
        borderRadius: 50,
        color: "white",
        textTransform: 'none',
        fontSize: 15,
        fontWeight: 700,
        padding:9
     }
})
function PlsLogin(){
    const classes = useSStyles();
return(
    <Box className={classes.boxStyle}>
        <h1>Please Login or Create an account to post or join events!</h1>
        
        <Button component={Link} variant="outlined" className={classes.btnStyle} to="/Login">Login</Button>
        <Button component={Link} variant="outlined" className={classes.btnStyle} to="/Signup">Signup</Button>
       
        <h3>Join the Community</h3>
    </Box>
);
}

export default PlsLogin;