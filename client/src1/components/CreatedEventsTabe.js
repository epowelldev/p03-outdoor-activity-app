import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import EVENT from "../utils/EVENT"
import { Modal, Button } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      top:'50',
      left:'50'
    },
    root: {
        width: '90%',
      },
      container: {
        maxHeight: 440,
      },
  }));
  const columns = [
    { id: 'name', label: 'Name', minWidth: 170 },
    { id: 'address', label: 'Address', minWidth: 170 },
    { id: 'date', label: 'Date', minWidth: 170,  },
    { id: 'action', label:'Action', minWidth:100}
    ];


function CreatedEventsTable({events}){
    const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const rows = [];
  const [open, setOpen] = React.useState(false);
  const[currentEvent,setCurrentEvent]=React.useState({});

  const handleOpen = () => {
    setOpen(true);
    
  };

  const handleClose = () => {
    setOpen(false);
  };

  for(let i=0;i<events.length;i++){
      
    // eslint-disable-next-line no-unused-expressions
    rows.push({...events[i],action:<Button type="button" onClick={()=>{eventInfo(events[i]._id)}}>View</Button>})
}
const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  function eventInfo(eventId) {
    EVENT.eventInfo(eventId).then(res => {
        console.log(res.data)
        const event=res.data.eventInfo
        setCurrentEvent(event)
        
        setOpen(true);
       
    })
}

const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

//   function updateEvent(e) {
//     e.preventDefault()

//     EVENT.updateEvent(show.updateEventInfo._id, updateEventState).then(res => {
//         console.log(res.data)
//     })       
//     .then(window.location.replace("/Events"))         

// }
  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
      <Modal open={open}
        onClose={handleClose}>
            <div  className={classes.paper}>
    <h2 id="simple-modal-title">{currentEvent.name}</h2>
    <p id="simple-modal-description">
      {currentEvent.address}
    </p>
    <p id="simple-modal-description">
      {currentEvent.date}
    </p>
    <p id="simple-modal-description">
      {currentEvent.description}
    </p>
    <button>Update event</button>
    {/* onClick={() => joinEvent(currentEvent._id)} */}
  </div>
      </Modal>
    </Paper>

  );
}

export default CreatedEventsTable;