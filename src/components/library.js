import React from 'react';
import {Link} from 'react-router-dom';

function Library(props) {
 return (
  <div>
    <h1>Library Content</h1>
    <p><Link to="/book/1">book</Link></p>
  </div>
 )
}

export default Library;