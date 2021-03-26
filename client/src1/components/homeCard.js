import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 270,
    // minHeight:"auto",
    // height:"75vh",
    maxWidth:"75%",
    margin:"1%",
    // backgroundColor:"#B39180",
    color:"black",
    // marginTop:"5%",
    marginLeft:"4%",
    fontSize: '2rem',
    fontWeight: 800,
  },
  
  title: {
    fontSize: 14,
  },
 
 
});

export default function HomeCard() {
  const classes = useStyles();
  

  return (
    // <Card className={classes.root} >
    //   <CardContent>
        <Typography  className={classes.root} variant="h3"  >
          Explore the Outdoors with new Friends!
          
        </Typography>
    //   </CardContent>
    // </Card>
  );
}