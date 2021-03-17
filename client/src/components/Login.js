import { makeStyles } from '@material-ui/core/styles';
import {Button, Input, Box} from '@material-ui/core';


const useStyles=makeStyles({
  formStyles:{
    display:"flex",
    flexDirection:"column",
    width:"40%",
    marginLeft:"27%",
    marginTop:"27%"
  },
  inputStyles:{
    margin:"30px"
  }
});
function Login(){
  const classes = useStyles();
return(
<form > 
 
  <Box className={classes.formStyles}>

    <Input placeholder="UserName" className={classes.inputStyles} inputProps={{ 'aria-label': 'description' }} />
    <Input placeholder="Password" className={classes.inputStyles}inputProps={{ 'aria-label': 'description' }} />
    <Button variant="contained" className={classes.inputStyles} color="primary">
        Login
    </Button>

  </Box>

</form>
);
}
// className={classes.root} noValidate autoComplete="off"
export default Login;