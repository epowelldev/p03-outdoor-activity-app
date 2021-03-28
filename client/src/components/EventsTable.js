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
import { Modal, Button, Box } from "@material-ui/core";


const columns = [
  { id: 'name', label: 'Name', minWidth: 170 },
  { id: 'address', label: 'Address', minWidth: 170 },
  { id: 'date', label: 'Date', minWidth: 170,  },
  { id: 'action', label:'Action', minWidth:100}
  ];

// function createData({name, address, date}) {
  
//   return { name, address, date };
// }
const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: "70%",
      height:"70%",
      backgroundColor: "#5C6D37",
      border: '2px solid black',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      top:"10%",
      left:"10%",
      margin:"auto",
      color:"white"
    },
    Mtitle:{
      fontSize:"4em",
      textAlign:"center",
      fontStyle:"bold"
    },
    DTstyle:{
      fontSize:"1.5em",
      display:"flex",
      flexDirection:"row",
      justifyContent:"space-around"
    },
    ImageStyle:{
        objectFit:"cover"
    },
    descStyle:{
      fontSize:"2em",
      textAlign:"center",
      margin:"2%",
      marginTop:"3%"
    },
    root: {
        width: '90%',
      },
      container: {
        maxHeight: 440,
      },
      btnStyle:{
        position:"absolute",
        bottom:"0",
        right:"40%",
        minWidth: 100,
        width:"20%",
        transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
        background:"white",
        margin:"1%",
        '&:hover': {
          background:"white",
          transform: 'scale(1.1)',
        },
        borderRadius: 50,
        color: "black",
        textTransform: 'none',
        fontSize: 15,
        fontWeight: 700,
        padding:9
     },
     ImgBoxStle:{
       width:"30%",
       height:"30%",
       marginLeft:"35%"
     }
  }));




export default function EventsTable({events}) {
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

  function joinEvent(eventId) {
    EVENT.joinEvent(eventId).then(window.location.replace("/Events"))

}

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  function eventInfo(eventId) {
    if(eventId){
    EVENT.eventInfo(eventId).then(res => {
        console.log(res.data)
        const event=res.data.eventInfo
        setCurrentEvent(event)
        setOpen(true);
    
    })
  }
}

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

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
      <Modal open={open} onClose={handleClose}>
        <Box className={classes.paper}>
          <h2 className={classes.Mtitle}>{currentEvent.name}</h2>
          <div className={classes.DTstyle}>
            <p>
              {currentEvent.address}
            </p>
            <p>
              {currentEvent.date}
            </p>
          </div>
          <div className={classes.descStyle}>
            <p>
              {currentEvent.description}
            </p>
          </div>
          <div className={classes.ImgBoxStle}>
            {currentEvent.image ?
            <img className={classes.ImageStyle} src={currentEvent.image.url} alt="event"/>
              : <p>no picture</p>
              }
              </div>
          <Button className={classes.btnStyle} onClick={() => joinEvent(currentEvent._id)}>join event</Button>
         
        </Box>
      </Modal>
    </Paper>

  );
  
}