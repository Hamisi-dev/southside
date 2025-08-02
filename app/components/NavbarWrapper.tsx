"use client"

import { usePathname } from 'next/navigation'
import Navbar from './Navbar';

export default function NavbarWrapper() {
  const pathname = usePathname()
  
  // Hide navbar in studio
  if (pathname.startsWith('/studio')) {
    return null
  }
  
  return <Navbar />
} 