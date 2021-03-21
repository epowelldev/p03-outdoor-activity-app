/* eslint-disable import/no-anonymous-default-export */
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { Fragment } from 'react';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,    
  },
  menuButton: {
    // marginRight: theme.spacing(),
  },
  title: {
    flexGrow: 1,
  },
}));

export default () => {
  const classes = useStyles();

  return (
    <Fragment>
      <AppBar>
        <Toolbar>
          <ButtonGroup variant="text" color="inherit">
            <IconButton edge="start" aria-label="menu" className={classes.menuButton}>
              <MenuIcon />
            </IconButton>
            <Button href="/login">Login</Button>
            <Button href="/">Home</Button>
            <Button href="/events">Dashboard</Button>
            <IconButton edge="end" aria-label="logout">
              <ExitToAppIcon />
            </IconButton>
          </ButtonGroup>
        </Toolbar>
      </AppBar>
      <Toolbar/>
    </Fragment>
  );
}
