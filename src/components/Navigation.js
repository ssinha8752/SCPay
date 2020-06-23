import React from 'react';
 
import { NavLink } from 'react-router-dom';
 
const Navigation = () => {
    return (
       <div>
          <NavLink to="/">Header</NavLink>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/footer">Footer</NavLink>
       </div>
    );
}
 
export default Navigation;