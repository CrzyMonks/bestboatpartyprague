import Link from "next/link";
import { Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#14181B] py-8 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center gap-3">
          {/* Logo/Title */}
          <h2 className="text-3xl font-bold" style={{ color: '#F9CF58' }}>
            PRAGUE PARTY CRUISE
          </h2>
          
          {/* Tagline */}
          <p className="text-white/60 text-base">
            Experience Luxury on the Waves
          </p>
          
          {/* Navigation Links */}
          <div className="flex gap-6 mt-1">
            <Link 
              href="https://www.facebook.com/warehouseentertainmentprague/" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#F9CF58] text-sm hover:opacity-80 transition-opacity"
            >
              Know More
            </Link>
            <Link 
              href="/contact" 
              className="text-[#F9CF58] text-sm hover:opacity-80 transition-opacity"
            >
              Contact Us
            </Link>
          </div>
          
          {/* Social Media */}
          <a 
            href="https://www.instagram.com/prague_party_cruise?igsh=ZXF6OG0yMDZsM2Ny" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="mt-2 p-1.5 rounded-full border border-[#F9CF58]/20 hover:border-[#F9CF58] transition-colors"
          >
            <Instagram className="w-5 h-5 text-[#F9CF58]" />
          </a>
          
          {/* Copyright */}
          <p className="text-white/40 text-xs mt-4">
            © 2025 Prague boat cruise. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 