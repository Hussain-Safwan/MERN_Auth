import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Register from './components/pages/Register'
import Login from './components/pages/Login'
import Land from './components/pages/Land'

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
          <Land />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
