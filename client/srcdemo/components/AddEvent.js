import React, {useState} from 'react'
import EVENTS from '../utils/EVENT';


const AddEvent = () => {


    const [newEventState, setNewEvent] = useState({});
    const { name, address, date,time,description } = newEventState;

    // useEffect(() => {
    //     EVENTS.addEvent({ name: 'hikinggggggg', address: 'redmond', date:'2021-03-15',time:'12:57', description : "goooooooood"});

    // }, [addEvent]);

    function handleNewEvent(e) {
        e.preventDefault();
        setNewEvent({ ...newEventState, [e.target.name]: e.target.value })
        console.log(newEventState)
    }


    function addNewEvent(e) {
        e.preventDefault();
        EVENTS.addEvent(newEventState);
        setNewEvent({})

    }


    return (
        <div>
         
         <form action="/" onSubmit={addNewEvent}>
                <label htmlFor="name">activity name :</label>
                <input type="text" id="name" name="name" placeholder="avtivity Name" value={name} onChange={handleNewEvent}></input>
                <label htmlFor="address">address:</label>
                <input type="text" id="address" name="address" placeholder="address" value={address} onChange={handleNewEvent}></input>              
                <label htmlFor="date">date:</label>
                <input type="date" id="date" name="date" placeholder="date" value={date} onChange={handleNewEvent}></input>                
                <label htmlFor="time">time:</label>
                <input type="time" id="time" name="time" placeholder="time" value={time} onChange={handleNewEvent}></input>
                <label htmlFor="description">description:</label>
                <input type="description" id="description" name="description" placeholder="description" value={description} onChange={handleNewEvent}></input>
                <input type="submit" value="Submit"></input>

            </form>


        </div>
    )
}

export default AddEvent
