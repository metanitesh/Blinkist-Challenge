import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import Nav from './components/nav';
import Home from './components/home';
import Library from './components/library';
import Book from './components/book';

class App extends Component {

  constructor(props){
    super(props);
    this.state ={
      authenticated : true,
      userId: null,
      accessType:'free'
    }

    this.login = this.login.bind(this)
    this.logout = this.logout.bind(this)
  }


  login(userId){
    this.setState({
      authenticated : true,
      userId : userId,
      accessType:'free'
    })
  }

  logout(){
    this.setState({
      authenticated: false,
      userId : null,
      accessType:'free'
    })
  }

  render() {
    return (
      <React.Fragment>
        {/* <Nav /> */}
        <Switch>
          <Route exact path="/" render={(props) => <Home {...props} authStatus={this.state.authenticated} login={this.login}/>} />
          <Route exact path="/library" render={(props) => <Library {...props} logout={this.logout} authStatus={this.state.authenticated}/>}/>
          <Route exact path="/book/:id" render={(props) => <Book {...props} logout={this.logout} authStatus={this.state.authenticated}/>}/>
        </Switch>

      </React.Fragment>      
    )
  }
}

export default App;
