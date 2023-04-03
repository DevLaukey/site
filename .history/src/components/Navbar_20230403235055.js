import Image from 'next/image'
import React from 'react'

const Navbar = () => {
    const [hidden, setHidden] = React.useState(true)
    return (
        <nav
            className="w-100 flex flex-wrap items-center my-5  justify-between md:mx-20 mx-5"
        >
            <div className="w-1/3">
                <Image height={100} width={100} src="./next.svg" alt="logo" />
            </div>

            {hidden ? <svg
                xmlns="http://www.w3.org/2000/svg"
                id="menu-button"
                class="h-6 w-6 cursor-pointer md:hidden block"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                onClick={() => { setHidden(!hidden) }}
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                />
            </svg>
                :
                <svg id="menu-button"
                    class="h-10 w-10 cursor-pointer md:hidden block"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    onClick={() => { setHidden(!hidden) }}
                    xmlns="http://www.w3.org/2000/svg">
                    <line x1="1" y1="11"
                        x2="11" y2="1"
                        stroke="black"
                        stroke-width="2" />
                    <line x1="1" y1="1"
                        x2="11" y2="11"
                        stroke="black"
                        stroke-width="2" />
                </svg>}

            <div class={hidden ? "hidden md:flex " : "" + "w-full md:flex items-center"} id="menu">
                <ul className="md:flex justify-center mt-6 sm:h-screen md:h-12 w-full ">
                    <li className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'>Home</li>
                    <li className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'>Studios</li>
                    <li className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'>Metaverse</li>
                    <li className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'>Academy</li>
                    <li className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'>About</li>
                    <li className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'>Contacts</li>
                </ul>
            </div>
        </nav>)
}

export default Navbar