"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link"; // Use next/link for client-side navigation
import { usePathname } from "next/navigation";
import { Logo } from "@/components/icon/logo";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { AnimatePresence, motion as m } from "motion/react";

interface NavLink {
  id: number;
  name: string;
  href: string;
}

const navLinks: NavLink[] = [
  { id: 1, name: "Home", href: "/" },
  { id: 2, name: "About Us", href: "/about-us" },
  { id: 3, name: "Our Services", href: "/services" },
  { id: 4, name: "Training Courses", href: "/training-courses" },
  { id: 5, name: "Locations", href: "/locations" },
  { id: 6, name: "Contact Us", href: "/get-in-touch" },
];

export function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-b from-[#009782]/50 from-20% to-transparent to-80% backdrop-blur-[2px] pt-8">
      <nav className="w-full md:container md:mx-auto px-2 lg:px-4 flex items-center justify-between gap-4">
        {/* Logo */}
        <Logo className="w-40" />

        {/* Desktop Navigation */}
        <ul
          className={cn(
            "text-xs lg:text-sm font-bai-jamjuree",
            "rounded-full border-2 border-white shadow-sm",
            "hidden md:flex items-center justify-center gap-2 lg:gap-4 p-2 lg:p-4 bg-[#064C3C]",
          )}
        >
          {navLinks.map((link) => (
            <li key={link.id}>
              <Link
                href={link.href}
                className={cn(
                  "px-2 lg:px-4 py-2 font-normal md:font-medium transition-colors duration-200 text-center",
                  pathname === link.href
                    ? "text-white font-semibold"
                    : "text-gray-300 hover:text-teal-300",
                )}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-2 lg:gap-4 font-bai-jamjuree text-xs lg:text-sm">
          <Button variant="default" className="rounded-full shadow-sm">
            Learn More
          </Button>
          <Button
            variant="outline"
            className="border-black rounded-full shadow-sm"
          >
            Book Now
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence mode="wait">
        {isMobileMenuOpen && (
          <m.div
            onClick={(e) => {
              e.stopPropagation();
              setIsMobileMenuOpen(false);
            }}
            className={cn(
              "absolute top-0 bottom-0 left-0 right-0 z-40",
              "md:hidden w-dvw h-dvh",
              "backdrop-blur-xs bg-black/20",
            )}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <m.div
              onClick={(e) => {
                e.stopPropagation();
              }}
              className="md:hidden w-2/3 h-dvh z-50 bg-white absolute top-0 right-0"
            >
              <ul className="flex flex-col items-start space-y-2 p-4">
                {navLinks.map((link) => (
                  <li key={link.name} className="w-full">
                    <Link
                      href={link.href}
                      className={`block w-full px-4 py-2 font-medium rounded-md font-bai-jamjuree ${
                        pathname === link.href
                          ? "bg-gray-200 text-black font-semibold"
                          : "text-black hover:bg-gray-100"
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
            </m.div>
          </m.div>
        )}
      </AnimatePresence>
    </header>
  );
}
