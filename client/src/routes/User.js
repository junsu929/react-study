import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Customer from './Customer';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';


class User extends Component{

    state = {
        customers: ""
    }

    callApi = async () =>{
        const response = await fetch('/user');
        const body = await response.json();
        return body;
    }

    componentDidMount(){
        this.callApi()
        .then(res => this.setState({customers : res}))
        .catch(err => console.log(err));
    }

    render(){
        return(
            <Paper>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>번호</TableCell>
                  <TableCell>이미지</TableCell>
                  <TableCell>이름</TableCell>
                  <TableCell>생년월일</TableCell>
                  <TableCell>성별</TableCell>
                  <TableCell>직업</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
              { 
            this.state.customers ? this.state.customers.map(c => {
              return(
                <Customer 
                  key = {c.id}
                  id = {c.id}
                  image = {c.image}
                  name = {c.name}
                  birthday = {c.birthday}
                  gender = {c.gender}
                  job = {c.job}
                />
              );
            }): ""}
              </TableBody>
            </Table>
          </Paper>
        );
    }
}

export default User;