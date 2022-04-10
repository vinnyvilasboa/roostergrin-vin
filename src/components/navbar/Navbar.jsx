import React from 'react'
import './NavbarStyles.css'
import {FaBars, FaTimes} from 'react-icons/fa'
import {BsLinkedin} from 'react-icons/bs'
import {GiRooster} from 'react-icons/gi'

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="container">
            <div className="logo">
                <h3>
                    RoosterGrin by Vin
                </h3>
            </div>
            <ul className="nav-menu">
                <li><a href="/"></a> About </li>
                <li><a href="/"></a> Details </li>
                <li><a href="/"></a> Principles </li>
                <li><a href="/"></a> Team </li>
                <li><a href="/"></a> Reviews </li>

                <div className="mobile-menu">
                <button>Shop</button>
                <button>Account</button>
                    <div className="social-icons"></div>
                    <BsLinkedin/>
                    <GiRooster />
                </div>
            </ul>

            <ul className="nav-menu hide" >
                <li><a href="/">Shop</a></li>
                <li><a href="/">Account</a></li>
               
            </ul>
            <div className="hamburger">
                <FaBars/>
            </div>
        </div>
    </div>
  )
}

export default Navbar