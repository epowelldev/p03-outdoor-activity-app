import { makeStyles } from '@material-ui/core/styles';
import {Button, Input, Box} from '@material-ui/core';
import API from "../utils/API"
import { useEffect, useState } from 'react';
import { Redirect } from "react-router-dom";
import LoginPic from "../assets/loginPic.jpeg";

const useStyles=makeStyles({
  formStyles:{
    display:"flex",
    flexDirection:"column",
    width:"40%",
    marginLeft:"27%",
    marginTop:"17%",
    backgroundColor:"#5C6D37",
    color:"white",
    borderRadius:"25px",
    paddingTop:"7%",
    
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
 
});


function Login(){
  const classes = useStyles();


  const [loginState, setLoginState] = useState({ username: '', password: '' });
  const { username, password } = loginState;
  const [logOutState, setLogOutState] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
      API.logout();

  }, [logOutState]);



  function handleSubmit(e) {
      e.preventDefault()
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

          <Input placeholder="UserName" className={classes.inputStyles} name="username" value={username} onChange={handleChange} inputProps={{ 'aria-label': 'description' }} />
          <Input placeholder="Password" className={classes.inputStyles} name="password" value={password} onChange={handleChange} inputProps={{ 'aria-label': 'description' }} />
          <Button variant="contained" className={classes.inputStyles} color="primary">
              Login
          </Button>
          <p className={classes.altBtn}>Don't have an account?<Button href="/signup" color="primary">Signup</Button></p>

        </Box>

      </form>
    
    );
  }
}

export default Login;