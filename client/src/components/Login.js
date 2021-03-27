import { makeStyles } from '@material-ui/core/styles';
import {Button, Input, Box} from '@material-ui/core';
import API from "../utils/API"
import { useEffect, useState } from 'react';
import { Redirect } from "react-router-dom";
import LoginPic from "../assets/loginPic.jpeg";
import { Link } from "react-router-dom";


const useSStyles=makeStyles({
  root:{
    margin:"0"
  },
  formStyles:{
    display:"flex",
    flexDirection:"column",
    width:"40%",
    justifyContent:"space-evenly",
    marginLeft:"27%",
    marginTop:"13%",
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
    // marginLeft:"30%"
    textAlign:"center"
  },
  submitBtn:{
    
      minWidth: 90,
      width:100,
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


function Login(){
  const classes = useSStyles();


  const [loginState, setLoginState] = useState({ username: '', password: '' });
  const { username, password } = loginState;
  const [logOutState, setLogOutState] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  // useEffect(() => {
  //     API.logout();

  // }, [logOutState]);



  function handleSubmit(e) {
      e.preventDefault()
      console.log("hit")
      API.login(username, password).then((res) => {
          console.log(res.data)
          setLoginState({ username: '', email: '', password: '' })
       setLoggedIn(true)
      })
      console.log(loginState)
  }


  function handleChange(e) {
      e.preventDefault();
      setLoginState({ ...loginState, [e.target.name]: e.target.value })
      console.log(loginState)
  }




if(loggedIn){
  return <Redirect to={{ pathname: "/Events" }} />;
} else{
    return(
      
      <form onSubmit={handleSubmit} > 
      
        <Box className={classes.formStyles}>
          <h2 className={classes.title}>Join us Outside</h2>
          <Input placeholder="UserName" className={classes.inputStyles} name="username" value={username} onChange={handleChange} inputProps={{ 'aria-label': 'description' }} />
          <Input placeholder="Password" className={classes.inputStyles} type="password" name="password" value={password} onChange={handleChange} inputProps={{ 'aria-label': 'description' }} />
          <Button variant="contained" className={classes.submitBtn} color="primary" onClick={handleSubmit}>
              Login
          </Button>
          <p className={classes.altBtn}>Don't have an account?<Button component={Link} to="/signup" color="primary">Signup</Button></p>

        </Box>

      </form>
    
    );
  }
}

export default Login;