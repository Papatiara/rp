import React from 'react'
import Logo from '../rotten.png'
import Navbar_options  from './Navbar_options'

function Navbar() {
    return(
        <div className="header">
            <img className="logo" src={Logo}/>
            <input className="input" />
            <button className="btn"><i className="fa fa-search"></i></button>
            <Navbar_options />
        </div>
    )
}

export default Navbar;
