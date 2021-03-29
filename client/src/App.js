import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import NotFound from "./components/pages/NotFound";
import {Container} from "@material-ui/core";


import './App.css';
import LoginPage from "./components/pages/LoginPage";
import NewEvent from "./components/NewEvent";

import EventsPage from "./components/pages/EventsPage";
import SignupPage from "./components/pages/SignupPage";
import UpdatePage from "./components/pages/UpdatePage"
import UpdateState from '../src/updateContext/update/UpdateState'
import EventsState from '../src/EventsContext/Events/EventsSate'


function App() {
  return (
    <UpdateState>
      <EventsState>
    <Container maxWidth={false} disableGutters={true}>
      <Router> 
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Login" component={LoginPage} />
          <Route exact path="/Signup" component={SignupPage} />
          <Route exact path="/NewEvent" component={NewEvent} />
          <Route exact path="/Events" component={EventsPage} />
          <Route exact path="/update" component={UpdatePage} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </Container>
    </EventsState>
    </UpdateState>
    
  );
}

export default App;
