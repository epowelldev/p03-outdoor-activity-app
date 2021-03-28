import React, {useState, useContext} from 'react';
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
import { Modal, Button, Box, Input } from "@material-ui/core";
import UpdateContext from "../updateContext/update/updateContext";
import { useHistory } from "react-router-dom"





import newEventPic from "../assets/newEventPic.jpg";
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
  descStyle:{
    fontSize:"2em",
    textAlign:"center",
    margin:"2%",
    marginTop:"8%"
  },
  ImgBoxStle:{
    width:"30%",
    height:"30%",
    marginLeft:"35%"
  },
  ImageStyle:{
    objectFit:"cover"
},
  formStyles:{
    display:"flex",
    flexDirection:"column",
    width:"50%",
    
    marginLeft:"27%",
    marginTop:"10%",
    backgroundColor:"#5C6D37",
    color:"white",
    borderRadius:"25px",
    paddingTop:"7%",
    opacity:".90",
    flexBasis:"content"
  },
  inputStyles:{
    margin:"5%",
    color:"black",
    backgroundColor:"white"
  },
  ImgStyle:{
    backgroundImage:`url(${newEventPic})`,
    backgroundSize:"cover",
    backgroundPosition:"center",
    height:"100vh",
    width:"100vw",
    display:"flex",
    flexDirection:"column",
    justifyContent:"start",
    marginTop:"0",
    marginLeft:"0",
    margin:"0",
    padding:"0",
    
  
},
title:{
  fontFamily:"Sans-serif",
  textAlign:"center",
  marginBottom:"10%"
},
submitBtn:{
  
  minWidth: 150,
  width:200,
  alignSelf:"center",
  transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
  background:"white",
  margin:"5%",
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
  
  root: {
      width: '90%',
    },
    container: {
      maxHeight: 440,
    },
    btnStyle:{
      position:"absolute",
        bottom:"0",
        right:"15%",
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
   dualBtn:{
    position:"absolute",
      bottom:"0",
      right:"55%",
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
   }
  }));
  const columns = [
    { id: 'name', label: 'Name', minWidth: 170 },
    { id: 'address', label: 'Address', minWidth: 170 },
    { id: 'date', label: 'Date', minWidth: 170,  },
    { id: 'action', label:'Action', minWidth:100}
    ];


function CreatedEventsTable({events,userState}){
  let history = useHistory()
  const updateContext = useContext(UpdateContext);

  const classes = useStyles();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const rows = [];
  const [open, setOpen] = useState(false);
  const[currentEvent,setCurrentEvent]=useState({});
  const[updateVis,setUpdateVis]=useState(false)
  const [eventState, setEventState] = useState({ name: '',datetimeInput:'', address: '' , description:'',image:''});
  const[imageState,SetImageState]=useState({})
  const { name, address,description } = eventState;
  const setImage = event => {
       SetImageState({image: event.target.files[0]})
   }

  
  function handleChange(e) {
    e.preventDefault();
    
    setEventState({ ...eventState, [e.target.name]: e.target.value })
    
}

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


function deleteEvent(id) {
  EVENT.deleteEvent(id,userState._id )
  .then(window.location.replace("/Events"))
 console.log(id, userState._id )
}

const handleUpdate=()=>{

  updateContext.update(currentEvent)
  history.push("/update");
 }

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
            <Box  className={classes.paper}>
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
    <Button className={classes.dualBtn} onClick={handleUpdate} >Update event</Button>
    <Button className={classes.btnStyle} onClick={()=>deleteEvent(currentEvent._id)}>Delete event</Button>
  </Box>
      </Modal>
   
    </Paper>

  );
}

export default CreatedEventsTable;