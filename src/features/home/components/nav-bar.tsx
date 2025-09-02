"use client"
import React, { useState } from 'react';

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

  return (
    <header className="fixed top-0 left-0 w-full px-8 z-50 bg-gradient-to-b from-[#009782]/50  from-10% to-white to-30% backdrop-blur-sm">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img src="/assets/pdp_logo_container.svg" alt="Logo" className="h-30 w-40" />
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex flex-grow justify-center">
          <ul className="flex items-center space-x-4 p-4 bg-[#064C3C] rounded-full shadow-inner">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="px-4 py-2 text-white font-medium hover:text-teal-300 transition-colors duration-200 font-bai-jamjuree"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Buttons Section */}
        <div className="flex items-center space-x-4">
          <button className="hidden md:block px-6 py-2 bg-black text-white rounded-full font-medium shadow-sm hover:bg-gray-800 transition-colors duration-200 font-bai-jamjuree">
            Learn More
          </button>
          <button className="hidden md:block px-6 py-2 bg-white text-black border-2 border-black rounded-full font-medium shadow-sm hover:bg-gray-100 transition-colors duration-200 font-bai-jamjuree">
            Book Now
          </button>
        </div>
        </nav>
    </header>
  );
}