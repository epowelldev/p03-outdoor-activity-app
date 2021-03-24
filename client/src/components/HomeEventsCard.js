import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 270,
    margin:"1%",
    maxHeight:200,
    minHeight:150
  },
  
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function HomeEventsCard() {
  const classes = useStyles();
  

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} gutterBottom>
          Find events in your area!
        </Typography>
      </CardContent>
      <CardActions>
      <Button variant="outlined" size="large" color="primary" className={classes.margin}>
          View Events
        </Button>
      </CardActions>
    </Card>
  );
}