import React from "react";
import logo from "../logo.png"
function Header() {
    return (<header>
         <img id="logo" src={logo} alt="IT Step University"/>
        <ul className="header_ul">
        
       
            <li><a href="/">Home</a></li>
            <li><a href="/">Contacts</a></li>
            <li><a href="/">About</a></li>
        </ul></header>

    )
}

export default Header