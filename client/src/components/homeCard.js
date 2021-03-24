import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 270,
    height:310,
    maxWidth:"75%",
    margin:"1%"
  },
  
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function HomeCard() {
  const classes = useStyles();
  

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography variant="body1" component="p">
          JUO is desgined to foster the outdoor recreation community. Whether you are an experienced adventurer or just looking
          to enjoy the outdoors you can find activities that suit you. Our goal is to provide a space for people to connect
          and enjoy to the great outdoors together. Find new friends, explore new places and Join Us Outside!
          
        </Typography>
      </CardContent>
    </Card>
  );
}