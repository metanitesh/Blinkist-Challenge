import React, { Component } from 'react';

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
      console.log(this);
      console.log(myJson);
      console.log(this);
      this.props.login(myJson.user_id);
    })

  }

  render() {
    return (
      <div>
        <form onSubmit={this.login}>
          <button>Login</button>
        </form>
      </div>
    );
  }
}

export default Home;
