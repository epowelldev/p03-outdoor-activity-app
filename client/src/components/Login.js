import { makeStyles } from '@material-ui/core/styles';
import {Button, Input, Box} from '@material-ui/core';
import API from "../utils/API"
import { useState } from 'react';
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";


const useStyles=makeStyles({
  formStyles:{
    display:"flex",
    flexDirection:"column",
    width:"50%",
    height:"60vh",
    justifyContent:"space-around",
    marginLeft:"27%",
    marginTop:"13%",
    alignSelf:"center",
    backgroundColor:"#5C6D37",
    color:"white",
    borderRadius:"25px",
    paddingTop:"7%",
    opacity:".90"
  },
  inputStyles:{
    // margin:"30px",
    color:"black",
    backgroundColor:"white",
    width:"75%",
    alignSelf:"center"
  },
  altBtn:{
    fontFamily:"Sans-serif",
    // marginLeft:"22%",
    textAlign:"center"
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
      // margin:"5%",
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
  const classes = useStyles();

  const [loginState, setLoginState] = useState({ username: '', password: '' });
  const { username, password } = loginState;
  const [loggedIn, setLoggedIn] = useState(false);

  


  function handleSubmit(e) {
      e.preventDefault()
      API.login(username, password).then((res) => {
          setLoginState({ username: '', email: '', password: '' })
          setLoggedIn(true)
      })
  }


  function handleChange(e) {
      e.preventDefault();
      setLoginState({ ...loginState, [e.target.name]: e.target.value })
  }




if(loggedIn){
  return <Redirect to={{ pathname: "/Events" }} />;
} else{
    return(
      <form onSubmit={handleSubmit}  > 
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
