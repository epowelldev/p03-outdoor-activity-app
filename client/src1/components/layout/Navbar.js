/* eslint-disable import/no-anonymous-default-export */
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from "@material-ui/core/styles";
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useState, useEffect, Fragment } from 'react';
import API from '../../utils/API';


const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#5C6D37",
  },
  title: {
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  typo: {

  },
}));

export default () => {
  const classes = useStyles();
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    API.getUser().then((response) => {
        if (response.data.username) {
            setLoggedIn(true);
        } else {
            setLoggedIn(false);
        }
    });
    return () => {
        setLoggedIn(false);
    };
}, []);

function logOut(e) {
  e.preventDefault();
  API.logout();
  setLoggedIn(false);
}

  return (
    <Fragment>
      <AppBar className={classes.root} >
        <Toolbar className={classes.toolbar}>
          <ButtonGroup variant="text" color="inherit">
            <Button size="large" component={Link} to="/">Join Us Outside</Button>
          </ButtonGroup>
          <ButtonGroup variant="text" color="inherit" >
            {/* <IconButton edge="start" aria-label="menu" className={classes.menuButton}>
              <MenuIcon />
            </IconButton> */}
            { !loggedIn ? <Button component={Link} to="/Login" >Login</Button> : [] }
            <Button component={Link} to="/">Home</Button>
            <Button component={Link} to="/events">Dashboard</Button>
            { loggedIn ? <IconButton edge="end" aria-label="logout" onClick={logOut}>
              <ExitToAppIcon />
            </IconButton> : [] }
          </ButtonGroup>
        </Toolbar>
      </AppBar>
      <Toolbar className={classes.toolbar} />
    </Fragment>
  );
}
