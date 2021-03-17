import {Button, Input, Box} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import API from "../utils/API";
import React,  { useState } from 'react'


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

    const [signUpState, setSignUpState] = useState({ username: '', email: '', password: '' , firstname:'default',lastname:'default'});
    const { username, email, password } = signUpState;
    const [loggedIn, setLoggedIn] = useState(false);



    function handleSubmit(e) {
        e.preventDefault()

        API.signup( signUpState)
               .then(setSignUpState({ username: '', email: '', password: '' }))
            //    .then(AUTH.login(username, password))           
               .then(setLoggedIn(true))
       
    }

    function handleChange(e) {
        setSignUpState({ ...signUpState, [e.target.name]: e.target.value })
        console.log(signUpState)
    }



    return(
        
        <form onSubmit={handleSubmit} >
        <Box className={classes.formStyles}>
            
        <Input placeholder="First Name" onChange={handleChange} className={classes.inputStyles}inputProps={{ 'aria-label': 'description' }} />
            
            
        <Input placeholder="Last Name" onChange={handleChange} className={classes.inputStyles} inputProps={{ 'aria-label': 'description' }} />
       
        <Input placeholder="UserName" name="username" value={username} onChange={handleChange} className={classes.inputStyles} inputProps={{ 'aria-label': 'description' }} />
        
        <Input placeholder="Password" name="password" value={password} onChange={handleChange} className={classes.inputStyles} inputProps={{ 'aria-label': 'description' }} />
        
        <Input placeholder="Email" name="email" value={email} onChange={handleChange} className={classes.inputStyles} inputProps={{ 'aria-label': 'description' }} />
       
        <Button variant="contained"  className={classes.inputStyles} color="primary">
            Create Account
        </Button>
       <p className={classes.altBtn} >Already have an account?<Button href="/login" color="primary">Login</Button></p>
        </Box>
      </form>
      
    );
    }
    
    export default Signup;