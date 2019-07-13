import React, { Component } from 'react';
import Header from './header'
import style from './book.module.css'

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
      <Header pageName="Discover Books"/>
      <button className='logout' onClick={this.logout}> logout </button>
      <main className={style.container}>
        <h1 className={style.heading}>{this.state.book.title || 'loading...'}</h1>
        <p className={style.paragraph}>{this.state.book.content}</p>
      </main>
      </>
    );
  }
}

export default Book;
