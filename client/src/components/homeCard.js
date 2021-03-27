import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Box, Link } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth:"75%",
    margin:"1%",
    color:"white",
    fontSize: "2.5em",
    fontWeight: 800,
  },
  btnStyle:{
    minWidth: 200,
    transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
    background:"#5C6D37",
    margin:"1%",
    '&:hover': {
      background:"#5C6D37",
      transform: 'scale(1.1)',
    },
    borderRadius: 50,
    color: "white",
    textTransform: 'none',
    fontSize: 15,
    fontWeight: 700,
    padding:9
 }
});

export default function HomeCard() {
  const classes = useStyles();

  return (
    <Box>
        <Typography  className={classes.root} variant="h4"  >
          Explore the Outdoors with new Friends!
        </Typography>
        <Button className={classes.btnStyle} component={Link} to="/Signup">Signup</Button>
        <Button className={classes.btnStyle} component={Link} to="/Events">Events</Button>
    </Box>
  );
}