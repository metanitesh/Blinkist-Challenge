import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";

class Library extends Component {
  _isRedirect = false;

  constructor(props){
    super(props);
    this.state = {
      categories: [],
      books: [],
      selectedCategory: false
    }
  }

  componentWillMount(){
    if(!this.props.authStatus){
      this.props.history.push('/')
      this._isRedirect = true;
    }
  }

  componentDidMount() {
    if(!this._isRedirect){
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
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  setCategory(categoryId){
    this.setState({
      selectedCategory: categoryId
    })
  }

  render() {

      // if (this.props.authStatus === false) {
      //   return <Redirect to='/home' />
      // }



    const categoryListDom = this.state.categories.map((category) => {
      return <li key={category.id} onClick={() => { this.setCategory(category.id) }}>{category.title}</li>
    })

    const bookListDom = this.state
    .books
    .filter((book) => {
      if(this.state.selectedCategory){
        return book.category_id === this.state.selectedCategory
      }else{
        return true
      }
    })
    .map((book) => {
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