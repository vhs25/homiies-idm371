import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

import Welcome from './components/Welcome';
import Home from './components/Home';
import Tasks from './components/Tasks';
import Payment from './components/Payment';
import Notifications from './components/Notifications';
import Error from './components/Error';
import Navigation from './components/Navigation';
 
class App extends Component {
  render() {
    return (      
       <BrowserRouter>
        <div>
          <Navigation />
            <Switch>
            <Route path="/welcome" component={Welcome}/>
             <Route path="/home" component={Home}/>
             <Route path="/tasks" component={Tasks}/>
             <Route path="/payment" component={Payment}/>
             <Route path="/notifications" component={Notifications}/>
            <Route component={Error}/>
           </Switch>
        </div> 
      </BrowserRouter>
    );
  }
}
 
export default App;