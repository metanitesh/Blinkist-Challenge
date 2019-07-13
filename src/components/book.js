import React, { Component } from 'react';

class Book extends Component {
  _isRedirect = false;

  constructor(props){
    super(props);
    this.state = {
      book:{}
    }
    this.logout = this.logout.bind(this);
  }

  componentWillMount(){
    if(!this.props.authStatus){
      this.props.history.push('/')
      this._isRedirect = true;
    }
  }

  componentDidMount() {
    if(!this._isRedirect){
    fetch(`https://ancient-springs-73658.herokuapp.com/books/${this.props.match.params.id}`)
      .then((response) => {
        return response.json();
      })
      .then((myJson) =>{
        this.setState({
          book: myJson
        })
      });
    }
  }

  logout(){
    this.props.logout();
    this.props.history.push('/')   
  }

  render() {

    return (
      <>
      <button onClick={this.logout}> logout </button>
      <div>
        <h1>{this.state.book.title || 'loading...'}</h1>
        <p>{this.state.book.content}</p>
      </div>
      </>
    );
  }
}

export default Book;
