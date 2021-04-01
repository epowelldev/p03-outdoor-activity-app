import {Button, Box} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import API from "../utils/API";
import React,  { useState } from 'react'
import { Redirect, Link } from 'react-router-dom';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';


const useStyles=makeStyles({
    formStyles:{
      display:"flex",
      flexDirection:"column",
      width:"60%",
      height:"80vh",
      marginLeft:"27%",
      marginTop:"5%",
    justifyContent:"space-evenly",
    backgroundColor:"#5C6D37",
    color:"white",
    borderRadius:"25px",
    // paddingTop:"7%",
    // paddingBottom:"7%",
    opacity:".80"
    },
    inputStyles:{
      // margin:"3%",
      color:"black",
      width:"75%",
      alignSelf:"center",
    backgroundColor:"white"
    },
    
    altBtn:{
        fontFamily:"Sans-serif",
        // marginLeft:"22%"
        // textAlign:"center"
      },
      title:{
        fontFamily:"Sans-serif",
        // textAlign:"center",
        // marginBottom:"5%"
      },
      submitBtn:{
    
        // minWidth: 50,
        width:"75%",
        // alignSelf:"center",
        transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
        background:"white",
        marginBottom:"2%",
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
          
          .then(()=>{
           
           API.login(username, password).then(()=>{ setLoggedIn(true)})
           
          } )
     
                    
    }

    function handleChange(e) {
        setSignUpState({ ...signUpState, [e.target.name]: e.target.value })
        console.log(signUpState)
    }


    if (loggedIn) {
      return <Redirect to={{ pathname: "/Events" }} />;
  } else {
    return(
      <ValidatorForm className={classes.formStyles}  >
        <Box className={classes.formStyles}>
          <h1 className={classes.title}>Signup</h1>
          <TextValidator placeholder="First Name" onChange={handleChange} className={classes.inputStyles}inputProps={{ 'aria-label': 'description' }} />
          <TextValidator placeholder="Last Name" onChange={handleChange} className={classes.inputStyles} inputProps={{ 'aria-label': 'description' }} />
          <TextValidator   validators={['required']} errorMessages={['this field is required']} placeholder="UserName" name="username" value={username} onChange={handleChange} className={classes.inputStyles} inputProps={{ 'aria-label': 'description' }} />
          <TextValidator validators={['required']} errorMessages={['this field is required']} placeholder="Password" name="password" type="password" value={password} onChange={handleChange} className={classes.inputStyles} inputProps={{ 'aria-label': 'description' }} />
          <TextValidator   validators={['required', 'isEmail']} errorMessages={['this field is required', 'email is not valid']}placeholder="Email" name="email" value={email} onChange={handleChange} className={classes.inputStyles} inputProps={{ 'aria-label': 'description' }} />
          <Button variant="contained"   type="submit" className={classes.submitBtn} color="primary" onClick={handleSubmit}>
            Create Account
          </Button>
          <p className={classes.altBtn} >Already have an account?<Button component={Link} to="/login" color="primary">Login</Button></p>
        </Box>
      </ValidatorForm>
      
    )};
    }
    
    export default Signup;