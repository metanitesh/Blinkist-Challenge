import React, { Component } from 'react';

class Book extends Component {

  constructor(props){
    super(props);
    this.state = {
      book:{}
    }
  }

  componentDidMount() {
    
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

  render() {

    return (
      <div>
        <h1>{this.state.book.title || 'loading...'}</h1>
        <p>{this.state.book.content}</p>
      </div>
    );
  }
}

export default Book;
