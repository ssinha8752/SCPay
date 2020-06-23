import React from 'react';
import './App.css';
import Login from './components/Login';
import Header from './components/Header';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation';

const App=()=>{
  return (
    <BrowserRouter>
    <div>
    <Navigation/>
            <Switch>
             <Route path="/login" component={Login} exact/>
             <Route path="/welcome" component={Dashboard}/>
            <Route/>
           </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;

