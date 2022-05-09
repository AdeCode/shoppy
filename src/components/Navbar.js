import React from 'react'
import logo from '../images/logo.png'
import { Link, NavLink } from 'react-router-dom'
import {BsFillCartDashFill} from 'react-icons/bs'
import { FaSearch } from "react-icons/fa";

function Navbar() {
  return (
    <div className='navbar'>
        <div className='logo'>
            <img src={logo} alt='logo'/>
        </div>
        <ul>
            <li className='nav-link'>                
                <NavLink to='/' activestyle>Home</NavLink>
            </li>
            <li className='nav-link'>                
                <NavLink to='/pages' activestyle>Pages</NavLink>
            </li>
            <li className='nav-link'>                
                <NavLink to='/products' activestyle>Products</NavLink>
            </li>
            <li className='nav-link'>                
                <NavLink to='/blog' activestyle>Blog</NavLink>
            </li>       
            <li>
                <NavLink to='/cart' activestyle><BsFillCartDashFill/></NavLink>                
            </li>
            <li>
                <NavLink to='/search' activestyle><FaSearch/></NavLink>                                
            </li>     
        </ul>
    </div>
  )
}

export default Navbar