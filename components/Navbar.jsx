'use client';

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from 'react';
import { Ticket } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="absolute top-0 left-0 w-full px-6 py-8 flex items-center justify-between z-30">
        {/* Logo */}
        <Link href="/" className="flex items-center w-[250px]">
          <Image
            src="/images/logo.png"
            alt="Prague Party Cruise"
            width={250}
            height={50}
            className="h-16 w-auto"
            priority
          />
        </Link>

        {/* Navigation Links - Centered with equal spacing */}
        <div className="hidden md:flex items-center justify-center gap-20 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Link 
            href="/" 
            className="text-xl text-white hover:text-gray-200 font-medium relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#ff5f00] after:transition-all hover:after:w-full"
          >
            Home
          </Link>
          <Link 
            href="/faq" 
            className="text-xl text-white hover:text-gray-200 font-medium relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#ff5f00] after:transition-all hover:after:w-full"
          >
            FAQs
          </Link>
          <Link 
            href="/discounts" 
            className="text-xl text-white hover:text-gray-200 font-medium relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#ff5f00] after:transition-all hover:after:w-full"
          >
            Discounts
          </Link>
          <Link 
            href="/contact" 
            className="text-xl text-white hover:text-gray-200 font-medium relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#ff5f00] after:transition-all hover:after:w-full"
          >
            Contact Us
          </Link>
        </div>

        {/* Book Now Button - Right Side */}
        <div className="w-[200px] flex justify-end">
          <Button 
            className="hidden md:flex bg-[#db8a74] hover:bg-[#db8a74]/90 text-white rounded-full px-8 py-6 font-medium items-center gap-2 text-xl"
            onClick={() => {
              window.open('https://connect.boomevents.org/cs/organizer/2e24ee9e-6ef3-428b-a037-a5efabf8f07f', '_blank')
            }}
          >
            <Ticket className="w-6 h-6" />
            Book Now
          </Button>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              // Close icon
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Menu icon
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-black">
          {/* Menu Content */}
          <div className="relative flex flex-col items-center justify-center h-full gap-8 px-6">
            {/* Close Button - Positioned at the top right */}
            <button 
              className="absolute top-6 right-6 text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <Link 
              href="/" 
              className="text-3xl text-white hover:text-gray-200 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/faq" 
              className="text-3xl text-white hover:text-gray-200 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQs
            </Link>
            <Link 
              href="/discounts" 
              className="text-3xl text-white hover:text-gray-200 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Discounts
            </Link>
            <Link 
              href="/contact" 
              className="text-3xl text-white hover:text-gray-200 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
            <Button 
              className="bg-[#db8a74] hover:bg-[#db8a74]/90 text-white rounded-full px-6 py-6 text-xl w-full max-w-[200px] flex items-center justify-center gap-2"
              onClick={() => {
                window.open('https://connect.boomevents.org/cs/organizer/2e24ee9e-6ef3-428b-a037-a5efabf8f07f', '_blank')
              }}
            >
              <Ticket className="w-5 h-5" />
              Book Now
            </Button>
          </div>
        </div>
      )}
    </>
  );
} 