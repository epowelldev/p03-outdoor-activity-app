import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 15,
    minHeight:25,
    margin:"1%",
    height:150,
    width:240,
    backgroundColor:"#5C6D37",
    color:"white"
  },
  
  title: {
    fontSize: 14,
  },
  
});

export default function HomeSignupCard() {
  const classes = useStyles();
  

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} >
          Create an account to Post and Join Events!
        </Typography>
      </CardContent>
      <CardActions>
      <Button variant="outlined" href="/signup"size="large" color="primary" className={classes.margin}>
          Signup
        </Button>
      </CardActions>
    </Card>
  );
}