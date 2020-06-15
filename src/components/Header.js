import React from 'react';
import '../styles/styles.css';

const Header=()=>{
    return (
        <nav className="zone grey sticky">
                    <ul className="main-nav">
                        <li className="heading"><a href="#welcome"><strong>Welcome to SCPay</strong></a></li>
                        <li className="nav-item"><a  href="#About">About</a></li>
                        <li className="nav-item"><a  href="#Contact">Contact</a></li>
                        <li className="nav-item"><a  href="#Team">Team</a></li>
                    </ul>
        </nav>
    )

}

export default Header;