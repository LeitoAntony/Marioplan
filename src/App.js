import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import ProjectDetails from './components/proyects/ProyectDetail';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import CreateProject from './components/proyects/CreateProyect';
import Page404 from './components/layout/page404';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Dashboard}/>
          <Route path="/project/:id" component={ProjectDetails} />
          <Route path="/signin" component={SignIn} /> 
          <Route path="/signup" component={SignUp} /> 
          <Route path="/createproject" component={CreateProject} />
          <Route component={Page404} />
        </Switch>
      </div>
      </BrowserRouter>
    );
  }
} 

export default App;
