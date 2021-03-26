import React, {useState} from 'react'
import EVENTS from '../utils/EVENT';


const AddEvent = () => {

    const [newEventState, setNewEvent] = useState({});
    const { name, address, date,time,description } = newEventState;

    const[imageState,SetImageState]=useState({})

   const setImage = event => {
        SetImageState({image: event.target.files[0]})
    }

    function handleNewEvent(e) {
        e.preventDefault();

        setNewEvent({ ...newEventState, [e.target.name]: e.target.value  })
   
        console.log(newEventState)
       
    }

    let formData = new FormData();
    formData.append("name", name);
    formData.append("address", address);
    formData.append("date", date);
    formData.append("time", time);
    formData.append("description", description);
    formData.append("image", imageState.image);



    function addNewEvent(e) {
        e.preventDefault();
        EVENTS.addEvent(formData)
        .then(window.location.replace("/Events")) ;
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
                <input type="file" name="image" onChange={setImage} ></input>
                <input type="submit" value="Submit"></input>

            </form>


        </div>
    )
}

export default AddEvent
