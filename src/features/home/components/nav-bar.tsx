"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

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
    <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-b from-[#009782]/50 from-10% to-white to-30% backdrop-blur-sm">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="/assets/pdp_logo_container.svg"
            alt="Logo"
            className="h-20 w-auto"
          />
        </div>

        {/* Desktop Navigation */}
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
                <a
                  href={link.href}
                  className="block w-full px-4 py-2 text-black font-medium rounded-md hover:bg-gray-100 font-bai-jamjuree"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
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

// "use client"
// import React, { useState } from 'react';

// interface NavLink {
//   name: string;
//   href: string;
// }

// const navLinks: NavLink[] = [
//   { name: "Home", href: "/" },
//   { name: "About Us", href: "/about-us" },
//   { name: "Our Services", href: "/services" },
//   { name: "Training Courses", href: "/training-courses" },
//   { name: "Locations", href: "/locations" },
//   { name: "Contact Us", href: "/get-in-touch" },
// ];

// export function NavBar() {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   return (
//     <header className="fixed top-0 left-0 w-full px-8 z-50 bg-gradient-to-b from-[#009782]/50  from-10% to-white to-30% backdrop-blur-sm">
//       <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
//         <div className="flex items-center space-x-2">
//           <img src="/assets/pdp_logo_container.svg" alt="Logo" className="h-30 w-40" />
//         </div>

//         {/* Desktop Navigation Links */}
//         <div className="hidden md:flex flex-grow justify-center">
//           <ul className="flex items-center space-x-4 p-4 bg-[#064C3C] rounded-full shadow-inner">
//             {navLinks.map((link) => (
//               <li key={link.name}>
//                 <a
//                   href={link.href}
//                   className="px-4 py-2 text-white font-medium hover:text-teal-300 transition-colors duration-200 font-bai-jamjuree"
//                 >
//                   {link.name}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Buttons Section */}
//         <div className="flex items-center space-x-4">
//           <button className="hidden md:block px-6 py-2 bg-black text-white rounded-full font-medium shadow-sm hover:bg-gray-800 transition-colors duration-200 font-bai-jamjuree">
//             Learn More
//           </button>
//           <button className="hidden md:block px-6 py-2 bg-white text-black border-2 border-black rounded-full font-medium shadow-sm hover:bg-gray-100 transition-colors duration-200 font-bai-jamjuree">
//             Book Now
//           </button>
//         </div>
//         </nav>
//     </header>
//   );
// }