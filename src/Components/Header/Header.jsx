import { useState } from 'react';
import {KidMenu, MenMenu,WomenMenu,ProfileMenu} from "../../index"

import { 
  BellIcon, 
  MagnifyingGlassIcon, 
  UserCircleIcon,
  Bars3Icon,
  HeartIcon,
  ShoppingBagIcon
} from '@heroicons/react/24/outline'; // Using Heroicons for icons; install via npm i @heroicons/react


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = [
    { slug: '/',  name: 'MEN' , color:'hover:border-yellow-400' , menu:MenMenu},
    { slug: '/',  name: 'WOMEN' ,color:'hover:border-red-400',menu:WomenMenu},
    { slug: '/',  name: 'KID',color:'hover:border-blue-400',menu:KidMenu },
    { slug: '/',  name: 'HOME',color:'hover:border-green-400',menu:KidMenu },
    { slug: '/',  name: 'BEAUTY',color:'hover:border-green-400',menu:KidMenu },
    { slug: '/',  name: 'GENZ',color:'hover:border-green-400',menu:KidMenu },
    
  ];

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 px-4 lg:px-8 py-3 lg:py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0 w-13">
           <img src='https://cdn.iconscout.com/icon/free/png-512/free-myntra-icon-svg-download-png-2249158.png?f=webp&w=256'/>
        </div>

        {/* Left Navigation Menu */}
        <nav className="relative hidden md:flex space-x-1 lg:space-x-2 ml-8">
          {navItems.map((item)=>{
            const Menu = item.menu;
            return (
              <div key={item.color} className='group'>
              <a href={item.slug} className={`px-3  border-b-4 border-transparent ${item.color} transition-all duration-200 pb-7 text-sm font-semibold text-gray-700  transition-colors font-bold`}>{item.name} </a>
              <Menu/>
              </div>
            )
          })}
          
          <div className='group'>
             <a href="#" className="px-3 pb-10  text-sm font-semibold text-gray-700  transition-colors font-bold pr-0">STUDIO<sup><span className='p-1 text-red-500'><b>NEW</b></span></sup></a>
             <MenMenu/>
          </div>
        </nav>

        {/* Search Bar */}
        <div className="flex-1 max-w-md mx-4 hidden lg:flex">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none bg-gray-50 text-sm transition-all duration-200"
            />
            <MagnifyingGlassIcon className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>
        </div>

        {/* Right Icons */}
        <div className="relative flex items-center space-x-2 lg:space-x-3">
          
          <button className="p-2 text-gray-500 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all duration-200 relative">
            <HeartIcon className="w-5 h-5 lg:w-6 lg:h-6" />
            <span className="absolute -top-1 -right-1 block w-2.5 h-2.5 bg-red-500 rounded-full"></span>
          </button>
          <button className="p-2 text-gray-500 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all duration-200 relative">
            <ShoppingBagIcon className="w-5 h-5 lg:w-6 lg:h-6" />
            <span className="absolute -top-1 -right-1 block w-3 h-3 bg-red-500 rounded-full ring-2 ring-white text-xs text-white font-bold flex items-center justify-center">3</span>
          </button>
          <button className="group cursor-pointer p-2 text-gray-500 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all duration-200">
            <UserCircleIcon className="w-6 h-6 lg:w-7 lg:h-7" />
            <ProfileMenu/>
          </button>
          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-gray-500 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Bars3Icon className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu (simple dropdown for demo) */}
      {isMenuOpen && (
        <div className="md:hidden mt-2 pb-4 space-y-1 px-2">
          <a href="#" className="block px-3 py-2 text-sm font-semibold text-gray-700 hover:text-red-500 rounded-lg font-bold">Home</a>
          <a href="#" className="block px-3 py-2 text-sm font-semibold text-gray-700 hover:text-red-500 rounded-lg font-bold">About</a>
          <a href="#" className="block px-3 py-2 text-sm font-semibold text-gray-700 hover:text-red-500 rounded-lg font-bold">Services</a>
          <a href="#" className="block px-3 py-2 text-sm font-semibold text-gray-700 hover:text-red-500 rounded-lg font-bold">Portfolio</a>
          <a href="#" className="block px-3 py-2 text-sm font-semibold text-gray-700 hover:text-red-500 rounded-lg font-bold">Contact</a>
        </div>
      )}
    </header>
  );
};

export default Header;
