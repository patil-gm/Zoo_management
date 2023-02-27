import React, {Component,useState} from 'react';
import {HashRouter as Router, Switch, Route, Navigate} from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom';
import Login from './componets/logincomp/login';
import Signup from './componets/logincomp/signup'
import Dashboard from './componets/dashboardcomp/dashboard';
import Animal from './componets/animalsDcomp/animals';
import Manageticket from './componets/ticketcomp/manageticket';
import Bookticket from './componets/ticketcomp/bookticket';
import Searchticket from './componets/ticketcomp/searchticket';
import Getreport from './componets/reportcomp/getreport';
import Holidays from './componets/holidaycomp/holidays'
import Error from  './componets/error'
import Footer from './componets/footercomp/footer';
export default class App extends Component {
  constructor() {
    super();
}

componentDidMount() {
    console.log(window.innerHeight,"  ",window.innerWidth);
}
  render() {
    return (
      <div>
            <Router basename='/'>
              <Switch>
                    <Route path='/animal'  component={Animal}/>
                    <Route path='/signup'  component={Signup}/>
                    <Route path='/dashboard'  component={Dashboard}/>
                    <Route path='/animal'  component={Animal}/>
                    <Route path='/manageticket' component={Manageticket}/>
                    <Route path='/bookticket' component={Bookticket}/>
                    <Route path='/search' component={Searchticket}/>
                    <Route path='/report' component={Getreport}/>
                    <Route path='/holidays' component={Holidays}/>
                    <Route path='/'  component={Login}/>
                    <Route path=''  component={Error}/>
                </Switch> 
            </Router>
            <Footer/>
      </div>
    )
  }
}
