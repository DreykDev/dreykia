//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from 'react';
import {Link} from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'

import '../style/navBar.css'

import { ButtonLogOut } from '../utilities/ButtonLogOut';
import { ButtonLogIn } from '../utilities/ButtonLogIn';



const NavBar = () => {

  const { isAuthenticated } = useAuth0();

  return (
    <nav className='navBarp'>

      <Link to="/" className='home-button'><p>Home</p></Link>

      <Link to="/locations" className='locations-icon'><label></label></Link>
      <Link to="/profile" className='profile-icon'><label>󰀄</label></Link>


      {isAuthenticated ? (
        <ButtonLogOut/>
      ):(
        <ButtonLogIn/>
      )}
    </nav>
  );
};

export default NavBar;