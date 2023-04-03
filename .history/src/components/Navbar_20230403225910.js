import React from 'react'

const Navbar = () => {
  return (
      <nav
          className="w-100 flex flex-wrap items-center my-10 mx-20"
      >
          <div>
           
          </div>

          <svg
              xmlns="http://www.w3.org/2000/svg"
              id="menu-button"
              class="h-6 w-6 cursor-pointer md:hidden block"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
          >
              <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
              />
          </svg>

          <div class="hidden w-full md:flex md:items-center md:w-auto" id="menu">
              <ul className="md:flex space-x-6 justify-start hidden ">
                  <li>Home</li>
                  <li>Studios</li>
                  <li>Metaverse</li>
                  <li>Academy</li>
                  <li>About</li>
                  <li>Contacts</li>
              </ul>
          </div>
      </nav>  )
}

export default Navbar