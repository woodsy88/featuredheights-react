import React from 'react';
import { Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Default from './components/Default';
import NavBar from './components/NavBar';
import './App.css';

function App() {
  return (
      <React.Fragment>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route component={Default} />
        </Switch>
      </React.Fragment>
  );
}

export default App;
