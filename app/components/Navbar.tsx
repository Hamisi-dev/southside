"use client"

import React, { useState } from 'react';
import { LiaShoppingBagSolid } from "react-icons/lia";
import { HiMenu, HiX } from "react-icons/hi";
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Categories', href: '/categories' },
    { name: 'Products', href: '/products' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='w-full h-20 bg-white'>
      <div className='md:max-w-[1024px] max-w-[600px] px-4 md:px-0 m-auto w-full h-full flex justify-between items-center'>
        
        {/* Logo - Left Side */}
        <Link href="/">
          <Image 
            src="/logo.svg" 
            alt="Southside Logo"
            width={50} 
            height={10}
            className="object-contain cursor-pointer"
          />
        </Link>

        {/* Desktop Navigation - Right Side */}
        <div className='hidden md:flex items-center space-x-8'>
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className='text-gray-700 hover:text-gray-900 transition-colors'
            >
              {link.name}
            </a>
          ))}
          
          {/* Desktop Cart */}
          <div className='relative'>
            <LiaShoppingBagSolid className='text-3xl'/>
            <span className='absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center'>0</span>
          </div>
        </div>

        {/* Mobile Menu Button - Right Side */}
        <div className='md:hidden'>
          <button 
            onClick={toggleMenu}
            className='text-2xl'
          >
            {isMenuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className='md:hidden bg-white'>
          <div className='px-4 py-4 space-y-4'>
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                className='block text-gray-700 hover:text-gray-900 transition-colors'
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            
            {/* Mobile Cart with Badge */}
            <div className='flex items-center space-x-2 pt-4'>
              <div className='relative'>
                <LiaShoppingBagSolid className='text-2xl'/>
                <span className='absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center'>0</span>
              </div>
              <span className='text-gray-700'>Cart</span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Navbar