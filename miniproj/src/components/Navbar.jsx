import {Link} from 'react-router-dom';
import Pdf from '../assets/Leeann_D_Resume.pdf'
import React from 'react'

const Navbar = () => {
  return (
    <>
    <div className="navbar bg-black text-white px-4">
      <div className="flex-1">
        <Link to="/" className="text-xl font-bold hover:text-blue-300">
          Home
        </Link>
      </div>

      <div className="hidden lg:flex space-x-4">
        <Link to="/About" className="hover:text-blue-300">
          About
        </Link>
        <a href= {Pdf} target="_blank" rel="noopener noreferrer" className="hover:text-blue-300">
          Resume
        </a>
        <Link to="/Insp" className="hover:text-blue-300">
          Inspiration
        </Link>
      </div>
      </div>
      </>
    );
}

export default Navbar
