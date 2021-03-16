import {Button, Input, Box} from '@material-ui/core';

function Signup(){
    return(
        <Box mx="auto">
        <form >
         
            <Box mx="auto">
        <Input placeholder="First Name" inputProps={{ 'aria-label': 'description' }} />
            </Box>
            <Box mx="auto">
        <Input placeholder="Last Name" inputProps={{ 'aria-label': 'description' }} />
        </Box>
        <Box mx="auto">
        <Input placeholder="UserName" inputProps={{ 'aria-label': 'description' }} />
        </Box>
        <Box mx="auto">
        <Input placeholder="Password" inputProps={{ 'aria-label': 'description' }} />
        </Box>
        <Box mx="auto">
        <Input placeholder="Email" inputProps={{ 'aria-label': 'description' }} />
        </Box>
        <Box mx="auto">
        <Button variant="contained" color="primary">
            Create Account
        </Button>
        </Box>
       
      </form>
      </Box>
    );
    }
    // className={classes.root} noValidate autoComplete="off"
    export default Signup;