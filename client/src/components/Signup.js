import {Button, Input, Box} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles=makeStyles({
    formStyles:{
      display:"flex",
      flexDirection:"column",
      width:"50%",
      marginLeft:"27%",
      marginTop:"10%",
      
    },
    inputStyles:{
      margin:"30px"
    },
    altBtn:{
        fontFamily:"Sans-serif",
        marginLeft:"22%"
      }
  });


function Signup(){
    const classes = useStyles();
    return(
        
        <form >
        <Box className={classes.formStyles}>
            
        <Input placeholder="First Name" className={classes.inputStyles}inputProps={{ 'aria-label': 'description' }} />
            
            
        <Input placeholder="Last Name" className={classes.inputStyles} inputProps={{ 'aria-label': 'description' }} />
       
        <Input placeholder="UserName" className={classes.inputStyles} inputProps={{ 'aria-label': 'description' }} />
        
        <Input placeholder="Password" className={classes.inputStyles} inputProps={{ 'aria-label': 'description' }} />
        
        <Input placeholder="Email" className={classes.inputStyles} inputProps={{ 'aria-label': 'description' }} />
       
        <Button variant="contained" className={classes.inputStyles} color="primary">
            Create Account
        </Button>
       <p className={classes.altBtn} >Already have an account?<Button href="/login" color="primary">Login</Button></p>
        </Box>
      </form>
      
    );
    }
    
    export default Signup;