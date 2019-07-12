import React from 'react';
import {Link} from 'react-router-dom';

function Nav(props) {
 return (
   <ul> 
     <li><Link to="/">home</Link></li>
     <li><Link to="/library">Library</Link></li>
   </ul>
 );
}

export default Nav;