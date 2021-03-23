import React from 'react';
import {NavLink} from "react-router-dom";

class Topmenu extends React.Component{
    render(){
        return(
<>
<div className="scrollmenu">
<NavLink to="/" className="main-nav-logo">
<img className="main-nav-logo-image" src="./img/Logo.png" alt="Sports-Logo"/></NavLink>
  <a href="#home">Home</a>
  <a href="#profile">Profile</a>
  <a href="#settings">Settings</a>
  <a href="#community">Community</a>
</div>
</>
        )
    }
}

export  default Topmenu;

