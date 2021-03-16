/* eslint-disable import/no-anonymous-default-export */
import { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { Box, Button, Container } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
// import FilledInput from '@material-ui/core/FilledInput';
import FormControl from '@material-ui/core/FormControl';
// import FormHelperText from '@material-ui/core/FormHelperText';
// import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
// import OutlinedInput from '@material-ui/core/OutlinedInput';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default () => {

  const [eventName, setEventName] = useState('');
  const classes = useStyles();

  const handleChange = (event) => {
    setEventName(event.target.value);
  };

  return(
    <Container>
      <Box>
        <h1>Create an Event!</h1>
        <form className={classes.root}>
          <FormControl variant="outlined">
            <InputLabel htmlFor="component-simple"></InputLabel>
            <TextField id="event-name" variant="outlined" label="Event Name" value={eventName} onChange={handleChange} />
          </FormControl><br/>
          <TextField id="event-address" variant="outlined" label="Address" /><br/>
          <TextField id="event-datetime" variant="outlined" label="Event Date & Time" type="datetime-local" InputLabelProps={{shrink:true}} /><br/>
          <TextField id="event-name" multiline variant="outlined" label="Event Description" rows={4}/><br/>
          <TextField id="event-orgainizer" variant="outlined" label="Event Organizer"/><br/>
          <Button variant="contained" color="primary">Create Event</Button>
        </form>
      </Box>
    </Container>
  );
}
