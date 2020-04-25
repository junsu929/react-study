import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter, Route
} from 'react-router-dom';
import Navigation from './component/Navigation';
import Main from './routes/Main';
import User from './routes/User';
/*
import Paper from '@material-ui/core/Paper';
import Customer from './component/Customer';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root:{
    width: '100%',
    marginTop : theme.spacing.unit * 3
  },
  table:{
    minWidth : 1080
  }
})
*/


class App extends Component{

  render(){
    return(
      <BrowserRouter>
        <Navigation />
        <Route path="/" exact={true} component={Main} />
        <Route path="/user" component={User} />
      </BrowserRouter>
    );
  }
}

export default App;
