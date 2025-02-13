import React from 'react'

const Nav = () => {
  return (
    <>
      <nav className="flex justify-between items-center p-6 text-white">
        <h1 className="text-2xl font-bold">PANKAJ KUMAR</h1>
        <ul className="flex gap-6">
          <li><a href="#" className="hover:text-blue-400">Home</a></li>
          <li><a href="#projects" className="hover:text-blue-400">Projects</a></li>
          <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
        </ul>
      </nav>
    </>
  )
}

export default Nav