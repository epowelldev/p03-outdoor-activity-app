import { Fragment } from "react";
import Events from "../Events"
import Navbar from "../layout/Navbar"
function EventsPage(){

    return(
    <Fragment>
        <Navbar/>
        <Events/>
    </Fragment>
    );
}


export default EventsPage;