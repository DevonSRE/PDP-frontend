'use client';

import React, { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import Link from 'next/link'; // Use next/link for client-side navigation
import { usePathname } from 'next/navigation';

interface NavLink {
  name: string;
  href: string;
}

const navLinks: NavLink[] = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about-us" },
  { name: "Our Services", href: "/services" },
  { name: "Training Courses", href: "/training-courses" },
  { name: "Locations", href: "/locations" },
  { name: "Contact Us", href: "/get-in-touch" },
];

export function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-b from-[#009782]/50 from-10% to-white to-30% backdrop-blur-sm">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Image
            src="/assets/pdp_logo_container.svg"
            alt="Logo"
            width={32} // Set the width in pixels
            height={32} // Set the height in pixels
            className="h-8 w-auto"
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-grow justify-center">
          <ul className="flex items-center space-x-4 p-4 bg-[#064C3C] rounded-full border-2 border-white shadow-sm">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className={`px-4 py-2 font-medium transition-colors duration-200 font-bai-jamjuree ${
                    pathname === link.href ? 'text-white' : 'text-gray-300 hover:text-teal-300'
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <button className="px-6 py-2 bg-black text-white rounded-full font-medium shadow-sm hover:bg-gray-800 transition-colors duration-200 font-bai-jamjuree">
            Learn More
          </button>
          <button className="px-6 py-2 bg-white text-black border-2 border-black rounded-full font-medium shadow-sm hover:bg-gray-100 transition-colors duration-200 font-bai-jamjuree">
            Book Now
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-black"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg border-t">
          <ul className="flex flex-col items-start space-y-2 p-4">
            {navLinks.map((link) => (
              <li key={link.name} className="w-full">
                <Link
                  href={link.href}
                  className={`block w-full px-4 py-2 font-medium rounded-md font-bai-jamjuree ${
                    pathname === link.href
                      ? 'bg-gray-200 text-black font-semibold'
                      : 'text-black hover:bg-gray-100'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex flex-col space-y-2 px-4 pb-4">
            <button className="w-full px-6 py-2 bg-black text-white rounded-full font-medium shadow-sm hover:bg-gray-800 transition-colors duration-200 font-bai-jamjuree">
              Learn More
            </button>
            <button className="w-full px-6 py-2 bg-white text-black border-2 border-black rounded-full font-medium shadow-sm hover:bg-gray-100 transition-colors duration-200 font-bai-jamjuree">
              Book Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
}