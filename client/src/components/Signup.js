import {Button, Input, Box} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import API from "../utils/API";
import React,  { useState } from 'react'
import { Redirect, Link } from 'react-router-dom';


const useStyles=makeStyles({
    formStyles:{
      display:"flex",
      flexDirection:"column",
      width:"50%",
      marginLeft:"27%",
      marginTop:"5%",
      backgroundColor:"#5C6D37",
    color:"white",
    borderRadius:"25px",
    paddingTop:"7%",
    opacity:".90"
    },
    inputStyles:{
      margin:"30px",
      color:"black",
    backgroundColor:"white"
    },
    altBtn:{
        fontFamily:"Sans-serif",
        marginLeft:"22%"
      },
      title:{
        fontFamily:"Sans-serif",
        textAlign:"center",
        marginBottom:"5%"
      },
      submitBtn:{
    
        minWidth: 150,
        width:200,
        alignSelf:"center",
        transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
        background:"white",
        margin:"5%",
        '&:hover': {
          background:"white",
          transform: 'scale(1.1)',
        },
        borderRadius: 50,
        color: "black",
        textTransform: 'none',
        fontSize: 15,
        fontWeight: 700,
        padding:9
     }
  });


function Signup(){
    const classes = useStyles();

    const [signUpState, setSignUpState] = useState({ username: '', email: '', password: '' , firstname:'default',lastname:'default'});
    const { username, email, password } = signUpState;
    const [loggedIn, setLoggedIn] = useState(false);



    function handleSubmit(e) {
        e.preventDefault()
      console.log("hit", signUpState)
        API.signup( signUpState)
               .then(setSignUpState({ username: '', email: '', password: '' }))
            //    .then(AUTH.login(username, password))           
               .then(setLoggedIn(true))
       
    }

    function handleChange(e) {
        setSignUpState({ ...signUpState, [e.target.name]: e.target.value })
        console.log(signUpState)
    }


    if (loggedIn) {
      return <Redirect to={{ pathname: "/Events" }} />;
  } else {
    return(
        
        <form onSubmit={handleSubmit} >
        <Box className={classes.formStyles}>
        <h1 className={classes.title}>Signup</h1>
        <Input placeholder="First Name" onChange={handleChange} className={classes.inputStyles}inputProps={{ 'aria-label': 'description' }} />
            
            
        <Input placeholder="Last Name" onChange={handleChange} className={classes.inputStyles} inputProps={{ 'aria-label': 'description' }} />
       
        <Input placeholder="UserName" name="username" value={username} onChange={handleChange} className={classes.inputStyles} inputProps={{ 'aria-label': 'description' }} />
        
        <Input placeholder="Password" name="password" type="password" value={password} onChange={handleChange} className={classes.inputStyles} inputProps={{ 'aria-label': 'description' }} />
        
        <Input placeholder="Email" name="email" value={email} onChange={handleChange} className={classes.inputStyles} inputProps={{ 'aria-label': 'description' }} />
       
        <Button variant="contained"  className={classes.submitBtn} color="primary" onClick={handleSubmit}>
            Create Account
        </Button>
       <p className={classes.altBtn} >Already have an account?<Button component={Link} to="/login" color="primary">Login</Button></p>
        </Box>
      </form>
      
    )};
    }
    
    export default Signup;