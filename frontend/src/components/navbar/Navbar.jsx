import React from 'react'
import { RiMenuLine, RiCloseLine } from 'react-icons/ri'
import logo from '../../assets/logo.svg'
import './Navbar.css'

const Navbar = () => {
  return (
    <div
      className='gpt3__navbar'
    >
        <div
          className='gpt3__navbar-links'
        >
          <div 
            className="gpt3__navbar-links_logo"
          >
            <img 
              src={logo} 
              alt="logo"
            />
          </div>
        </div>
    </div>
  )
}

export default Navbar