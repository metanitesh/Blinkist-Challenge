import React, { Component } from "react";
import { Link } from "react-router-dom";

class Library extends Component {
  constructor(props){
    super(props);
    this.state = {
      categories: [],
      books: []
    }
  }
  componentDidMount() {
    fetch("https://ancient-springs-73658.herokuapp.com/categories")
      .then((response) => {
        return response.json();
      })
      .then((myJson) =>{
        this.setState({
          categories: myJson.categories
        })
      });

      fetch("https://ancient-springs-73658.herokuapp.com/books")
      .then((response) => {
        return response.json();
      })
      .then((myJson) =>{
        this.setState({
          books: myJson.books
        })
      });
  }

  render() {
    const categoryListDom = this.state.categories.map((category) => {
      return <li key={category.id}>{category.title}</li>
    })

    const bookListDom = this.state.books.map((book) => {
      return <li key={book.id}>
      <img width= '80px' alt='bookImage' src={book.image_url} />
      <Link to= {`/book/${book.id}`}>{book.title}</Link>
      </li>
    })


    return (
      <div>
        <h1>Library Contents</h1>
        <h3>Categories</h3>
        <ul>{categoryListDom}</ul>
        <h3>Books</h3>
        <ul>{bookListDom}</ul>
        <p>
          <Link to="/book/1">book</Link>
        </p>
        
      </div>
    );
  }
}

export default Library;