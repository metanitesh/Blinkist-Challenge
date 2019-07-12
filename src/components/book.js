import React from 'react';

function Book(props) {
 return (
  <div>
    <h1>Book</h1>
    <p>{props.match.params.id}</p>
  </div>
 )
}

export default Book;