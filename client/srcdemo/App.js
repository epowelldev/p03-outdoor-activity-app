import React from "react";


import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Signup from './pages/Signup'




function App() {
  return (
    <div className="myApp">
       <Router>
        <div>
       
          <Switch>
            <Route exact path="/Dashboard" >
              <Dashboard />
            </Route>
            <Route exact path="/Login">
              <Login />
            </Route>
            <Route exact path="/signup">
              <Signup />
                    </Route>
            <Route >
              <Dashboard />
            </Route>
          </Switch>
        </div>
      </Router> 

   
  
    </div>
  );
}

export default App;