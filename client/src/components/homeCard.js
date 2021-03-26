import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Box } from '@material-ui/core';

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
    background:"green",
    margin:"1%",
    '&:hover': {
      background:"green",
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
        <Button className={classes.btnStyle} href="/signup">Signup</Button>
        <Button className={classes.btnStyle} href="/events">Events</Button>
    </Box>
  );
}