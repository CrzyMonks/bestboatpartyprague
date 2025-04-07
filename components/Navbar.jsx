'use client';

import Image from "next/image";
import Link from "next/link";
// import { Button } from "@/components/ui/button";
import { useState, useEffect } from 'react';
// import { Ticket } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { GTMButton } from "@/components/GTMButton";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle menu overflow
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full px-4 py-4 flex items-center justify-between z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/80 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}>
        {/* Logo */}
        <Link href="/" className="flex items-center w-[180px]">
          <Image
            src="/images/logo.png"
            alt="Prague Party Cruise"
            width={180}
            height={40}
            className={`h-12 w-auto transition-all duration-300 ${
              isScrolled ? 'h-10' : 'h-12'
            }`}
            priority
          />
        </Link>

        {/* Navigation Links - Centered with equal spacing */}
        <div className="hidden md:flex items-center justify-center gap-12 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Link 
            href="/" 
            className={`text-base text-white hover:text-gray-200 font-medium relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-[#ff5f00] after:transition-all hover:after:w-full ${
              isScrolled ? 'py-1' : 'py-2'
            }`}
          >
            Home
          </Link>
          <Link 
            href="/faq" 
            className={`text-base text-white hover:text-gray-200 font-medium relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-[#ff5f00] after:transition-all hover:after:w-full ${
              isScrolled ? 'py-1' : 'py-2'
            }`}
          >
            FAQs
          </Link>
          <Link 
            href="/discounts" 
            className={`text-base text-white hover:text-gray-200 font-medium relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-[#ff5f00] after:transition-all hover:after:w-full ${
              isScrolled ? 'py-1' : 'py-2'
            }`}
          >
            Discounts
          </Link>
          <Link 
            href="/contact" 
            className={`text-base text-white hover:text-gray-200 font-medium relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-[#ff5f00] after:transition-all hover:after:w-full ${
              isScrolled ? 'py-1' : 'py-2'
            }`}
          >
            Contact Us
          </Link>
        </div>

        {/* Book Now Button - Right Side */}
        <div className="w-[160px] flex justify-end">
          <GTMButton
            href="https://connect.boomevents.org/cs/organizer/2e24ee9e-6ef3-428b-a037-a5efabf8f07f"
            className={`hidden md:flex bg-[#db8a74] hover:bg-[#db8a74]/90 text-white rounded-full px-6 font-medium items-center gap-2 text-base transition-all duration-300 ${
              isScrolled ? 'py-3' : 'py-4'
            }`}
            clickId="navbar_book_now"
            buttonId="navbar-button"
          >
            {/* <Ticket className={`transition-all duration-300 ${
              isScrolled ? 'w-4 h-4' : 'w-5 h-5'
            }`} /> */}
            Book Now
          </GTMButton>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-black/80 backdrop-blur-sm">
          <div className="relative flex flex-col items-center justify-center h-full gap-6 px-4">
            <button 
              className="absolute top-4 right-4 text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Mobile Menu Links */}
            <Link 
              href="/" 
              className={`text-2xl font-medium ${pathname === '/' ? 'text-[#FF5F00]' : 'text-white hover:text-gray-200'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/faq" 
              className={`text-2xl font-medium ${pathname === '/faq' ? 'text-[#FF5F00]' : 'text-white hover:text-gray-200'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              FAQs
            </Link>
            <Link 
              href="/discounts" 
              className={`text-2xl font-medium ${pathname === '/discounts' ? 'text-[#FF5F00]' : 'text-white hover:text-gray-200'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Discounts
            </Link>
            <Link 
              href="/contact" 
              className={`text-2xl font-medium ${pathname === '/contact' ? 'text-[#FF5F00]' : 'text-white hover:text-gray-200'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
            <GTMButton
              href="https://connect.boomevents.org/cs/organizer/2e24ee9e-6ef3-428b-a037-a5efabf8f07f"
              className="bg-[#db8a74] hover:bg-[#db8a74]/90 text-white rounded-full px-4 py-4 text-base w-full max-w-[160px] flex items-center justify-center gap-2"
              clickId="navbar_book_now"
              buttonId="navbar-button"
            >
              {/* <Ticket className="w-4 h-4" /> */}
              Book Now
            </GTMButton>
          </div>
        </div>
      )}
    </>
  );
} 