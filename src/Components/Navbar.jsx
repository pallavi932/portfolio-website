import React from 'react'

import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'
import { FaInstagram } from 'react-icons/fa'

const Navbar = () => {
  return (
   <nav className='mb-20 flex items-center justify-between py-6'>
    <div className="flex flex-shrink-0 items-center">
        
    </div>
    <div className="flex m-8 items-center justify-center gap-4 text-2xl ">
      <div className="flex space-x-4">
      <a
        href="https://www.linkedin.com/in/pallavi-mishra-69556a344/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <FaLinkedin size={24} />
      </a>
      <a
        href="https://github.com/pallavi932"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
      >
        <FaGithub size={24} />
      </a>
      <a
        href="https://instagram.com"  // Add your Instagram URL here if you want
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
      >
        <FaInstagram size={24} />
      </a>
    </div>
    </div>
   </nav>
  )
}

export default Navbar
