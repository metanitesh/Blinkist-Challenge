import React, { Component } from 'react';
import style from './home.module.css';
import Header from './header'

class Home extends Component {

  constructor(props){
    super(props);
    this.login = this.login.bind(this)
  }
  
  login(e){
    e.preventDefault();
    const url = 'https://ancient-springs-73658.herokuapp.com/auth';

    fetch(url, {
      method: 'POST'
    })
    .then((response) => response.json())
    .then((myJson) => {
      this.props.login(myJson.user_id);
      this.props.history.push('/library');
    })

  }

  render() {
    return (
      <>
      <Header pageName='Log in'/>
      <main className={style.main}>
        <form onSubmit={this.login}>
          <button className={style.button}>Login</button>
        </form>
      </main>
      </>
    );
  }
}

export default Home;
