import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Home'
import List from './List'

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/invitations/:path">
            <List />
          </Route>
          <Route path="/invitations">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
