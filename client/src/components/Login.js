
import {Button, Input, Box} from '@material-ui/core';
function Login(){
return(
<form > 
    <Box>
<Input placeholder="UserName"  inputProps={{ 'aria-label': 'description' }} />
</Box>
<Box>
<Input placeholder="Password" inputProps={{ 'aria-label': 'description' }} />
</Box>
<Box>
<Button variant="contained" color="primary">
  Login
</Button>
</Box>
</form>
);
}
// className={classes.root} noValidate autoComplete="off"
export default Login;