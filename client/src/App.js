import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import NotFound from "./components/pages/NotFound";
import Navbar from "./components/layout/Navbar";
import {Container} from "@material-ui/core";
import CreateEvent from "./components/pages/CreateEvent";

import './App.css';
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  return (
    <Router>
      <Container>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/CreateEvent" component={CreateEvent} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/Signup" component={Signup} />
          <Route component={NotFound} />
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
